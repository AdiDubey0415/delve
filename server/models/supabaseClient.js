import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  "https://vgnjikinfcpiyijbwgjh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbmppa2luZmNwaXlpamJ3Z2poIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTAxMzg0MSwiZXhwIjoyMDU0NTg5ODQxfQ.XApHKSotPLEBTVVKgtU2HT4ct39DhCsxdqI3rFF6z_0"
);

export default supabase;
