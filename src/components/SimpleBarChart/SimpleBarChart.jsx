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
import User from '../../formattedData/userData';
  

const SimpleBarChart = () => {
  let activity = null
  let sessions = null
  const [count, setCount] = useState(null)
    useEffect(()=> {
      const userId = 12
      const activity = "id/activity"
      fetchData(userId, activity)
        .then(res => {
          setCount(res)
        })
        .catch(error => {
          console.error(error);
        });
      }, [])
    
  activity = count ? new User(count) : null;
  sessions = activity ? activity.formattedDataForBarChart : null;
 

  const setStyleLegendText = (value) => {
    return <span className={styles.legend}>{value}</span>;
  };
  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
   <div className={styles.barChartComponent}>
     <div>
      <h2 className={styles.title}>Activité quotidienne</h2>
      {count ? <Legend align="center" verticalAlign="bottom" /> : null}
     </div>
    {count ? (
        <BarChart
      width={660}
      height={260}
      data={sessions}
      margin={{
        top:30,
        right: 32,
        left: 32,
        bottom: 24
      }}
      className={styles.barChartContainer}
      >  
      <CartesianGrid vertical={false} strokeDasharray="2" />
      <XAxis dataKey="day" tickLine={false} tick={{ fill: "#74798C", fontSize: 14, fontWeight: 500 }} tickMargin={12} />
      <YAxis orientation="right" tickLine={false} tick={{ fill: "#74798C", fontSize: 14, fontWeight: 500 }} tickMargin={20} interval={1}/>
      <Tooltip content={<CustomTooltip />} />
      <Legend verticalAlign="top" iconSize={8} iconType="circle" wrapperStyle={{position:"absolute", bottom:260, left:272}} formatter={setStyleLegendText}/>
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