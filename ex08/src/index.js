//Lodash
const _ = require("lodash");

//Only change code below this line
//users nested array with four objects starts here
var users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];
//users nested array with four objects end here

//getUsers function -list of users starts here
function getUsers() {
  var output = "";
  users.forEach((element) => {
    output +=
      element.firstName +
      " " +
      element.lastName +
      "  is " +
      element.age +
      ", " +
      element.gender +
      "\n";
  });
  console.log(output);
  return output;
}
//getUsers function - list of users ends here

//findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
  try {
    //add appropriate code here

    var user = _.find(users, function (val, key) {
      if (val.lastName === lastName && val.gender === gender) {
        return true;
      }
      return false;
    });
    var iFindUser =
      user.firstName +
      " " +
      user.lastName +
      " is " +
      user.age +
      ", " +
      user.gender;

    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    //Change this line
    error.message = "Cannot read property 'firstName' of undefined";
    console.log(error.message);
    return error.message; //Change this line
  }
}
//findUser(lastName, gender) function ends here

// Only change code above this line

getUsers();
findUser("Doe", "male"); //Change this line

module.exports = findUser;
