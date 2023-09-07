class Car{
    constructor(name, year){
        this.name= name;
        this.year= year;
    }
    func1=() => {
        return this.name + " " + this.year;
    }
}

const myCar1= new Car("Ford", 2014)
const myCar2= new Car("Ferrari", 2013)

console.log(myCar1.func1())
console.log(myCar2.func1())

class Rectangle{
    constructor(l, b){
        this.l=l
        this.b=b
    }
    area=()=>{
        return this.l*this.b
    }
}

const area1= new Rectangle(12, 34);
console.log(area1.area())