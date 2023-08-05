

// 1. let numberOfStudents = 17;
// Check if we have more than 20 students, if yes console log "classroom too small"else console log "classroom size acceptable

let numberOfStudents = 17;
if(numberOfStudents > 20){
    console.log("classroom too small")
} else {
    console.log("classroom size acceptable")
};


// 2. 

// let numberOfHouses = 5;

// Check if this person’s number of houses is greater than 2 - if true console.log(“you need to sell more houses”)

// If 2 or less houses - log “seems reasonable

let numberOfHouses = 1;

if(numberOfHouses > 2){
    console.log("you need to sell more houses")
} else if (numberOfHouses <= 2) {
    console.log("seems reasonable")
}


// 3. 

// let bill = 20;

// Check if the bill is higher than 15 if yes “we should split the bill” 

// If not higher than 15 “I’ll get the bill this time”


// let bill = 10;

// if(bill > 15 && bill !== 15){
//     console.log("we should split the bill")
// } else
//     console.log("I'll get the bill this time")
// change this aapproch, and modify the code. 

// 4. Student Score checks

let studentScore = 900;

if(studentScore <= 55 ){
    console.log("not to good")
} else if(studentScore <= 60 ){
    console.log("ehhhh")
} else if(studentScore <= 70){
    console.log("Keep trying")
} else if(studentScore <= 80){
    console.log("nice")
} else if(studentScore <= 90){
    console.log("Doing good")
} else {
    console.log("great")
}


// 5. Think of three more examples using conditions
//  Check to see if a user if logged in

let logedUser = true;
let user;

if(logedUser){
    user = logedUser;
    console.log("Welcome to your website ");
} else {
    user = "Please log in"
}
console.log(user);

let riderHeight = 0;
let riderAge = 0;

// Base Case checking for both riderHeight and Age. 
if(riderHeight > 52 && riderAge >= 10){
    console.log("get on that ride Kiddo")
} else {
    console.log("Sorry kiddo, maybe next year")
};

// Adjusting the condition, to require either height or Age.

if(riderAge >= 10 || riderHeight > 52){
    console.log("get on that ride Kiddo")
} else {
    console.log("Sorry kiddo, maybe next year")
};



// ====================EXTRA PRACTICE==========================

// Write a nested if/else statement
// Declare a variable ‘num’
// Add an if/else statement that checks if ‘num’ is positive & greater than 100
// Add another statement that checks if ‘num’ is positive but less than 100
// Add an the final statement to check if ‘num’ is negative

let num = "";

if(isNaN(num) || num.trim() === ""){ //Making sure it's a valid number and not an empty string. to check for empty string we use the .trim method.
    console.log("Invalid input, please provide a valid number")
} else {
    if(num > 100){
        console.log("num is greater than 100")
    } else if(num > 0 && num < 100){
        console.log("number is less than 100 and greater than 0")
    } else if(num < 0){
        console.log( num + " is a negative number")
    } else {
        console.log("number is " + num)
    }
};