const MY_CAR = {
  wheels: 4,
  cylinders: 4,
  size: 2.2,
};

function main(myCar) {
  //Only change code below this line
  const { cylinders: carCylinders, size: carSize } =myCar;
  //const carCylinders = MY_CAR.cylinders;
  //const carSize = MY_CAR.size;
  return { carCylinders, carSize };
  //Only change code above this line
}
console.log(main(MY_CAR));
module.exports = main;

