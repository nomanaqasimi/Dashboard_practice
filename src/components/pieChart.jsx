import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function TrafficPieChart({ data }) {
  return (
    <div className="h-48 w-full">
        <div className="flex justify-between items-center">
      <h1 className="text-md font-semibold text-gray-500 dark:text-gray-400 mb-2">Device Traffic</h1>
      <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-600 mb-2">this month</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          
          <Pie 
            data={data} 
            cx="50%" cy="50%" 
            innerRadius={40} outerRadius={70} 
            paddingAngle={5} 
            dataKey="value"
            stroke="none"
          />
         
          
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficPieChart;