import UserBarChart from './userBarChart';
function Analytics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hidden lg:flex flex-col gap-4 text-black dark:text-white">
      <h2 className="text-xl font-bold">Analytics</h2>
      
      <div className="h-40 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
        <UserBarChart/>
      </div>
      
      <div className="h-40 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
        Pie Chart Placeholder
      </div>
    </div>
  );
}

export default Analytics;