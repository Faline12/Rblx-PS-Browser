// pages/api/resetHourlyUse.js

import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('game_servers')
    .update({ hourly_use: 0 })
    .neq('hourly_use', 0); // 만약 hourly_use가 0이 아니면 리셋

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Hourly use has been reset!' });
}
