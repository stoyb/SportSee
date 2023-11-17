import React from 'react'
import { fetchData } from '../../services/service';
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
import styles from './SimpleBarChart.module.css'
import Activity from '../../formatedData/activityData';
  

const SimpleBarChart = () => {
  let activity = null
  let sessions = null
  const setStyleLegendText = (value) => {
    return <span className={styles.legend} >{value}</span>;
  };
  const CustomTooltip = ({ payload }) => {
      return (
        <div className={styles.tooltip} >
          <p className="weight">{payload[0].value + "kg"}</p>
          <p className="calories">{payload[1].value + "kCal"}</p>
        </div>
      );
  };
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
     <div>
      <p className={styles.title}>Activité quotidienne</p>
      {count ? <Legend align="center" verticalAlign="bottom" /> : null}
     </div>
    {count ? (
        <BarChart
      width={590}
      height={270}
      data={sessions}
      margin={{
        top:30,
        right: 32,
        left: 32,
        bottom: 90
      }}
      className={styles.barChartContainer}
      >  
      <CartesianGrid vertical={false} strokeDasharray="2" />
      <XAxis dataKey="day" tickLine={false} tick={{ fill: "#74798C", fontSize: 14, fontWeight: 500 }} tickMargin={12} />
      <YAxis orientation="right" tickLine={false} tick={{ fill: "#74798C", fontSize: 14, fontWeight: 500 }} tickMargin={20} interval={1}/>
      <Tooltip content={<CustomTooltip />} />
      <Legend verticalAlign="top" iconSize={8} iconType="circle" wrapperStyle={{position:"absolute", bottom:272, left:184}} formatter={setStyleLegendText}/>
      <Bar name="Poids (kg)" dataKey="kilogram" barSize={7} fill="#282D30" radius={[3, 3, 0, 0]} />
      <Bar name="Calories brulées (kCal)"dataKey="calories" barSize={7} fill="#E60000" radius={[3, 3, 0, 0]} />
    </BarChart> 

) : (
  <p>Loading...</p>
)
}
</div>
  )
}

export default SimpleBarChart