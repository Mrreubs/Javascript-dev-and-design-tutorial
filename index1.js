//  LOOPS
// repeating a circle until there a stop condition
// we use loops to run through an array an extracts data out of the array and diplay them on the user interface



// types of loops in javascript
// 1. For loop described as (for everytime i loop over an array)
// written as
// for(){

// }

const arrayOfstate = ["ogun", "oyo", "nasarawa", "adamawa", "lagos", "benue"]
console.log(arrayOfstate)

// rules
// initialise, 

for(let x = 0; x < 3; x++) {
  let result5 = arrayOfstate[x]
  console.log(result5)
}

// means, let x be 0,let the loop start runing with x as 0, then, x < 3 means as long x is less than 3 let the loop keep running, then x++, means for every loop run increase x by 1 so that ehen it equals to 3 the loops stop


 for(let x = 0; x < 8; x++) {
  arrayOfstate
  console.log(arrayOfstate)
 }


//  looop for multiplication

const arrayOfNumbers = [1,2,3,4,5,6]
const emptyArray = []

for (let x = 0; x < 6; x++) {
  let element = arrayOfNumbers[x] * 2
  emptyArray.push(element)
  
}

console.log (emptyArray)


const students = [ "john", "ben", " ayo", "victor"]
for(let x = 0; x < 4; x++) {
  let out = students[x] + " jss3"
  console.log(out)
}


// loops for object literals

const studentRecord = [
  {
    fullname : "abbey joy" ,
    level : "primary 5" ,
    regNo : 2557 ,
    averageScore : 80 ,
    age : 15
  },

  {
    fullname : "omo ben" ,
    level : "primary 6" ,
    regNo : 2247 ,
    averageScore : 70 ,
    age : 17
  },
  
  {
    fullname : "jinathan boy" ,
    level : "primary 4" ,
    regNo : 1154 ,
    averageScore : 75 ,
    age : 16
  },

  {
    fullname : "love ojo" ,
    level : "primary " ,
    regNo : 5114 ,
    averageScore : 90 ,
    age : 17
  }
]

for(let x=0; x<4; x++) {
  let out1 = studentRecord[x]
  let out2 = studentRecord[x].regNo
  console.log(out1)
  console.log(out2)
}

studentRecord.forEach((outcome)=>{
  console.log(outcome)

})



const object = [
  {
    city : "lagos",
    country : "nigeria",
    code : "3452DFF",
    continent : "africa",
    Number : 60
  },

  {
    city : "las-vegas",
    country : "england",
    code : "3452DFF",
    continent : "europe",
    Number : 50
  },

  {
    city : "lagos",
    country : "ghana",
    code : "3452DFF",
    continent : "africa",
    Number : 70
  },

  {
    city : "las-vegas",
    country : "england",
    code : "3452DFF",
    continent : "europe",
    Number : 75
  }
]

for (let x = 0; x < object.length; x++) {
  let store = object[x]
  console.log(store)
  let truth = store.country === "ghana" ? "certified" : "denied"
  console.log(truth)

  // for each method
}

object.forEach(function(items){
  let x = items.country
  console.log(x)
})


// FILTER method
  const filteredData = object.filter(function(item){
    return item.Number > 60
  })

  console.log(filteredData)




  // PRATICAL EXAMPLES  WITH REST PARAMETERS

  function iceCreamOrder(customerName, customerPhone, CustomerAdress, ...Flavors){
    const totalPrice = 500 * Flavors.length
    let order = `New order! customer Name : ${customerName} Customer Phone : ${customerPhone} Customer Address : ${CustomerAdress} thee flavors are ${Flavors} with a total ptice of ${totalPrice} Naira`

    return order
  }

  console.log(iceCreamOrder("blessing", "038448874", "6, box street", "vanilla", "chocolate" ))
  console.log(iceCreamOrder("joy", "038448874", "4, glass street", "orea", "milk", "chocolate", "cream"))



  // PIZZA ORDER with array instead of rest PARAMETERS

  function iceCreamSale(customerName, customerPhone, customerEmail, toppings, flavors){
    let toppingsp = 1000
    let flavorsp = 500
    let toppingsPrice = toppingsp * toppings.length
    let flavorsPrice = flavorsp * flavors.length
    let iceCreamPrice = toppingsPrice + flavorsPrice


    for(let x = 0; x < toppings.length; x++){
      10 > 15 ? console.log("false") : console.log(toppings[x])
    }

    let order = `The customer ${customerName} with the number ${customerPhone} and email ${customerEmail} orders an ice-cream of ${flavors} flavors and ${toppings} toppings, with a totaal amount of ${iceCreamPrice}`

    return order
  }

  console.log(iceCreamSale("blessing", "038448874", "ben@gmail.com", [" almonds", " gum", " cashew", " nut" ], [" caramel", " popin", " cream"] ))

  // SPREAD METHOD
  // merges the many arrays together like concat method but a better way of merging

  const first = [1,2,3,4,5,6]
  const second =  [7,8,9,10]
  const third = [11,12, "ben",13,14, {name : "john", number : 255, usedfor : "loops"},15] 
  
  // you can add object litterals or string into your spead operator

  const newArray = [...first, ...second, ...third]
  console.log(newArray)

  // ARRAY NESTING
  // PUTTING AN ARRAY INTO AN ARRAY

  const newArrays = [first, second, third]
  console.log(newArrays)


  // NESTING AND MERGING OBJECT LITERAL USING SPREAD OPERATORS

  const fourth = {
    name : "joy", 
    number : 545, 
    usedfor : "funds"
  } 

  const sixth = {
    name : "joy", 
    number : 545, 
    usedfor : "funds"
  } 
  
  const fifth = {
    name : "joy", 
    number : 545, 
    usedfor : "funds"
  } 

  const bn = {...fourth, ...fifth, ...sixth}
  console.log(bn)

  // nesting
  const bm = {fourth, fifth, sixth}
   console.log(bm)



  //  USING LOOPS WITH IT 

  const big = [
    {
    name : "joy", 
    number : 545, 
    usedfor : "funds"
  },

  {
    name : "joy", 
    number : 545, 
    usedfor : "funds"
  },

  {
    name : "joy", 
    number : 545, 
    usedfor : "funds"
  },
  
  {
    name : "joy", 
    number : 545, 
    usedfor : "beans"
  }

]


  // FILTER
  const bj = big.filter(function(item){return item.usedfor === "beans"}) 
  console.log(bj)


  // MAP METHOD
  // used to add more data to an array, to odify a data you asses by loop

  const score = [ 1, 5, 100, 75]

  const retureArray = score.map(function(score){return score + "%"})
  console.log(retureArray)
  // you are able to add percentage to each number




// FIND METHOD
// means looking for a data, and the first item that match is what will b used
// every find must have a condition
const retArray = big.find(function(big){return big.number === 545 })
console.log(retArray)




// SOME METHOD
// TO KNOW if an item meets a condition

const cartItems = [
  {
    name : "mouse",
    inStock : true
  },

  {
    name : "keyboard",
    inStock : true
  },

  {
    name : "monitor",
    inStock : false
  }

]

const outOfStock = cartItems.some(function(item){return item.inStock === false ? true : false})
console.log(outOfStock)



// SORT METHOD()
// USED TO ARRANGE ITEMS IN ASCENDING OR DSESCENDING ORDER ESPECIALLY FOR Number

const numbers = [5,47,6,99,85,17,52]
// the parameter wil be different, using a,b
const sort = numbers.sort(function(a,b){return a - b})
console.log(sort)
// this sort method will always be like this
// you can schoose to use a new variable or not, the sorted variable will changed to be sorted
// b - a for descending order