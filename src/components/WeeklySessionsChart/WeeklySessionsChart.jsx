//Imports
import React, { useState, useEffect } from 'react'
import { fetchData } from '../../services/service';
import User from '../../formattedData/userData';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import styles from './WeeklySessionsChart.module.css'

//Component function
const WeeklySessionsChart = () => {
   let sessionsData = null
   let data = null

    // Import data 
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
  }, []); 

  // Formates data 
  sessionsData = countSessions ? new User(countSessions) : null
  data = sessionsData ? sessionsData.formattedDataForLineChart : null

  //Legend content 
   const setStyleLegendText = () => {
    return <h2 className={styles.legend}>Durée moyenne des sessions</h2>;
  };

   //Tooltip content 
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
    <ResponsiveContainer>
    <LineChart 
    className={styles.barChartContainer}  
    data={data} 
    >
    <XAxis dataKey="day" padding={{ right: 10, left: 10 }} tickLine={false} axisLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 500 }}/> 
    <Tooltip content={CustomTooltip} /> 
    <Legend content={setStyleLegendText}/> 
    <Line type="basis" dataKey="sessionLength" dot={false} stroke={'rgba(255,255,255,0.5)'} activeDot={{fill:'#FFF', strokeWidth: 10, stroke: 'rgba(255,255,255,0.2)'}} /> 
    </LineChart>
    </ResponsiveContainer>
    ):(
      <p>Les données n'ont pas été récupérées. Veuillez réessayer plus tard.</p>
    ) 
}
    </div>
    
    </>
  )
}

export default WeeklySessionsChart