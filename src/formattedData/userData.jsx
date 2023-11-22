const daysWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
export default class User {
    constructor(data){
        this.id = data.id;
        this.firstName = data.userInfos?.firstName; 
        this.lastName = data.userInfos?.lastName;
        this.age = data.userInfos?.age;
        this.todayScore = data.todayScore; 
        this.calories = data.keyData?.calorieCount; 
        this.protein = data.keyData?.proteinCount; 
        this.carbohydrate = data.keyData?.carbohydrate;
        this.liquid = data.keyData?.liquidCount;
        this.activity = data.sessions || data;
        this.sessions = data.sessions || data;
        this.cardio = data.kind?.[1]; 
        this.energy = data.kind?.[2];
        this.endurance = data.kind?.[3];
        this.strength = data.kind?.[4];
        this.speed = data.kind?.[5];
        this.intensity = data.kind?.[6];
    }

    get name() {
        return this.firstName
    }

    get formattedDataForBarChart() {
        return this.activity.map((session, index) => ({
            day: index + 1,
            kilogram: session.kilogram, 
            calories: session.calories
          }));
    }
    get formattedDataForLineChart(){
        return this.sessions.map((session, index) => ({
            day : daysWeek[index], 
            sessionLength : session.sessionLength
        }))
    }
    get cardioItem() {
        return this.cardio
    }
    get energyItem() {
        return this.energy
    }
    get enduranceItem() {
        return this.endurance
    }
    get strengthItem() {
        return this.strength
    }
    get speedItem() {
        return this.speed
    }
    get intensityItem() {
        return this.intensity
    }
}