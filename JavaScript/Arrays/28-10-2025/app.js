// console.log("JavaScript Is Running -->")

// let message = prompt("Enter YOur Message Here")
// console.log(message)

// let correctPin = 1234
// let amountInAcc = 10000;
// alert("Hello User!")

// let pinCode = prompt("Enter your pin code")
// console.log(pinCode)

// if(correctPin == pinCode){
// // console.log("agy ka kaam kerdo")
// let withdrawlAmount = prompt("Enter your debit amount")
// if(amountInAcc < withdrawlAmount){
// console.log("Insufficient Balance")
// }else {
//     amountInAcc = amountInAcc - withdrawlAmount
// }
// console.log("withdrawl Amount --->",withdrawlAmount)
// }else {
//     console.log("Please Enter a correct pin code")
// }

// console.log("Amount In Account -->",amountInAcc)

// if (undefined) {

// }else {
// console.log("else chl rah ahi")
// }

// falsy value in js 6
// ""  --> Empty String
// 0   --> zero
// undefined  --> undefined
// false ---> false
// null  --> null
// NaN --->

// let userInput = prompt("Enter YOur AGe")

// if(userInput.trim()){
//     console.log("if chl rah hai")
// }
// else {
//     console.log("else chl rah ahia")
// }

// function myAlert(a) {
//     alert(a)
// }

// myAlert("Hello User!")

// let mesasge = "Hello User!";
// console.log(mesasge);

// let stu1 = "Abdullah"
// let stu2 = "Hasan"

// let student = [true, 12, "hasan", null, undefined, [], alert, {}];
// let studentArr = ["Abdullah", "hasan", "ali", "raza" , "ismail", "Sarim", "mohsin","Abdullah", "hasan", "ali", "raza" , "ismail", "Sarim", "mohsin","Abdullah", "hasan", "ali", "raza" , "ismail", "Sarim", "mohsin","Abdullah", "hasan", "ali", "raza" , "ismail", "Sarim", "mohsin"]
// // console.log(studentArr.length);

// console.log(studentArr[10])


// alert("Hello " + " " + studentArr[23])







// let books = ["Js", "React", "Typescript"]
// books[0] = "HTML"
// books[1] = "CSS"
// books[4] = "JavaScript"
// books[books.length -1] = "Typescript"
// books[books.length +1] = "React"
// // books[books.length]


// books.unshift("Next", "abc", "xyz")
// books.push("Next", "abc", "xyz")
// books.pop()
// books.shift()

// let books = ["Js", "React", "Typescript"]

// let newBooksArr = books.slice(0, 2)

// console.log(newBooksArr)

// console.log("Books Array -->",books)
// let name = "Ahsan";

// name = "hasan"

// console.log(name)





let arr = [1, 2 , 3,4, "hasan"]
// console.log(arr.push(4,5,6,7,8))
// let returnUnshift = arr.unshift(4,5,6,7,8)
// let returnPop = arr.pop()
let returnShift = arr.shift()
console.log("Return Shift Value --> ",returnShift)
console.log(arr)