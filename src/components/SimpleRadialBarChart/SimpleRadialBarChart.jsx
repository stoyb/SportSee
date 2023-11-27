import React from 'react'
import { useState, useEffect } from 'react'
import User from '../../formattedData/userData'
import { fetchData } from '../../services/service'
import styles from './SimpleRadialBarChart.module.css'
import { RadialBarChart, RadialBar, Legend} from 'recharts';

const SimpleRadialBarChart = () => {
    let userData = null
    //let scoreData = null
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
        //scoreData = userData ? userData.setScore : null
        console.log(userData);
        return (
    <>
    <div className={styles.radialBarChartComponent}>
    { countScore ? (<RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%"  
  data={countScore}
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#000', position: 'insideStart' }} background clockWise={true} dataKey="setScore" />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
</RadialBarChart>
        ) : (
          <p>Loading...</p>
        )}
    </div>
    </>
  )
}

export default SimpleRadialBarChart