import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);

export const addUser = async (name: string, password: string) => {
  const { data, error } = await supabase.from("user").insert({ name, password });

  if (error) {
    throw new Error(`Failed to add user: ${error.message}`);
  }

  return data;
};
