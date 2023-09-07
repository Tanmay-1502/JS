function add(a,b){
    return a+b;
}
let sum = add(10,20)
let newadd = (a,b)=>{
    return a+b
 }

 function sayHello(){
    console.log("hello")
 }

let newhello= ()=>{
    console.log('hello')
} 


function validateUser(username, password){
    if(username=='Admin' && password=='Admin123') console.log("Success")
    else console.log("Fail")
}

validateUser('Admin', 'Admin123')



let arrowValidateUser= (username, password) =>{
    if(username=='Admin' && password=='Admin123') console.log("Success")
    else console.log("Fail")
}

arrowValidateUser('Admin', 'Admin1')

