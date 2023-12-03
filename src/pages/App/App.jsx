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
import Card from '../../components/Card/Card';
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
        <p>Loading...</p>
      )}
    </div>
    <SimpleBarChart />
    <SimpleLineChart/>
    <SimpleRadarChart/>
    <SimpleRadialBarChart/>
    <section className={styles.cards}>
    <Card img={logoCalories} value={`${calories}kCal`} type="Calories"/>
    <Card img={logoProteines} value={`${protein}g`} type="Protéines"/> 
    <Card img={logoCarbo} value={`${carbo}g`} type="Glucides"/>
    <Card img={logoLipid} value={`${lipid}g`} type="Lipides"/> 

    </section>
  </>
);
}

export default App