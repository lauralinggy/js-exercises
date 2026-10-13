//Task 1: "Hello, object"
//importance: 5
//Write the code, one line for each action:

//Create an empty object user.
//Add the property name with the value John.
//Add the property surname with the value Smith.
//Change the value of the name to Pete.
//Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith"
user.name = "Pete";
delete user.name;


//Task 2: Check for emptiness
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
//Should work like that:
//let schedule = {};
//alert( isEmpty(schedule) ); // true
//schedule["8:30"] = "get up";
//alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in object) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule)); //true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));  //false

//Task 3: Sum object properties
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.
//We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;

for (let name in salaries) {
  let salary = salaries[name];
  sum = sum + salary;
  
console.log(sum); //390







