import { memo } from 'react';

const Dashboard = () => {
  return (
    <div className="Dashboard text-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Dashboard</h2>

      <img
        src="https://i.imgflip.com/30b1gx.jpg"
        alt="Funny Dashboard Meme"
        className="mx-auto max-w-xl w-full rounded shadow-lg"
      />

      <p className="text-gray-600">Dashboardni o'zim qildim lekin USTOZ anqqisaa</p>
    </div>
  );
};

export default memo(Dashboard);
