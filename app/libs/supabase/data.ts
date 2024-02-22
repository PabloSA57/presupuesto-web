import {supabase} from '@/app/libs/supabase/index'

const ITEMFORPAGE = 6
export const fetchFilteredObra = async ():Promise<number> => {
   return  await supabase.from('obras').select().range()
}

