// React components
import React, { useState, useEffect } from 'react';

// Created components
import Navbar from '../../components/Navbar/Navbar'; 
import Sidebar from '../../components/Sidebar/Sidebar';
import DailyActivityChart from '../../components/DailyActivityChart/DailyActivityChart';
import WeeklySessionsChart from '../../components/WeeklySessionsChart/WeeklySessionsChart';
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import UserDataCard from '../../components/UserDataCard/UserDataCard';

// CSS module
import styles  from './App.module.css'

// Service API calls
import { fetchData } from '../../services/service';

// Formating data class
import User  from '../../formattedData/userData';

// Assets
import logoCalories from "../../assets/icons/calories-icon.jpg";
import logoProteines from "../../assets/icons/protein-icon.jpg";
import logoCarbo from "../../assets/icons/carbs-icon.jpg";
import logoLipid from "../../assets/icons/fat-icon.jpg";

function App() {
const [count, setCount] = useState(null)
let user = null;
let firstName = null;
let calories = null;
let protein = null;
let carbo = null; 
let lipid = null; 

useEffect(()=> {
  const userId = 12
  const user = "id"
  fetchData(userId, user)
  .then(res => {
    setCount(res)
  })
  .catch(error => {
    console.error(error);
    setCount();
  });
}, [])

user = count ? new User(count) : null;
firstName = count ? user.name : null;
calories = count ? user.calories : null;
protein = count ? user.proteines : null; 
carbo = count ? user.carbo : null;
lipid = count ? user.lipid : null;

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
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
      ) : (
        <p>Les données n'ont pas été récupérées. Veuillez réessayer plus tard.</p>
      )}
    </div>
    <DailyActivityChart />
    <div className={styles.charts}>
    <WeeklySessionsChart/>
    <PerformanceChart/>
    <ScoreChart/>
    </div>
    <section className={styles.cards}>
    <UserDataCard img={logoCalories} value={`${calories}kCal`} type="Calories"/>
    <UserDataCard img={logoProteines} value={`${protein}g`} type="Protéines"/> 
    <UserDataCard img={logoCarbo} value={`${carbo}g`} type="Glucides"/>
    <UserDataCard img={logoLipid} value={`${lipid}g`} type="Lipides"/> 

    </section>
  </>
);
}

export default App