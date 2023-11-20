export default class User {
    constructor(data){
        this.id = data.id;
        this.firstName = data.userInfos.firstName; 
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.todayScore = data.todayScore; 
        this.calories = data.keyData.calorieCount; 
        this.protein = data.keyData.proteinCount; 
        this.carbohydrate = data.keyData.carbohydrate;
        this.liquid = data.keyData.liquidCount;
    }

    get name() {
        return this.firstName
    }
}