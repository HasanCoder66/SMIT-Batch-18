console.log("Js Running -->");

// variable for string

// let user$ame = "Hasan"

// let user;
// let userName ;
// let myUserName;

// let num = 10;

// if(num % 2 == 0){
//     console.log("Even Number")
// }else {
//     console.log("Odd Number")
// }

// console.log(( "ismail" -  10))

// let num = 2
// console.log(++num + num++)

// console.log(num)

// let user = 70;

// let percentage = user / 100 * 100

// console.log("User Percentage -->",percentage.toString().concat("%"))

// let userInput = prompt("Enter Your User Name")

// console.log("User Input -->", userInput)

// if(userInput === "Muhammad Hasan"){
// console.log("Hello Hasan!")
// }else {
//     console.log("else mil raha hai")
// }

// == data type ko check nhi kerta only 2no values ko compare kerta hai
// === data type ko bi check kerta or 2no values ko compare kerta hai
// > greater then
// < less then
// >= is greater or equal
// <= is less or equal
// != not equal
// !== strict not equal

// function checkNum (){
//     if (12345 !== 487208) {
//   return "Try Again";
// }

// console.log("74 wala console");

// }
// console.log(checkNum())

// if(){

// } else if (){

// }else {

// }


// sets of condition 
// || &&   



// if(2 > 1 && 3 < 4){
//     console.log("1 condition true hori hai")
//     if(true){
// console.log("true mil raha hia")
//     }
// }else {
//     console.log("else chl raha hai")
// }







// Arrays

let stu1 = "Abdul Hadi"
let stu2 = "Daniyal"



let studentsArr = [stu1, stu2, "Hasan", "Abdullah", "shakeel", [], alert, true, false, 456, undefined]


// studentsArr.unshift("Ismail")

// console.log(studentsArr.unshift("yusuf", "jameel"))

// console.log(studentsArr)


// console.log(studentsArr.splice(1, 0, "saqib"))



// console.log(studentsArr.slice(0,3))
// console.log(studentsArr)



// loop  kia hota hai --> baar bar repeat kerny ko loop kehty hain

// start , end , change 
// initialization, condtion  , increment || decrement
// let flag = false

// for(let i = 0; i < studentsArr.length; i++){
    
//     if(studentsArr[i] == "Hasan"){
//         flag = true
//         break;
//     }
//     console.log(i)
// }


// // console.log(studentsArr[0])

// if(flag){
//     console.log("mil gaya ")
// }else {
//     console.log("ni mila")
// }



let twoDArr = [
    ["hasan", "jsald;f"],
    [true, false],
    [12, 34]
]


for(let i = 0; i < twoDArr.length; i++){
    // console.log(twoDArr[i])
    for(let j = 0; j < twoDArr[i].length; j++){
        console.log(twoDArr[i][j])
    }
}
// console.log(twoDArr[0][0])


