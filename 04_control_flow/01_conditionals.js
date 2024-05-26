// if statement 

const isUserLoggedIn = true

const temperature = 41;

if(2 == "2") {
    console.log("executed");
}

if(temperature < 50) {
    console.log("less than 50");
} else {
    console.log("more than 50");
}
// < , > , <= , >= , == , != , === , !==

const score = 200;

if(score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}

// shorthand

const balance = 1000;

// if(balance > 500) console.log("test");  // implicit scope

// multiple condition

if(balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if(balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// logical operators

const userLoggedIn = true;

const debitCard = true;

const loggedInFromGoogle = false;

const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("allowed to buy");
} else {
    console.log("not allowed");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}

