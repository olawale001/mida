import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";


const data = [
    {name: 'Jan', users: 30},
    {name: 'Feb', users: 45},
    {name: 'Mar', users: 70},
    {name: 'Apr', users: 60},

];

export default function ChartWidget() {
    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h2 className="text-x1 font-semibold text-gray-800 dark:text-gray-100 mb-4">Monthly Users</h2>
            <LineChart width={300} height={200} data={data}>
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}