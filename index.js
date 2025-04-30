//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.

const scheduledDelivery = (days)=>{
    days.forEach((day)=>{
        switch(day){
            case "mon":
                console.log("Delivery of books");
                break;
            case "tue":
                console.log("Delivery of pens");
                break;
            case "fri":
                console.log("Delivery of erasers");
                break;
            default:
                console.log("No delivery scheduled");
                break;            
        }
    })
}
const days = ["mon","tue","fri"];
scheduledDelivery(days);

//Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

const checkBookStatus = (statuses)=>{
    for(let status of statuses){
        if(status === "available"){
            console.log("Ready to lend");
        }
        else if(status === "borrowed"){
            console.log("Checked out");
        }
    }
}
const statuses = ["available","borrowed","borrowed","available"];
checkBookStatus(statuses);

//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

const checkCustomerAges = (ages)=>{
    ages.forEach((age)=>{
        if(age>=18){
            console.log("Adult");
        }
        else{
            console.log("Minor");
        }
    })
}
const ages = [22,15,18,23,10,21];
checkCustomerAges(ages);

//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

const countdownOfLives = ()=>{
    let point = 5;
    while(point>0){
        console.log(`You have ${point} lives left`);
        point--;
    }
}
countdownOfLives();

//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.

const comments = (feedback)=>{
    let i = 0;
    do{
        console.log(feedback[i]);
        i++;
    }
    while(i<feedback.length);
}
let feedback = ["Good service","I enjoyed the service","Not really good"];
comments(feedback);

//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

const printLoginStatus = (loginStatuses)=>{
    for(let loginStatus of loginStatuses){
        if(loginStatus === "logged in"){
            console.log("Welcome back!");
        }
        else{
            console.log("Please log in");
        }
    }
}
let loginStatuses = ["logged in","logged out","logged out","logged in"];
printLoginStatus(loginStatuses);

//Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

const supportTickets = (priorities)=>{
    priorities.forEach((priority)=>{
        switch(priority){
            case "low":
                console.log("Has low priority");
                break;
            case "medium":
                console.log("Has medium priority");
                break;
            case "high":
                console.log("Has high priority");
                break;
            default:
                console.log("No priority available");
                break;
        }
    })
}
const priorities = ["low","medium","high"];
supportTickets(priorities);

//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.

const quizCountdown = (numbers)=>{
    let number = 10;
    while(number>numbers){
        console.log(`${number}`);
        number--;
    }
}
quizCountdown(0);