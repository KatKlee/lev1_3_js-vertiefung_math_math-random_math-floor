// Output of a random number (between 0 and 1 (excluded))
const randomNum = Math.random()
console.log(randomNum)

// Output of a random number between 1 and 10
const randomNum1_10 = Math.floor(Math.random() * 10 + 1)
console.log(randomNum1_10)

// Output of a random number between 1 and 100
const randomNum1_100 = Math.floor(Math.random() * 100 + 1)
console.log(randomNum1_100)

// Output of a function which gets a random number between 1 and 100
function randomNum1_100_f(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNum1_100_f())