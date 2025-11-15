console.log("Javascript running -->")





// alert("Hello")


function generateRandomNum () {
 
// Generate Random Password -->

// step 1 
let values = "1GHJKsdfgh(*^%34asdfasf5678VHHFDGH94|})"

// console.log(values[39])

// step 2 
let password = ""

// step 3 
for (let i = 0; i < 12; i++) {
    let randomNum = Math.floor(Math.random() * values.length)

    // console.log(values[randomNum], randomNum)
    password = password + values[randomNum]

    //    console.log(randomNum)
}



console.log("Password -->", password)
}


