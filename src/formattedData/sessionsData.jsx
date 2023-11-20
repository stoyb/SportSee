const daysWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
export default class Session {
    constructor(data) {
        this.data = data
    }
    get formattedDataForLineChart(){
        return this.data.map((session, index) => ({
            day : daysWeek[index], 
            sessionLength : session.sessionLength
        }

        )
            )
    }
}