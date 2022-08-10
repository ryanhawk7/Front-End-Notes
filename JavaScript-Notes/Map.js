// Iterate over arrays instead of using for loops

const energyCostEuros = [140, 153, 164, 153, 128, 146]
const exchangeRate = 1.13

// const energyCostDollars = []

// for (let i = 0; i < energyCostEuros.length; i++){
//     energyCostDollars.push((energyCostEuros[i]*exchangeRate))
// } 

//map iterates over each value in energyCostEuros once, and then returns a new array
const energyCostDollars = energyCostEuros.map(function(euroCost){
    return euroCost * exchangeRate
})
console.log(energyCostDollars)