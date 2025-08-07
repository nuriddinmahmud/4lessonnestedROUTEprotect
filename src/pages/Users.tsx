import { useState } from 'react';
import Tabs from '../components/Tabs';

const tabs = ['Hamma userlar', 'Aktivlar', 'Ban userlar'];

const Users = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Userlar</h1>
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 0 && <div>Hamma userlar</div>}
      {activeTab === 1 && <div>Aktivlar</div>}
      {activeTab === 2 && <div>Ban userlar</div>}
    </div>
  );
};

export default Users;
