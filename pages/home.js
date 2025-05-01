// pages/home.js

import { useEffect, useState } from 'react';

export default function Home() {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    fetch('/api/getAnnouncement')
      .then((res) => res.json())
      .then((data) => setAnnouncement(data.message));
  }, []);

  return (
    <div>
      <h1>운영자 공지</h1>
      <p>{announcement}</p>
    </div>
  );
}

