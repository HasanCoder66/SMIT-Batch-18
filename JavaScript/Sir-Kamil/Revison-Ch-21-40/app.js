// console.log("js running -->");

// var SnakeCase;

let myArr = [1, 2, 3, 5];

// console.log(myArr[0], myArr[1], myArr[2])

// const [val1, ...others] = myArr
// console.log(others)

// console.log(myArr)

// console.log(SnakeCase)

// console.log("hasan".toLowerCase()  == "Hasan".toUpperCase())

let randomPara = " dolor lorem ipsum dolor!";

// console.log(randomPara.replace(/dolor/g, "Pakistan Rupees"));

let colorsArr = [
  "red",
  "green",
  "blue",
  "orange",
  "Yellow",
  "indigo",
  "black",
  "white",
  "purple",
  "#6851ff",
];

// console.log(Math.floor(Math.random() * colorsArr.length));

// console.log(colorsArr[Math.floor(Math.random() * colorsArr.length)]);
// console.log(5 >= 5)
// 4

// let myMath = {
//     getFullName : function (){
//         console.log("My Name is Hasan")
//     }
// }

// console.log(myMath.getFullName())

function changeColor() {
  let randomNum = Math.floor(Math.random() * colorsArr.length);
  document.body.style.backgroundColor = colorsArr[randomNum];
}

// changeColor()

let num = 1256
// console.log(num.toString())

// console.log(String(num))


// console.log(num.toFixed(2))



                 // parameters
function normalFn (n1, n2, n3){
// console.log(n2)
// console.log(arguments.callee())

var globalVar = 12
}

// console.log(globalVar)
normalFn(1,2,3)   //arguements






// var day = "Fri"
// switch (day){

//     case "Tue" :
//         console.log("class hai -->")
//         break;
//          case "Wed" :
//         console.log("off hai -->")
//         break;
//         default :
//         console.log("aaj jumma hai -->")
// }


// if(day == "Tue"){
//     console.log("class hai -->")
// }else{
//     console.log("kuch nhi hai sojaou")
// }