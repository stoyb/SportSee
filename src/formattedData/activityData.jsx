export default class Activity {
    constructor(data) {
      this.data = data;
    }
  
    get formattedDataForBarChart() {
        return this.data.map((session, index) => ({
            day: index + 1,
            kilogram: session.kilogram, 
            calories: session.calories,
            kiloTooltip: `${session.kilogram}kg`
          }));
    
    }
}
  