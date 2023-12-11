import axios from "axios";
import { userMainData, activity, sessions, performance } from '../__mocks__/mockData';

//Calls data from server
const fetchDataFromAPI = async (userId, end) => {
  try {
    switch(end) {
          case 'id':
            const data = await axios.get(`http://localhost:3000/user/${userId}`)
          return data.data
          case 'id/activity':
            const activityData = await axios.get(`http://localhost:3000/user/${userId}/activity`)
          return activityData.data
          case 'id/sessions':
            const sessionsData = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
          return sessionsData.data
          case 'id/performance':
            const performanceData = await axios.get(`http://localhost:3000/user/${userId}/performance`)
          return performanceData.data
          default:
            return null
          }
  } catch(error) {
    console.error(error);
    return null
  }
};

//Calls data from mockData.jsx 
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
    case 'id/performance':
      const performanceData = getData(performance, 'userId', userDataId)
    return performanceData
    default:
      return null
    }
}

// Renders results from call data functions 
export const fetchData = async (userId, end) => {
  try {
    const isAPI = true
    if(isAPI){
      const fetchedData = await fetchDataFromAPI(userId, end);
      if (fetchedData !== null) {
        return fetchedData.data;
      } else {
        throw new Error("Les données n'ont pas été récupérées.");
      }
    }
    else {
      return await fetchMock(userId, end);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};






