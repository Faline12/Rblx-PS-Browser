// pages/api/getAnnouncement.js

import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1); // 최신 공지사항 1개 가져오기

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data[0]); // 공지사항 반환
}
