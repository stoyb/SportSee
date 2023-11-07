//import axios from "axios";

import { data } from './mockData';

// const fetchDataFromAPI = async (userId) => {
//     try{
//     const response = await axios.get(`http://localhost:3000/user/${userId}`)
//     console.log(response);
//     } catch(error) {
//         console.error(error);
//     }

// };
export const fetchMockData = (userId) => {
    const user = data.find((userData) => userData.id === userId);
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
};








// const userId = 12
    // try {
    //     const response = await axios.get(`http://localhost:3000/user/`);
    //   return response.data;
    // } catch (error) {
    //     console.error("Pas de retours des données");
    //   throw error;
    // }