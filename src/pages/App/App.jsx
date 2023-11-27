import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'; 
import Sidebar from '../../components/Sidebar/Sidebar';
import SimpleBarChart from '../../components/SimpleBarChart/SimpleBarChart';
import styles  from './App.module.css'
import { fetchData } from '../../services/service';
import User  from '../../formattedData/userData';
import SimpleLineChart from '../../components/SimpleLineChart/SimpleLineChart';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';
import SimpleRadialBarChart from '../../components/SimpleRadialBarChart/SimpleRadialBarChart';


function App() {
const [count, setCount] = useState(null)
let user = null;
let firstName = null;
useEffect(()=> {
  const userId = 12
  const user = "id"
  fetchData(userId, user)
  .then(res => {
    setCount(res)
  })
  .catch(error => {
    console.error(error);
  });
}, [])

user = count ? new User(count) : null;
firstName = count ? user.name : null;
console.log(firstName);

return (
  <>
    <Navbar />
    <Sidebar />
    <div className={styles.background}>
      {count ? (
        <div>
            <h1 className={styles.title}>
              Bonjour <span className={styles.red}>{firstName}</span>
            </h1>
            <p className={styles.subtitle}>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <SimpleBarChart />
    <SimpleLineChart/>
    <SimpleRadarChart/>
    <SimpleRadialBarChart/>
  </>
);
}

export default App