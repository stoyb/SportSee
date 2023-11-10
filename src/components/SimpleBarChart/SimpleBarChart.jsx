import React from 'react'
import { fetchMock } from '../../api/service';
import { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  


const SimpleBarChart = () => {
    const [count, setCount] = useState(null)
    useEffect(()=> {
      const userId = 12
      const user = "id/activity"
      fetchMock(userId, user)
        .then(res => {
          setCount(res)
        })
        .catch(error => {
          console.error(error);
        });
      }, [])
  return (
    <div>
    {count ? (
        <BarChart
      width={500}
      height={400}
      data={count.sessions}
      margin={{
        top: 60,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
        {count.userId}
      <CartesianGrid vertical={false} strokeDasharray="2" />
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" barSize={7} fill="#282D30" radius={[3, 3, 0, 0]} />
      <Bar dataKey="calories" barSize={7} fill="#E60000" radius={[3, 3, 0, 0]} />
    </BarChart> 
    ) : (
        <p>Attendre...</p>
      )}

</div>
  )
}

export default SimpleBarChart