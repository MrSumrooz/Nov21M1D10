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

let arrayOfArrays = []

for (i = 0 ; i < 5; i++){
    

    let nestedArray = []
    for(j = 0; j<10;j++)
    nestedArray.push(Math.floor(Math.random() *10))
    arrayOfArrays.push(nestedArray)
}

console.log(arrayOfArrays)


let arr1 = ["Saab", "Volvo", "BMW"]
let arr2 =["John", "Doe", "smr","sumrooz"];

let longestArray = function(){

    return (arr1.length > arr2.length ? "Arr1 is longest" : "arr2 is longest");

}
console.log(longestArray())


let numArray1 = [2,4,6,8,10]
let numArray2 = [1,3,5,7,9]


let biggestSumOfArray = function(){

   

    

    
}
console.log(biggestSumOfArray(numArray1,numArray2))



// DOM Exercise start 



let newDivCreate = function(){
    let callContainer = document.getElementById("container")
    let newDivInContainer = document.createElement("div")
    newDivInContainer.innerHTML = "Here is dynamic Div which w have created "

    callContainer.appendChild(newDivInContainer)

}

newDivCreate()

let newAddClasstoTd = function(){

    let tdClassChange = document.getElementsByTagName("td")
    tdClassChange.classList.add("mystyle");

}
newAddClasstoTd()
