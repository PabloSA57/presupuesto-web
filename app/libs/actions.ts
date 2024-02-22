'use server'
import { z } from 'zod';
import { createClient } from '../utils/supabase/server';
import { cookies } from 'next/headers';
import { StorageService } from '../services/storage';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const supabase = () =>  createClient(cookies())

const FormSchema = z.object({
    id: z.string(),
    user_id: z.string({
      invalid_type_error: 'Please select a customer.',
    }),
    name: z.string({
      invalid_type_error: 'Este campo no deberia estar vacio'
    }),
    direction: z.string({
      invalid_type_error: 'Este campo no deberia estar vacio'
    }),
    
    file: z.any({
      invalid_type_error: 'error file'
    }),
    status: z.enum(['pending', 'paid'], {
      invalid_type_error: 'Please select an invoice status.',
    }),
    start_date: z.string(),
    end_date: z.string(),
  });

  const FormSchema2 = z.object({
    email: z.string({
      invalid_type_error: "s",
    })
  }).required({
    
  })

  const FormCreate = FormSchema.omit({id:true, status: true, date: true, user_id: true})

  export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };
  
export async function createObra(prevState: any,formData: FormData) {
  console.log('action', formData.get('email'))
  
    const validatedFields = FormCreate.safeParse( {
        name: formData.get('name'),
        direction: formData.get('direction'),
        file: formData.get('file'),
        start_date: formData.get('start_date') ,
        end_date: formData.get('end_date'),
    })
    
    if(!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }


    const cookie = cookies()
    const supabase = createClient(cookie)


    const { name, direction, file, start_date, end_date } = validatedFields.data;
    console.log(name, direction, file, start_date, end_date)

      let newObj: any = {name, direction}

      if(Boolean(start_date) && Boolean(end_date)) newObj = {...newObj, start_date, end_date}

      try {
        
        const {data: {user}, error: errorAuth} = await supabase.auth.getUser()
        if(file.size > 0) {
          const storage = new StorageService(supabase)
          const image_url = await storage.upload_image(user?.id!, file)
  
          newObj = {...newObj , image_url: image_url}
        }
  
       const {data, error: errorInsert} = await supabase.from('obras').insert({...newObj, id_user: user?.id})
  
        if(errorAuth || errorInsert) {
          
          return {
            message: "Error al crear"
          }
        }
      } catch (error) {
        return {
          message: 'Error al crear'
        }
      }

      revalidatePath('/dashboard/obras');
      redirect('/dashboard/obras');
    
}




export async function upadteJob(prevState: any,formData: FormData, id: number, id_obra: string | number) {
  //console.log(formData.get('meter'))

  
  console.log(id, 'id')
  const meter = formData.get('meter')

  console.log(meter, 'meter')

  const cookie = cookies()
    const supabase = createClient(cookie)

    const {data: user, error: errorAuth} = await supabase.auth.getUser()

    if(errorAuth){
      throw new Error('You must be signed in to perform this action')
    }

    const {data: budget_job, error: error_job} = await supabase.from('budget_job').update({meter: meter as string}).eq('id', id)

    console.log(budget_job, error_job)

    if(error_job){
      return {
        message:'error al actualizar'
      }
    }
    
    revalidatePath(`/dashboard/obras/${id_obra}`);
    //redirect(`/dashboard/obras/${id_obra}`);
    return {
      message:'Se actualizo correctamente'
    }
}

export async function deleteJob(id: number, id_obra: string) {
  
  const {data: user, error: errorAuth} = await supabase().auth.getUser()

    if(errorAuth){
      throw new Error('You must be signed in to perform this action')
    }

    const {data, error} = await supabase().from('budget_job').delete().eq('id', id)

    if(error) {
      console.log(error)
    }


   revalidatePath(`/dashboard/obras/${id_obra}`);
}