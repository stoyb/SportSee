// Variables 
const daysWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const kind = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio'
}

//Class formate data
export default class User {
    constructor(data){
        this.data = data;
    }
    // Functions for userMainData
    get name() {
        return this.data.userInfos.firstName
    }
    get calories() {
        return this.data.keyData.calorieCount
    }
    get proteines() {
        return this.data.keyData.proteinCount
    }
    get carbo() {
        return this.data.keyData.carbohydrateCount
    }
    get lipid() {
        return this.data.keyData.lipidCount
    }
    get setScore() {
        return [ 
            {
                data : 0,
                fill: "transparent"
            },
            {
                data : this.data.todayScore * 100,
                fill:"#FF0000"
            },
            {
                data : 100,
                fill: "transparent"
            }
        ]
    }
    get setTodayScore() {
        return this.data.todayScore * 100
    }
    // Function for daily activity data
    get formattedDataForBarChart() {
        return this.data.sessions.map((session, index) => ({
            day: index + 3,
            kilogram: session.kilogram, 
            calories: session.calories
          }));
    }
    // Function for weekly sessions data
    get formattedDataForLineChart(){
        return this.data.sessions.map((session, index) => ({
            day : daysWeek[index], 
            sessionLength : session.sessionLength
        }))
    }
    // Function for performance data
    get subjectItem() {
        return this.data.data.map((element, index) => 
        ({
            value: element.value,
            kind: kind[index + 1]
        }))
    }
}