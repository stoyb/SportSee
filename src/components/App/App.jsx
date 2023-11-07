import React from 'react';
//import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchMockData } from '../../api/service';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';




function App() {

  //const [userData, setUserData] = useState(null);
const userId = 12; 
const userData = fetchMockData(userId);
console.log('User Data:', userData);
  return (
    <Router>
      <Navbar />
      <Sidebar />
{/*       
      <div>
      {userData ? (
        <div>
        
          <p>User ID: {userData.id}</p>
          <p>First Name: {userData.userInfos.firstName}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}
    </Router>
  );
}

export default App
