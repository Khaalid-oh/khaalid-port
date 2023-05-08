import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Figma",
    years: 5,
    proficiency: 95,
  },
  {
    name: "HTML/CSS",
    years: 4,
    proficiency: 90,
  },
  {
    name: "Javascript",
    years: 3,
    proficiency: 80,
  },
  {
    name: "React",
    years: 3,
    proficiency: 85,
  },
  {
    name: "Node.js",
    years: 2,
    proficiency: 70,
  },
  {
    name: "MongoDB",
    years: 1,
    proficiency: 65,
  },
  {
    name: "SQL",
    years: 2,
    proficiency: 80,
  },
];


function Chart() {
  return (
    <div className="dark:bg-darkk dark:text-midnight">
      <div className="flex flex-col mt-16 items-center justify-center">
        <h3 className="text-2xl font-bold dark:text-white">Simple Line Chart</h3>
        <p className="text-pink">SKills Chart</p>
      </div>

      <ResponsiveContainer width="100%" aspect={1.8} className="mt-4">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="proficiency"
            stroke="#9C27B0"
            activeDot={{ r: 6 }}
          />
          <Line type="monotone" dataKey="years" stroke="#8D7192" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
