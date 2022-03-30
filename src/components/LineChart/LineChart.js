import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Huku = () => {
    const data = [
        {
          name: 'product A',
          price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Product B',
          price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Product C',
          price: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Product D',
          price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Product E',
          price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Product F',
          price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Product G',
          price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
      <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="price" stroke="#8884d8"></Line>
          <Line type="monotone" dataKey="pv" stroke="#341f97"></Line>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <Tooltip />
          <YAxis />
      </LineChart>
    );
};

export default Huku ;