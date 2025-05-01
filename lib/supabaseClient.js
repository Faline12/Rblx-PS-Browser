// lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Supabase URL과 키는 .env.local에서 가져옵니다.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
