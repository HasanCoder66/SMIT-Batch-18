console.log("js running -->")

let num  = 89;

// console.log(num.toFixed(4))


let today =new Date()
let days = ["اتوار", "mon", "tue","wed", "thur", "fri","sat"]
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "نومبر", "December"
];
// console.log("Month is -->",monthNames[today.getMonth()])
// console.log("Day is -->",days[today.getDay()])

// let stuDob = new Date("23 Nov 2008")
let currentDate = new Date()
currentDate.setFullYear(2003)
currentDate.setDate(22)
currentDate.setMonth(7)

console.log(currentDate.getTime())
// console.log(days[stuDob.getDay()] + monthNames[stuDob.getMonth()])

// let copyDate = today.toString().slice(0,15)

// console.log(copyDate)