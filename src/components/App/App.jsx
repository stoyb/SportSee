import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import styles  from './App.module.css'
import { fetchData } from '../../api/service';
import User  from '../../formatedData/userData';


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

return (
  <Router>
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
  </Router>
);
}

export default App