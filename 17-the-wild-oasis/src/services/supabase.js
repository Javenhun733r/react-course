import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zoyefxzlxoteuicqcyds.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpveWVmeHpseG90ZXVpY3FjeWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNTYzNjIsImV4cCI6MjA4NTkzMjM2Mn0.NfKQqc1huRcmQ_0WgFrgyIHGfff0f44zIk-ef3mQecc`;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
