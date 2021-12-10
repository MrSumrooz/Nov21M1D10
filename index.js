let x = "John"
let y = "Doe"

console.log("< "+ x + " " + y +" >")

let student = {

    name : "Sumrooz",
    surname : "Zia",
    email : "sumrooz.zia@gail.com",


}

console.log(student)

delete student.email

console.log(student)

let carsArray = 
            ["ford","Honda",
            "TeslaLuxury", "BMWLuxury ",
             "FerrariLuxury", "FordMass",
            " PorscheLuxury ", "HondaMass-",
                "Lamborghini", "ToyotaMass", 
            ]

console.log(carsArray)


let randomArray
    
    

    randomArray = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log(randomArray) 


let maxNumber = function(){
    
    return Math.max(...randomArray)

}

console.log(maxNumber())

let minNumber = function(){
    
    return Math.max(...randomArray)

}
console.log(Math.min(...randomArray))





