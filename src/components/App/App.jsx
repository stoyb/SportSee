import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';
import mock from '../../api/service';

function App() {
  const userId = 12
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}`)
    .then(response => {
      console.log(mock);
      setUserData(response.data);
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div>
        {userData ? (
          <div>
            <p>ID: {userData.id}</p>
          </div>
        ): (
          <p>Loading...</p>
        )}
      </div>
    </Router>
  );
}

export default App
