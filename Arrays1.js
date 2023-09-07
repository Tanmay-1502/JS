let student= ["kesu", "sub", "divya", "surya"]
let student1= new Array("surya", "anis")
// for(let i=0; i<student.length; i++){
//     console.log(student[i]);
// }

// student1.forEach(element => {
//     console.log(element)
// })


// student.filter(checkNames);
// function checkNames(name){
//     if(name.startsWith('s') && name.length>3) console.log(name)

// }

let result = student.filter(name => name.startsWith("s") && name.length>=2);
console.log(result)