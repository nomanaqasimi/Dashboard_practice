import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './components/mainLayout';
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import Reports from './pages/reports';

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

            <Route path="users" element={<Users />} />
 
        
          <Route path="reports" element={<Reports />} />
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;