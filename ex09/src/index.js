//Lodash
const _ = require("lodash");
//only change code below this line
//users nested array with four objects starts here
var users = [
  { id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },

  { id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },

  { id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },

  { id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];
//users nested array with four objects ends here
//getUsers function - list of users starts here
function getUsers() {
  var output = "";
  users.forEach((element) => {
    output +=
      element.id +
      "-" +
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

//findUserById(id) function starts here
function findUserById(id) {
  try {
    //add appropriate code here
    var user = _.find(users, function (val, key) {
      if (val.id === id) {
        return true;
      }
      return false;
    });
    var iFindUser =
      user.id +
      "-" +
      user.firstName +
      " " +
      user.lastName +
      " is " +
      user.age +
      ", " +
      user.gender;
    console.log(iFindUser);
  } catch (error) {
    error.message = "Cannot read property 'id'";
    console.log(error.message);
    return error.message; //Change this line
  }
}
//findUserById(id) function ends here
//Only change code above this line
getUsers();
findUserById(1); //Change this line

module.exports = findUserById;
