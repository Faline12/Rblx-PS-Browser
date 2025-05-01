// components/ServerList.js

import ServerItem from './ServerItem';

export default function ServerList({ servers }) {
  return (
    <div className="server-list">
      {servers.map((server) => (
        <ServerItem key={server.id} server={server} />
      ))}
    </div>
  );
}
