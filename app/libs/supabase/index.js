const { createClient } = require("@supabase/supabase-js");

console.log(NEXT_PUBLIC_PUBLIC_ANON_KEY, "anon");
export const supabase = createClient(
  process.env.NEXT_PUBLIC_URL_SUPABASE,
  process.env.NEXT_PUBLIC_PUBLIC_ANON_KEY
);
