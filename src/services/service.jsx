//import axios from "axios";

import { userMainData, activity, sessions } from '../__mocks__/mockData';


// const fetchDataFromAPI = async (userId) => {
//     try{
//     const response = await axios.get(`http://localhost:3000/user/${userId}`)
//     console.log(response);
//     } catch(error) {
//         console.error(error);
//     }

// };
const fetchMock = async (userDataId, end) => {
  function getData(table, key, usId) {
    const userData = table.find((user) => user[key] === usId);
    return userData
  }
  switch(end) {
    case 'id':
      const data = getData(userMainData, 'id', userDataId)
    return data
    case 'id/activity':
      const activityData = getData(activity, 'userId', userDataId)
    return activityData
    case 'id/sessions':
      const sessionsData = getData(sessions, 'userId', userDataId)
    return sessionsData
    default:
      return null
    }
}
export const fetchData = async (userId, end) => {
  return await fetchMock(userId, end)
}



