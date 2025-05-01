// pages/api/saveAnnouncement.js

import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { announcement } = req.body;

  const { data, error } = await supabase
    .from('announcements')
    .insert([
      {
        message: announcement,
        created_at: new Date(),
      },
    ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data); // 공지사항 저장 완료
}
