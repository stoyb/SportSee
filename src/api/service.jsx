//import axios from "axios";

import { userMainData, activity } from './mockData';


// const fetchDataFromAPI = async (userId) => {
//     try{
//     const response = await axios.get(`http://localhost:3000/user/${userId}`)
//     console.log(response);
//     } catch(error) {
//         console.error(error);
//     }

// };
console.log(userMainData);
export const fetchMock = async (userDataId, end) => {
  function getData(table, key, usId) {
    const userData = table.find((user) => user[key] === usId);
    return new Promise((resolve) => {
      resolve(userData);
    });
  }
  switch(end) {
    case 'id':
      const data = getData(userMainData, 'id', userDataId)
    return data
    case 'id/activity':
      const activityData = getData(activity, 'userId', userDataId)
    return activityData
    default:
      return null
    }
}



