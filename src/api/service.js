import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

const userId = 12; 

mock.onGet(`http://localhost:3000/user/${userId}`).reply(200, { 
    id:userId,
    firstName:"John", 
    lastName:"Doe",
    age:30, 
    todayScore:85, 
});

export default mock

