//Lodash
const _ = require('lodash');
//only change code below this line
//users nested array with four objects starts here
const users = [
    {id: 1,
    firstName: John,
    lastName: Doe,
    age:24
    gender:male},

    {id: 2,
    firstName: Jane,
    lastName: Doe,
    age: 5,
    gender: female},

    {id: 3,
    firstName: Jim,
    lastName: Carrey,
    age: 54
    gender: male},

    {id: 4,
    firstName: Kate
    lastName: Winslet,
    age: 40,
    gender: female}
];
//users nested array with four objects ends here
//getUsers function - list of users starts here
function getUsers(){
    var output = "";
    for (var y = users.length - 1; y >= 0; y--) {
    output = users[y];
    console.log(output);
    return output;
}
//getUsers function - list of users ends here

//findUserById(id) function starts here
function findUserById(id){
    try {
        //add appropriate code here

    } catch(error){
        return //Change this line
        console.log(); //Change this line
    }   
}
//findUserById(id) function ends here
//Only change code above this line
getUsers();
findUserById(); //Change this line

module.exports = findUserById;

