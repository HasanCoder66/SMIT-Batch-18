// console.log("js running -->")

// let student = ["hasan", ["ashraf", 12], 12, true, undefined, {}, alert]

// // console.log(student[1][0])

// // console.log(student.splice(1,1 , "islam", "bilal"))
// let copyStuElem = student.slice(1)

// copyStuElem[copyStuElem.length] = "ismail"
// console.log("copyStuElem",copyStuElem)

// console.log(student)

let animals = [
  ["horse", "cat"],
  ["rabbit", "mice"],
  ["lion", "elephant", "ant"],
];

// console.log(animals.length);

// start , end, change
// variable initialize, condition, increment or decrement

// let i = 0;  i < 10; i++

// for (let i = 0; i < animals.length; i++) {
//   //   console.log(animals[i]);
//   for (let j = 0; j < animals[i].length; j++) {
//     console.log(animals[i][j]);
//   }
// }

// let arrN = [[1], [2], [3], [4]];

// console.log(arrN[0][0]);

// for (let i = 0; i < 2; i++) {
//   for (let j = 1; j < 3; j++) {
//     console.log("i -->", i, "j -->", j);
//   }
// }


function  checkPass() {
    
let userPassword = "aaaaaaaa".toUpperCase();
let correctPass = false;
let passMaiNum = "no";
// let userCode = ""

// console.log(userPassword)


// b
if (userPassword[0] >= 0 && userPassword[0] <= 9) {
 return console.log("Password not start with a number");
}
// c
if (userPassword.length < 6) {
 return console.log("Password length should at least 6");
}

// a
if (userPassword) {
  for (let i = 0; i < userPassword.length; i++) {
    // console.log(userPassword[i])
    if (userPassword.charCodeAt(i) >= 65 && userPassword.charCodeAt(i) <= 90) {
      //
      passMaiNum = "yes";
      // console.log("Password is correct")
    }
    // userCode += userPassword[i].charCodeAt();
  }
  // console.log(userCode)
}

if ((passMaiNum = "yes")) {
  for (let i = 0; i < userPassword.length; i++) {
    // console.log(userPassword[i]);
    if (userPassword.charCodeAt(i) >= 48 && userPassword.charCodeAt(i) <= 57) {
      correctPass = true;
    }
  }
}

if (correctPass) {
  console.log("password is correct");
} else {
  if(passMaiNum == "yes"){
    console.log("password must contain numbers");
  }else {
    console.log("password must contain alphabets");
  }
}

} 

checkPass()