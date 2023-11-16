import React from 'react'
import { fetchData } from '../../services/service';
import { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
import styles from './SimpleBarChart.module.css'
import Activity from '../../formatedData/activityData';
  

const SimpleBarChart = () => {
  let activity = null
  let sessions = null
  //let kilogram

  const [count, setCount] = useState(null)
    useEffect(()=> {
      const userId = 12
      const user = "id/activity"
      fetchData(userId, user)
        .then(res => {
          setCount(res)
        })
        .catch(error => {
          console.error(error);
        });
      }, [])
    
  activity = count ? new Activity(count.sessions) : null;
  sessions = count ? activity.formatedSession : null;
  return (
   <div className={styles.barChartComponent}>
    <p>Activité quotidienne</p>
    {count ? (
        <BarChart
      width={540}
      height={190}
      data={sessions}
      margin={{
        top: 60,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className={styles.barChartContainer}
      >   
      <CartesianGrid vertical={false} strokeDasharray="2" />
      <XAxis dataKey="day" tickLine={false} tick={{ fill: "red", fontSize: 14, fontWeight: 500 }} />
      <YAxis orientation="right" tickLine={false}/>
      <Tooltip />
      <Bar dataKey="kilogram" barSize={7} fill="#282D30" radius={[3, 3, 0, 0]} />
      <Bar dataKey="calories" barSize={7} fill="#E60000" radius={[3, 3, 0, 0]} />
    
    </BarChart> 

) : (
  <p>Loading...</p>
)
}
</div>
  )
}

export default SimpleBarChart