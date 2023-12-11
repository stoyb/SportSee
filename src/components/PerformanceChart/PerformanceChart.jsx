//Imports
import React from 'react'
import { useState, useEffect } from 'react';
import { fetchData } from '../../services/service';
import User from '../../formattedData/userData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './PerformanceChart.module.css'

//Component function
const PerformanceChart = () => {
  let performanceData = null
  let radarData = null

  // Import data 
  const [countPerformance, setCountPerformance] = useState(null)
  useEffect(()=> {
    const userId = 12;
    const performance = 'id/performance';
    fetchData(userId, performance) 
     .then(res => 
      setCountPerformance(res))
     .catch(error => 
      console.error(error))
  }, []);
  
  // Formates data  
  performanceData = countPerformance ? new User(countPerformance) : null
  radarData = performanceData ? performanceData.subjectItem : null

  return (
    <>
    <div className={styles.radarChartComponent}>
  { countPerformance ? (
    <ResponsiveContainer width={180} height={180}>
    <RadarChart className={styles.radarChartContainer}  padding={{ right: 10, left: 10 }} cx={86} cy={95} outerRadius={50} data={radarData}>
    <PolarGrid radialLines={false} />
    <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: 8, fontWeight: 'bold' }} tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
    </RadarChart>
    </ResponsiveContainer>
  ) : (
    <p>Les données n'ont pas été récupérées. Veuillez réessayer plus tard.</p>

    )}
    </div>
  </>
  
  )

  }

export default PerformanceChart
