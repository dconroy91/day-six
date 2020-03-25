// function greetAFriend(friendName) {
//     console.log(`Hi ${friendName}`)
// }


// function dreamVacation(friendName, destination) {
//     console.log(`${friendName} would love to visit ${destination}`)
// } 

// dreamVacation("Tom Brady", "Tampa Bay")
// dreamVacation("Phillip Rivers", "Indy")
// dreamVacation("Luke Skywalker", "Tatooine")

// function myTaco(typeOfShell, topping) {
//     var madeTaco = `They want a ${typeOfShell} shell with ${topping}`
//     return madeTaco
// }

// var finishedTaco = myTaco("soft", "avacado")

// console.log(finishedTaco)

function add(number1, number2) {
   var calculation = `${number1 + number2}`
   return calculation
}

var finishedcalc = add(5,15)
console.log(finishedcalc)


add(5,5)
add(6,10)
add(10,11)
function subtract(number1, number2) {
    console.log(number1 - number2)
}

subtract(7,5)

function multiply(num1, num2) {
    console.log(num1 * num2)
}

multiply(10,10)

function divide(n1, n2) {
    console.log(n1 / n2)
}

divide(100, 25)

function sandwich(bread, name, isToasted) {
    var madeSandwich = ` Ordered ${name} on ${bread}`

    if (isToasted === true) {
    madeSandwich =  ` Ordered ${name} on ${bread} toasted`

    }
    return madeSandwich
}
var mySandwich = sandwich("wheat", "tuna", true)
console.log(mySandwich)