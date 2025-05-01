// pages/servers.js

import { useEffect, useState } from 'react';

export default function Servers() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetch('/api/getServers') // 서버 데이터를 가져오는 API
      .then((res) => res.json())
      .then((data) => setServers(data));
  }, []);

  return (
    <div>
      <h1>서버 목록</h1>
      <ul>
        {servers.map((server) => (
          <li key={server.id}>
            <h3>{server.server_name}</h3>
            <p>Total Uses: {server.total_use}</p>
            <p>Hourly Uses: {server.hourly_use}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
