import React from 'react'
import { useState, useEffect } from 'react'
import User from '../../formattedData/userData'
import { fetchData } from '../../services/service'
import styles from './SimpleRadialBarChart.module.css'
import { RadialBarChart, RadialBar, Legend} from 'recharts';

const SimpleRadialBarChart = () => {
    let userData = null
    let scoreData = null
    let todayScoreData = null
    const [countScore, setCountScore] = useState(null)
    useEffect(()=> {
        const userId = 12;
        const user = 'id'
        fetchData(userId, user) 
         .then(res => 
            setCountScore(res))
        .catch(error => 
            console.error(error))
        }, []);
        userData = countScore ? new User(countScore) : null
        scoreData = userData ? userData.setScore : null
        todayScoreData = userData ? userData.setTodayScore : null
        console.log(todayScoreData);
        const setStyleLegendText = () => {
          return <h2 className={styles.legend}>Score</h2>;
        };

        return (
    <>
    <div className={styles.radialBarChartComponent}>
      
    { countScore ? (
      <RadialBarChart 
      width={192} 
      height={192} 
      innerRadius="40%" 
      outerRadius="100%"  
      data={scoreData}
      startAngle={85} 
      endAngle={450}
      barSize={7}
      >
  <RadialBar minAngle={15} fill="#FFF" clockWise dataKey="data" />
  <Legend content={setStyleLegendText}/>
</RadialBarChart>
        ) : (
          <p>Loading...</p>
        )}
        <p className={styles.todayScore}>{todayScoreData}%
        <br/><span className={styles.todayScoreGrey}>de votre objectif</span></p>
    </div>
    </>
  )
}

export default SimpleRadialBarChart