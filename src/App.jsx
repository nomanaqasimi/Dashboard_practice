import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './components/mainLayout';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      
      {/* Navbar hamesha top par rahega */}
      <Navbar />

      {/* Routes Setup */}
      <Routes>
        {/* MainLayout parent route hai */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Default page (index) Dashboard hoga */}
          <Route index element={<Dashboard />} />
          
          {/* Baki pages
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} /> */}
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;