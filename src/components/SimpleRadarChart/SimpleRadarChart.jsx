import React from 'react'
import { useState, useEffect } from 'react';
import { fetchData } from '../../services/service';
import User from '../../formattedData/userData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import styles from './SimpleRadarChart.module.css'

const SimpleRadarChart = () => {
  let performanceData = null
  let cardioData = null
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
  
  performanceData = countPerformance ? new User(countPerformance) : null
  cardioData = performanceData ? performanceData.subjectItem : null
  
  return (
    <>
    <div className={styles.radarChartComponent}>
  { countPerformance ? (
    <RadarChart cx={90} cy={100} outerRadius={48} width={260} height={200} data={cardioData}>
    <PolarGrid radialLines={false} />
    <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: 8, fontWeight: 'bold' }} tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
    </RadarChart>
  ) : (
    <p>Loading...</p>

    )}
    </div>
  </>
  
  )

  }

export default SimpleRadarChart
