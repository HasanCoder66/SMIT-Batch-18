// console.log("js running -->")
let age = 19

// if(age > 18) {
//     console.log("barry ho")
// }else {
//     console.log("bary hoky aou")
// }


// const arr = ["hasan", 12, false, null ,  undefined, alert]
// console.log(arr)
// console.log(arr.unshift([]))



// for(let i = 0; i <= 5; i++){
//     for(let j = 0; j < 5; j++){
//         console.log(i,j)
//     }
// }


//parameter
function myName(n) {
    console.log(n)
}


let num = 12.25


console.log(num.toFixed(4))


let obj = {}
// console.log(obj.length)


let extra = "12.55";

// console.log(parseFloat(extra))



function submitHandler() {
    let inputEmail = document.getElementById("email")
    let inputPassword = document.getElementById("password")

    if (!inputEmail.value == "" && !inputPassword.value == "") {
        console.log(inputEmail.value)
        console.log(inputPassword.value)
    }
    console.log("mai chl raha hon -->")


}




// function successionOfVowels(sentence) {


//     let lowerSen = sentence.toLowerCase();

//     let succession = 0;
//     let vowels = [];

//     for (let i = 0; i < lowerSen.length - 1; i++) {
//         let first = lowerSen[i];
//         let second = lowerSen[i + 1];

//         switch (first) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (second) {
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         succession++;
//                         vowels.push(first + second);
//                         break;
//                 }
//                 break;
//         }
//     }
//     document.writeln(`<br>Sentence:<br><b>"${sentence}"</b>`);
//     document.writeln(`<br>Total Double Occurances: <b>${succession}</b>`);
//     document.writeln(`<br>Succession Vowels: <b>${vowels}</b>`);
// }
// successionOfVowels(prompt(`Enter Any Sentence to get succesion vowels in it`));








function vowelOcc(para) {
    // console.log("chla ==>")
    let first = ""
    let second = ""
    let succes = 0
    let vowels  = []
    for (let i = 0; i < para.length - 1; i++) {
        console.log(para[i])
        first = para[i]
        second = para[i + 1]

        switch (first) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":

                switch (second) {
                    case "a":
                    case "e":
                    case "i":
                    case "o":
                    case "u":
                        succes++
                        vowels.push(first + second)
                }


                break
        }
        break
    }

    console.log("First -->",first)
    console.log("Second -->",second)
    console.log("Vowels -->",vowels)
    console.log("Success -->",succes)
}
let userValue = prompt("Enter your paragraph", "Europe is a beautiful place where people enjou peaceful beaches and cool air.")
vowelOcc(userValue.toLowerCase())