import React, { PureComponent } from "react";
import { motion } from "framer-motion";
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
    name: "Next",
    years: 2,
    proficiency: 80,
  },
  {
    name: "Vue",
    years: 3,
    proficiency: 80,
  },
  {
    name: "React Native",
    years: 3,
    proficiency: 80,
  },
  {
    name: "Node.js",
    years: 3,
    proficiency: 85,
  },
  {
    name: "MongoDB",
    years: 2,
    proficiency: 85,
  },
  {
    name: "C#",
    years: 6,
    proficiency: 95,
  },
  {
    name: "Figma",
    years: 6,
    proficiency: 95,
  },
];


function Chart() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2}}
     className="dark:bg-darkk dark:text-midnight">
      <div className="flex flex-col mt-16 items-center justify-center">
        <h3 className="text-2xl font-bold dark:text-white">
          Simple Line Chart
        </h3>
        <p className="text-pink">SKills Chart</p>
      </div>

      <ResponsiveContainer width="100%" aspect={1.8} className="mt-4">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" domain={[0, 100]} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 10]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="proficiency"
            stroke="#9C27B0"
            activeDot={{ r: 6 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="years"
            stroke="#8D7192"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default Chart;