import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ZAxis,
  ComposedChart,
  Legend
} from "recharts";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const DashboardGraphs = () => {
  const lineData = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 700 },
    { name: "Mar", uv: 200 },
    { name: "Apr", uv: 800 },
    { name: "May", uv: 600 },
    { name: "Jun", uv: 1200 },
  ];

  const barData = [
    { name: "Sales", value: 3000 },
    { name: "Marketing", value: 2000 },
    { name: "Development", value: 2780 },
    { name: "HR", value: 1890 },
  ];

  const pieData = [
    { name: "Male", value: 60 },
    { name: "Female", value: 40 },
  ];

  const areaData = [
    { name: "Week 1", value: 100 },
    { name: "Week 2", value: 300 },
    { name: "Week 3", value: 500 },
    { name: "Week 4", value: 800 },
  ];

  const radarData = [
    { subject: "Communication", A: 120 },
    { subject: "Technical", A: 110 },
    { subject: "Teamwork", A: 130 },
    { subject: "Leadership", A: 100 },
    { subject: "Creativity", A: 90 },
    { subject: "Punctuality", A: 80 },
  ];

  const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
  ];

  const composedData = [
    { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
    { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
    { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
    { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
    { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
    { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
  ];

  const pieColors = ["#8884d8", "#82ca9d"];

  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6 space-y-10">
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Users", "Jobs", "Companies", "Revenue"].map((label, i) => (
          <motion.div
            key={label}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white shadow-md rounded-xl p-4 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-1">{label}</h3>
            <CountUp
              end={Math.floor(Math.random() * 10000 + 1000)}
              duration={3}
              separator="," />
          </motion.div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">Monthly Traffic</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">Department Budget</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">Gender Ratio</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">Weekly User Growth</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">Skills Assessment</h4>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={100} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="A" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">Engagement Scatter</h4>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="x" name="stature" unit="cm" />
              <YAxis dataKey="y" name="weight" unit="kg" />
              <ZAxis dataKey="z" range={[60, 400]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="A school" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl xl:col-span-2">
          <h4 className="text-lg font-semibold mb-2">Composed Performance Overview</h4>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={composedData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraphs;
