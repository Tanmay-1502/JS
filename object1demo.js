let car = {
    id:1,
    model: 'hyundai',
    price: 1500000,
    details(){

        console.log("ID: " + car.id)

        console.log("Model: " + car.model)

        console.log("Price: " + car.price)

    }

}

 

console.log("ID: " + car['id'])

car.details()