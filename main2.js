// function display(){
//     for(var i=0;i<=5;i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// display()

//var is function scope
// let is block scope

// let a = 'samantha'
// let b= 10
// let c=true
let naame;
let age;
function checkElligibility(naame, age){
let vote=false;
    if(age>=18){
        vote =true;

    }
    console.log(naame + vote)
    return vote;
}

checkElligibility('tanmay', 19)
checkElligibility('abc', 17)

function displayWeekday(num){
    switch (num){
        case 1:
            console.log("Mon")
            break;
            case 2:
                console.log("Tue")
                break;
                case 3:
            console.log("Wed")
            break;
            case 4:
            console.log("Thur")
            break;
            case 5:
            console.log("Fri")
            break;
            case 6:
            console.log("Sat")
            break;
            case 6:
            console.log("Sun")
            break;
            default:
                console.log("not a day")
                break;
    }
}
displayWeekday(1);
displayWeekday(2);
displayWeekday(8);

function displayEven(num1, num2){
    for( let i=num1; i<=num2; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}

displayEven(1, 9)