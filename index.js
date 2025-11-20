let names = "ben";
names = 10;
names = "oluwaseyi";

console.log(names);

let paid = true;
paid = false;

console.log(paid);

const benAge = 25;

console.log(benAge);

let reuslt = 1 + 1;
console.log(reuslt);

// Addition
let oldBalance = 200;
let income = 300;

let newBalance = oldBalance + income;
console.log(newBalance);

//subtraction

let incomes = 45000;
let expenses = 25000;
let profit = incomes - expenses;
console.log(profit);

// multiplication
let first = 20;
let second = 70;
let result = first * second;
console.log(result);

// division
let one = 200;
let two = 70;
let total = one / two;
console.log(total);

// modulus

// exponentiation
let joy = 5;
let ben = 8;
let okay = joy ** ben;
console.log(okay);

// increament
let bg = 10;
bg++;
console.log(bg);

// decreament
let ba = 10;
ba--;
console.log(ba);

// Addition assignment operation
let bb = 20;
bb+=10
console.log(bb);

// subtraction assignment operation

let bc =30
bc-=10
console.log(bc)

// comparison operation
// greater than

let bd = 10
let be = 5
let bf = bd > be 
console.log(bf)

// lees than

let bk = 10
let bh = 5
let bi = bk < bh 
console.log(bi)

// equals to comparison
let bl = 10
let bm = 10
let bn = bl === bm
console.log(bn)

// greater than or equal comparison

let cutOffMark = 50
let score1 = 50
let bq = score1 >= cutOffMark 
console.log(bq)

// less than or equal comparison

let cutOffMark1 = 50
let score2 = 50
let br = score2 <= cutOffMark 
console.log(br)

// not equal to comparison

let password = "joygabriel"
let bs = "joygsbr"
let bu = password !== bs 
console.log(bu)

// conditionals comparison
// if or else conditionals

let cut = 50
let damilola = 49

if (damilola >= cut) { console.log("you passed")
    
} else { console.log("you failed, try again later")}


let cartCost = 200
let accountBalance = 50
if (accountBalance > cartCost) { console.log("purchased successful")} else { console.log("insufficient funds")}



// LOGICAL OPERATIONS
// comparing two things together

// AND OPERATIONS &&

let jambScore = 240
let validAge = 18
let studentScore = 300
let studentAge = 16
if (studentScore >= jambScore && studentAge >= validAge) {
    console.log("You've gained the admission")
} else {
    console.log("You failed to get an admission")
}


// OR OPERATIONS ||

let jambScore1 = 240
let validAge1 = 18
let studentScore1 = 300
let studentAge1 = 16
if (studentScore1 >= jambScore1 || studentAge1 >= validAge1) {
    console.log("You've gained the admission")
} else {
    console.log("You failed to get an admission")
}

// some string operation, ways to manipulate strings
// LENGTH how to count the number of letter in a string, use 

let fullName = "shokunbi reuben"
let outcome = fullName.length
console.log(outcome)
console.log(fullName)



// concatenation - the joining of string and variables
// the strings will only work with variables if the strings uses bartiks ``

let studentNames = "joy"
let studentScore2 = 65

let rezult = `hello ${studentNames}, your score is ${studentScore2}`
console.log(rezult)


let temp = 20
let setence = `the temperature is ${temp} degrees`
console.log(setence)

// COMPARING strings
let savedPassword = `shokes5`
let enterPassword = `shokes6`

if (enterPassword === savedPassword) { console.log(`login successful`)
    
} else {
    console.log(`incorrect password`)
}



// object literal
// to create an object literal create 
// this is a record for a car stored in a variables
// use const for the variables

const carRecord = {
    carName : `Honda`,
    carColor : `blue`,
    carModel : `civil`,
    carVin : `3F56FSH6D8`,
    carYear : 2018
}

console.log(carRecord)

const humanRecord = {
    humanName : `joseph`,
    humanAge : 22,
    humanCountry : `Ghana`,
    humanHeight : 6.2,
    humanGender : `male`
}

console.log(humanRecord)

// the object literal is this bracket itself > {} used for creating records for any object
const carRecord1 = {
    carName : `lexus`,
    carColor : `blue`,
    carModel : `civil`,
    carVin : `3F56FSH6D8`,
    carYear : 2018,
    carWarranty : `2years`
}

console.log(carRecord1)

// accessinng object properties
// 2 ways to access
// (1) dot notation eample

carRecord1.carWarranty
let warranty = carRecord1.carWarranty
console.log(warranty)


// (2) bracket notation
// use this bracket > [], and use double qoutation inside the bracket to write the property name
carRecord1["carColor"]
let color = carRecord1["carColor"]
console.log(color)


// ADDING TO PROPERTIES 
// (1) DOT NOTATION ADDING e.g

carRecord1.millage = `5000km/h`


// UPDATING AN EXISTING PROPERTIES USING DOT NOTATION

carRecord1.carYear = 2011


// DELETING AN EXISTING PROPERTY WITH DELETE KEYWORD EG 
delete carRecord1.carVin

// HOW TO FREEZE AN OBJECT LITERAL 
Object.freeze(carRecord1)

// HOW TO SEAL AN OBJECT LITERAL 
Object.seal(carRecord1,)




// OBJECT LITERAL NESTING/ OBJECT NESTING
// This simply means puting object literal into object literal
// why do we do that? it is to further explain a particular information in an object literal
// example

const studentRecord = {
    fullName : {
        surname : `Andrew`,
        firstName : `Benjamin`,
        lastName : `Peter`
    },
    age : 14,
    gender : `female`,
    studentClass : `Jss3`,
    lastSemesterResult : {
        Mathematics : `A`,
        English : `B`,
        Biology : `A`,
        TechnicalDrawing : `B`
    }
}

console.log(studentRecord)

// assessing the properties in a nested object using dot, delete, bracket, freeze or seal

let outcome1 = studentRecord.studentClass
console.log(outcome1)

// to access nested object literal
let outcome2 = studentRecord.lastSemesterResult.Biology
console.log(outcome2)



// FUNCTIONS
// IS WHAT E USE TO ADD ACTIONS TO OUR DATA

// WAYS TO CREATE A FUNCTIONS
// (1) Funstion declaration > just write function i small letterand guve it a name and add brackets
// example
function averageAge() {
    
}


// examples
let age1 = 15
let age2 = 17
let age3 = 22

function averageAge1() {
   let average = (age1 + age2 + age3) / 3
   console.log(average)
}

averageAge1()

// you must call a function for it to be actie 


// PARAMETERS IN FUNCTIONS
// Is an additional information added to a function to msake the function more useful
// parameters are set into this brakets  >  ()
// Arguement are the values of the parameters written in the called function brackets

// writtinf functions using parameter and argument is like setting a preset formular or formation that once any alue is inputted it automatically calcluates it, and can be used severally

// example

function totalObjectPrice(price1, price2, price3){
    let totalPrice = price1 + price2 + price3
    console.log(totalPrice)
}

totalObjectPrice(100, 500, 200)
totalObjectPrice(700, 50, 280)


// Another example

function printScoreReport(studentName, studentScore){
    let report = `Hello ${studentName}, your score is ${studentScore}`
    console.log(report)
}
printScoreReport(`damilola`, 88)
printScoreReport(`Yusuf`, 98)
printScoreReport(`Joseph`, 75)



// DEFAULT PARAMETERS
// is a default data set for parametr written assessing

function printScoreReport(studentName = `joy`, studentScore = 90){
    let report = `Hello ${studentName}, your score is ${studentScore}`
    console.log(report)
}
printScoreReport()

// if i put argument which is parameter data into the called function, the default parameter will be ignored





// RETURN STATEMENT IN FUNCTIONS
function printScoreReport1(studentName = `joy`, studentScore = 90){
    let report1 = `Hello ${studentName}, your score is ${studentScore}`
    
    return report1
}
let outcome3 = printScoreReport1(`peace`, 69)
console.log(outcome3)




// data types
// there are different types of data types in javascript e.g string, number, boolean, object, undefined, null, symbol, bigint
// but they are categorized into two main groups
// (1) primitive data types which means simple basic data types 
// (2) reference / non-primitive data types which means the combination of different basic data types to form a complex data type e.g object literal, array, function etc


// undefined data type are data types that have not been assigned any value
let studentName1;
console.log(studentName1);

// null data type means empty data type
let studentName2 = null;
console.log(studentName2);


// bigint data type is used to store large numbers that are beyond the safe integer limit for numbers in javascript
// just add n at the end of the number to make it a bigint data type
let largeNumber = 9007199254741991n;
console.log(largeNumber);

// symbol data type is used to create unique identifiers for objects
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2); // false because symbols are unique


// typeof operator is used to determine the data type of a variable or value
let sampleName = "oluwaseyi";
console.log(typeof sampleName); // string


// tenary operator is a shorthand way of writing an if-else statement
let age = 18;
let canVote = (age >= 18) ? console.log("yes, you can vote") : console.log("no, you cannot vote");
console.log(canVote);
// the syntax is condition ? expressionIfTrue : expressionIfFalse
let truth = 15 < 25 ? "youre right" : "youre wrong";
console.log(truth);

// object destructuring is a way to extract values from an object and assign them to variables
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
const { firstName, lastName } = person;
console.log(firstName); // John
console.log(lastName); // Doe       

// we can also use dot notation or bracket notation to access object properties
let ageOfPerson = person.age;
console.log(ageOfPerson); // 30

// Alias : makes a new variable name for an existing property in an object  
const { firstName: fName, lastName: lName } = person;




// METHODS IN JAVASCRIPT
// methods are functions inside an object
const carRecord3 = {
    carName : `lexus`,
    carColor : `blue`,
    carModel : `civil`,
    carVin : `3F56FSH6D8`,
    carYear : 2018,
    millage : `5000`,
    roadWorthy : function() {
       let value = 100000 - this.millage;
       let roadW = value > 60000 ? "car is road worthy" : "car is not road worthy"
         return roadW;
}

};

let roadWorthyStatus = carRecord3.roadWorthy();
console.log(roadWorthyStatus);


// destructuring nexted object literal
const studentRecord1 = {
    fullName : {
        surname : `Andrew`,
        firstName : `Benjamin`,
        lastName : `Peter`
    },
    age : 14,
    gender : `female`,
    studentClass : `Jss3`,
    lastSemesterResult : {
        Mathematics : `A`,
        English : `B`,
        Biology : `A`,
        TechnicalDrawing : `B`
    }
}   
const { fullName: { firstName: studentFirstName, lastName: studentLastName }, lastSemesterResult: { Mathematics: mathGrade } } = studentRecord1;
console.log(studentFirstName);






// function expression
// is another way to write a function
const greet = function(name) {
    return `Hello, ${name}!`;
}
let greeting = greet("Oluwaseyi");
console.log(greeting);

const addTwoNumbers = function(a,b) {
    return a + b
}

let sum = addTwoNumbers(5, 25)
console.log(sum)



// arrow function
// is a shorter way to write a function expression
// ()=> {}

const sayUserName = (userName) => {
    let said = `Your username, ${userName}!`
    console.log(said)
}
sayUserName("benjamin25")

const multiplyNumbers = (num1, num2) => {
    return num1 * num2
}
let product = multiplyNumbers(4, 5)
console.log(product)

const squareNumber = num => num * num
let squared = squareNumber(6)
console.log(squared)




// arrays in javascript
// arrays are used to store multiple values in a single variable
// arrays are created using square brackets []
// arrays can store different data types e.g string, number, boolean, object, function etc
// arrays is a data structure that allows us to list multiple items/data in a single variable
// square brackets [] are used to create an array
// array items are separated by commas ,

const fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

// index position in an array
// arrays are zero indexed, which means the first item in an array is at index position 0, the second item is at index position 1, and so on

// how to access array items using index position
(fruits[0])
console.log(fruits[0]); // apple

(fruits[2])
console.log(fruits[2]); // orange


// how to change or update array items using index position
fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "orange", "mango"]


// length property in arrays
// just add .length after the array name to get the number of items in the array
let numberOfFruits = fruits.length;
console.log(numberOfFruits); // 4

