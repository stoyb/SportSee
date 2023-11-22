import React from 'react'
import { useState, useEffect } from 'react';
import { fetchData } from '../../services/service';
import User from '../../formattedData/userData';

const RadarChat = () => {
  let performanceData = null
  let cardioData = null
  let energyData = null
  let enduranceData = null
  let strengthData = null
  let speedData = null
  let intensityData = null
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
  console.log(countPerformance);
  performanceData = countPerformance ? new User(countPerformance) : null
  cardioData = performanceData ? performanceData.cardioItem : null
  energyData = performanceData ? performanceData.energyItem : null
  enduranceData = performanceData ? performanceData.enduranceItem : null
  strengthData = performanceData ? performanceData.strengthItem : null
  speedData = performanceData ? performanceData.speedItem : null
  intensityData = performanceData ? performanceData.intensityItem : null
  console.log(cardioData);
  console.log(energyData);
  console.log(enduranceData);
  console.log(strengthData);
  console.log(speedData);
  console.log(intensityData);
  return (
    <div>RadarChat</div>
  )
}

export default RadarChat