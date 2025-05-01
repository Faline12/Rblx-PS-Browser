// pages/api/getNicknameColor.js

import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { accessCode } = req.query;

  const { data, error } = await supabase
    .from('access_codes')
    .select('nickname_color')
    .eq('access_code', accessCode)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ nicknameColor: data.nickname_color });
}

