//import axios from "axios";

import { activity, data } from './mockData';


// const fetchDataFromAPI = async (userId) => {
//     try{
//     const response = await axios.get(`http://localhost:3000/user/${userId}`)
//     console.log(response);
//     } catch(error) {
//         console.error(error);
//     }

// };
export const fetchMockData = async (userId) => {
  return new Promise((resolve) => {
    const user = data.find((userData) => userData.id === userId);
    resolve(user)
  })
};
console.log(activity);
export const fetchMockDataActivity = async (userId) => {
  return new Promise((resolve) => {
    const user = activity.find((userData) => userData.userId === userId);
    console.log(user);
    resolve(user)
  })
};








// const userId = 12
    // try {
    //     const response = await axios.get(`http://localhost:3000/user/`);
    //   return response.data;
    // } catch (error) {
    //     console.error("Pas de retours des données");
    //   throw error;
    // }