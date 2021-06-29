const Car = require('./class');

const frontendData = {
name: "Audi",
year: 2021,
power: 1000,
maxSpeed: 290,
}
function createCar(carData){
    const {name, year, power, maxSpeed} = carData;
    const car1 = new Car(carData.name, carData.year, carData.power, carData.maxSpeed);
    car1.model.push("E-Tron");
    car1.behaviourOffRoad.push("Middle");
    car1.behaviourStreets.push("Very Good");
    car1.modificationsDateandPlace.push("Was Never Modificated");
    car1.color.push("Lightning Blue");
    car1.showData();
}
createCar(frontendData);