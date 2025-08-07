import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Asosiy', path: '/dashboard' },
  { name: 'Userlar', path: '/users' },
  { name: 'Orderlar', path: '/orders' },
  { name: 'Productlar', path: '/products' },
  { name: 'Categoriyalar', path: '/categories' },
  { name: 'Analizlar', path: '/analytics' },
  { name: 'Xabarlar', path: '/messages' },
  { name: 'Ting-ting', path: '/notifications' },
  { name: 'Sozlamalar', path: '/settings' },
  { name: 'Yordam', path: '/support' },
];

const Sidebar = () => {
  return (
    <aside className="w-56 h-screen bg-gray-100 border-r">
      <div className="p-4 text-lg font-semibold text-gray-800 border-b">
        ZNZ-CODER
      </div>
      <nav className="p-2 space-y-1">
        {menuItems.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded text-sm ${
                isActive
                  ? 'bg-blue-500 text-white font-medium'
                  : 'text-gray-700 hover:bg-blue-100'
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
