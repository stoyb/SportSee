import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchMockData } from '../../api/service';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';

function App() {

const [count, setCount] = useState(null)
useEffect(()=> {
    const userId = 12
  fetchMockData(userId)
  .then(res => {
    setCount(res)
  })
  .catch(error => {
    console.error(error);
  });
}, [])

  return (
    <Router>
      <Navbar />
      <Sidebar />
       <div>
         {count ? (
           <div>
             <p> User ID: {count.id}</p>
           </div>
         ): (
           <p>Loading...</p>
         )}
       </div>
    </Router>
  );
}

export default App
