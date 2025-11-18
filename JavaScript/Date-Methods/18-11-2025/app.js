console.log("JavaScript Running -->")


let randomPara = "fghjkl; PKR dfghjkl; PKR sadfoijasdlk"
// console.log(randomPara.replace(/PKR/g, "Dollor"))
// console.log(randomPara.replaceAll("$", "Dollor"))




// console.log(new Date())
// let today = Date.now()
// console.log(today)

let days = ["اتوار", "پیر", "منگل", "Wed", "Thur", "Fri", "Sat"]
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// let dob = new Date("2 6 2007")
// let dob = new Date("02 Jun 2007")
// let dob = new Date("02-Jun-2007")
// let dob = new Date("02/Jun/2007 01:02")

// console.log(days[dob.getDay()])
// console.log(dob)


// console.log(days[today.getDay()])




// 02 06 2003

// 06 02 2003


// let today = new Date()

// today.setDate("22")
// today.setMonth("7")
// today.setFullYear("2003")
// today.setMilliseconds("99")
// console.log(today)


// console.log(today.getMilliseconds())



let firstRam = new Date("17 Feb 2026")
let currentDate = new Date()

console.log(firstRam)
console.log(currentDate)

// console.log(firstRam.getTime())
// console.log(currentDate.getTime())

let diff = firstRam.getTime() - currentDate.getTime()
// let totalDaysOfRam = Math.round(diff / 86400000)
let totalDaysOfRam = Math.round(diff / (1000 * 60 * 60 * 24))
// let totalHours =
// let totalWeeks = Math.round(totalDaysOfRam / 7)
let totalMonth = totalDaysOfRam / 30
console.log(totalMonth)