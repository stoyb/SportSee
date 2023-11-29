const daysWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
export default class User {
    constructor(data){
        this.data = data;
    }
    get name() {
        return this.data.userInfos.firstName
    }
    get formattedDataForBarChart() {
        return this.data.sessions.map((session, index) => ({
            day: index + 1,
            kilogram: session.kilogram, 
            calories: session.calories
          }));
    }
    get formattedDataForLineChart(){
        return this.data.sessions.map((session, index) => ({
            day : daysWeek[index], 
            sessionLength : session.sessionLength
        }))
    }
    get subjectItem() {
        return this.data.data.map((element, index) => 
        ({
            value: element.value,
            kind: this.data.kind[index + 1]
        }))
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
}