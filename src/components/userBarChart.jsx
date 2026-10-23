import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const barChartData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 5000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 6890 },
  { name: 'Jun', users: 2390 },
];

function UserBarChart() {
  return (
    <div className="h-48 w-full">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 p-4
      ">User Growth</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barChartData}>
          <XAxis dataKey="name" stroke="#8884d8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
          <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserBarChart;