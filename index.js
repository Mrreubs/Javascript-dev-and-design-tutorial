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