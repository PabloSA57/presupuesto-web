export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      budget: {
        Row: {
          created_at: string
          id: number
          id_obra: number 
          total: number 
          charged: number 
        }
        Insert: {
          created_at?: string
          id?: number
          id_obra?: number | null
          total?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_obra?: number | null
          total?: number | null
          charged?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Presupuesto_id_obra_fkey"
            columns: ["id_obra"]
            isOneToOne: false
            referencedRelation: "obras"
            referencedColumns: ["id"]
          }
        ]
      }
      budget_job: {
        Row: {
          created_at: string
          id: number
          id_budget: number | null
          measurement: string | null
          meter: number | null
          name: string | null
          price_labour: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_budget?: number | null
          measurement?: string | null
          meter?: number | null
          name?: string | null
          price_labour?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_budget?: number | null
          measurement?: string | null
          meter?: number | null
          name?: string | null
          price_labour?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Presupuesto_trabajo_id_presupuesto_fkey"
            columns: ["id_budget"]
            isOneToOne: false
            referencedRelation: "budget"
            referencedColumns: ["id"]
          }
        ]
      }
      jobs: {
        Row: {
          created_at: string
          id: number
          measurements: string | null
          price: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          measurements?: string | null
          price?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          measurements?: string | null
          price?: number | null
        }
        Relationships: []
      }
      obras: {
        Row: {
          created_at: string
          direction: string | null
          end_date: string | null
          id: number
          id_user: string | null
          image_url: string | null
          name: string
          start_date: string | null
          state: string | null
        }
        Insert: {
          created_at?: string
          direction?: string | null
          end_date?: string | null
          id?: number
          id_user?: string | null
          image_url?: string | null
          name: string
          start_date?: string | null
          state?: string | null
        }
        Update: {
          created_at?: string
          direction?: string | null
          end_date?: string | null
          id?: number
          id_user?: string | null
          image_url?: string | null
          name?: string
          start_date?: string | null
          state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_obras_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      count_obras: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      hello_world: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      sum_total: {
        Args: {
          id_other: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
