import React, { useState, useEffect } from 'react'
import { fetchData } from '../../services/service';
import User from '../../formattedData/userData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from './SimpleLineChart.module.css'

const SimpleLineChart = () => {
   let sessionsData = null
   let data = null
    const [countSessions, setCountSessions] = useState(null);
    useEffect(()=> {
    const userId = 12;
    const sessions = 'id/sessions';
    fetchData(userId, sessions)
       .then(res => {
        setCountSessions(res)})
       .catch(error => {
           console.error(error);
       })
  }, [])
   sessionsData = countSessions ? new User(countSessions.sessions) : null
   data = sessionsData ? sessionsData.formattedDataForLineChart : null
   console.log(data);
   const setStyleLegendText = () => {
    return <span className={styles.legend}>Durée moyenne des sessions</span>;
  };
   const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <>
    <div className={styles.barChartComponent}>
    { countSessions ? (
    <LineChart className={styles.barChartContainer} width={266} height={200} data={data}>
    <CartesianGrid horizontal={false} vertical={false} />
    <XAxis dataKey="day" padding={{ right: 10, left: 10 }} tickLine={false} axisLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 500 }}/>
    <YAxis tick={false} axisLine={false} />
    <Tooltip content={CustomTooltip} />
    <Legend content={setStyleLegendText}/>
    <Line type="basis" dataKey="sessionLength" dot={false} stroke={'rgba(255,255,255,0.5)'} activeDot={{fill:'#FFF', strokeWidth: 10, stroke: 'rgba(255,255,255,0.2)'}}/>
  </LineChart>
    ):(
      <p>Loading...</p>
    ) 
}
    </div>
    
    </>
  )
}

export default SimpleLineChart