// console.log("js chl rhai hai")

// let userAge = prompt("Enter your Age" ,"22 Aug 2003")

// let userDOB = userAge

// let dob = new Date(userDOB);
// let currentDate = new Date()

// let currentYear = currentDate.getFullYear()

// console.log("current Year -->",currentYear - dob.getFullYear())
// console.log(dob.getFullYear())









// console.log("My Name is Hasan")

// let arr = []
// arr.push("Hasan")
// console.log(arr)

function tellTime() {
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("Current time: "+ theHr + ":" + theMin);
}

// tellTime()


function myAlert () {
    alert("My name is hasan")
}



//   // parameters
// function fullName (a, b, c) {
// console.log(`My Name is ${c}`)
// // console.log(arguments)
// }
 
// fullName("Uzair Shaikhani", "Hasan", "Abdullah")     //arguenment




// function sum (n1, n2) {
//     console.log( n2 )
// }


// sum()

// if (2 + 2 == 4 + 4){
//     console.log("right")
// }


// let n1 ;     

// console.log(n1)



function divide (n1, n2) {
    let d = n1 / n2
    console.log(d)

    function sum () {
        console.log("sum")
    }
    return sum
    console.log("hasn")
}


let returnVal = divide(12, 2)
console.log("return Value --> divide",returnVal())



// let arr = [];
// let returnVal = arr.push("Hasan")

// console.log(arr.push("Hasan"))

// // ques 1 //
// //ans 1 // 
// function currentDate (){
//     let current = new Date()
//     console.log(current)
// }currentDate()

// // ques 2 //
// //ans 2 //
// function fullName(firstName,lastName){
//   return firstName + lastName
// }
// console.log(fullName("Muhmmad","Ismail") 
// )

// // ques 3 //
// //ans 3 //

// function add (){

// }console.log(add())