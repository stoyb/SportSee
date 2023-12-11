//Imports
import React from 'react'
import { useState, useEffect } from 'react'
import User from '../../formattedData/userData'
import { fetchData } from '../../services/service'
import styles from './ScoreChart.module.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';

//Component function
const ScoreChart = () => {
    let userData = null
    let scoreData = null
    let todayScoreData = null
    
    // Import data 
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
    
    //Legend content 
    const setStyleLegendText = () => {
      return <h2 className={styles.legend}>Score</h2>;
    };

      return (
    <>
    <div className={styles.radialBarChartComponent}>
    { countScore ? (
      <ResponsiveContainer width={180} height={180} className={styles.radialBarChartContainer}>
      <RadialBarChart 
      width={192} 
      height={192} 
      innerRadius="100%" 
      outerRadius="40%"  
      data={scoreData}
      startAngle={85} 
      endAngle={450}
      barSize={7}
      cx={80}
      cy={95}
      >
  <RadialBar minAngle={15} radius={[10]} cornerRadius={30 / 2} clockWise dataKey="data" />
  <Legend content={setStyleLegendText}/>
</RadialBarChart>
</ResponsiveContainer>
        ) : (
          <p>Les données n'ont pas été récupérées. Veuillez réessayer plus tard.</p>
        )}
        <p className={styles.todayScore}>{todayScoreData}%
        <br/><span className={styles.todayScoreGrey}>de votre objectif</span></p>
    </div>
    </>
  )
}

export default ScoreChart