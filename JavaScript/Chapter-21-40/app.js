console.log("js running -->")


// let para = "my name is hasan ashraf"
// let count = 0
// let index = []
// for(let i =0; i < para.length; i++){
//     // console.log(para[i])
//     console.log(i)
//     if(para[i] == "a"){
//         index.push(i) 
//         count++
//         console.log("mil gaya")
//     }
//     // else {
//     //     console.log("a nhi mila")
//     // }
// }

// console.log(index)

// index.splice(0,4)

// console.log(index)


let newPara = "my name is hasan ashraf".split("")


// console.log(splitArr)


// for(let i =0; i < splitArr.length; i++){
//     // console.log(splitArr[i])
//     // console.log(i)
//     if(splitArr[i] == "a"){
//         // index.push(i) 
//         // count++
//         console.log("mil gaya")
//         splitArr.splice(i,1)
        
//     }
//     // else {
//     //     console.log("a nhi mila")
//     // }
// }


// console.log()
// splitArr = splitArr.join("")
// console.log(splitArr)



// const returnVal = newPara.filter((v) => v.split("").splice(v,1))

// console.log(returnVal)

// console.log(Math.round(12.5))

// let num = 12.5067

// console.log(num.toFixed(2))


// Ramadan Logic 

// let firstRam = new Date("Thursday, February 19, 2026").getTime()
// let today = new Date().getTime()
// // console.log(today)
// // console.log(firstRam)

// let diff = firstRam  - today
// console.log(diff)

// let days = Math.floor(diff / (1000 * 60 * 60 * 24))
// console.log("Ramadan Days",days)
// let week = days / 7
// console.log("Ramadan Weeks",Math.floor(week))

// let month = days / 30
// console.log("Ramadan Months",month)


// let heading = document.getElementById("heading")

// console.log(heading.innerHTML = "<p> new para </p>")


let btnClick = document.getElementById("click")
let operator = document.getElementById("operator").innerText
let result = ""
console.log(operator)


function calculator (a,b) {
    if(operator == "+"){
        return a + b
    }

    console.log("calculator",a)



    if(operator == "+"){
    //   return  a + b
    console.log(a + b)

    result = a + b
    }
}

console.log(result)