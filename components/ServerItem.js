// components/ServerItem.js

export default function ServerItem({ server }) {
  return (
    <div className="server-item">
      <h3>{server.server_name}</h3>
      <p>Total Uses: {server.total_use}</p>
      <p>Hourly Uses: {server.hourly_use}</p>
      <button onClick={() => joinServer(server.id)}>참가</button>
    </div>
  );
}

