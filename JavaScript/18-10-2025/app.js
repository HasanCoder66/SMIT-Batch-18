// console.log("Hello World -->")



// var tableNum = prompt("Enter Your Table Number", 5);

// console.log(tableNum , "x" , 1, "=", tableNum * 1)
// console.log(tableNum , "x" , 2, "=", tableNum * 2)
// console.log(tableNum , "x" , 3, "=", tableNum * 3)
// console.log(tableNum , "x" , 4, "=", tableNum * 4)
// console.log(tableNum , "x" , 5, "=", tableNum * 5)
// console.log(tableNum , "x" , 6, "=", tableNum * 6)
// console.log(tableNum , "x" , 7, "=", tableNum * 7)
// console.log(tableNum , "x" , 8, "=", tableNum * 8)
// console.log(tableNum , "x" , 9, "=", tableNum * 9)
// console.log(tableNum , "x" , 10, "=", tableNum * 10)





// let favSnack = "Slanty"
// let currentAge = 22;
// let maxAgeOfEatSlanty = 23;

// let perDaySlanty = 2;

// let restLife = maxAgeOfEatSlanty - currentAge;
// console.log((restLife * 365) * perDaySlanty  )





// let a = 2;
// let b = 1;

// console.log(--a +  b - a--)





let sub1 = "Maths"
let sub2 = "Urdu"
let sub3 = "Isl"

let totalMarks = 100 * 3;

let firstSubObtainedMark = 58;
let secSubObtainedMark = 87;
let thirdSubObtainedMark = 77;

let totalObtainedMarks = firstSubObtainedMark + secSubObtainedMark + thirdSubObtainedMark

let percentage = (totalObtainedMarks / totalMarks) * 100

console.log("Total Marks --->",totalMarks)
console.log("Total Obtained Marks --->",totalObtainedMarks)
console.log("Total Percentage --->",percentage + "%")


document.writeln(` <table border="2">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${sub1}</td>
            <td>100</td>
            <td>${firstSubObtainedMark}</td>
            
        </tr>

        <tr>
            <td>${sub2}</td>
            <td>100</td>
            <td>${secSubObtainedMark}</td>
            
        </tr>
        <tr>
            <td>${sub3}</td>
            <td>100</td>
            <td>${thirdSubObtainedMark}</td>
            
        </tr>
        <tr>
            <th>Total</th>
            <td>${totalMarks}</td>
            <td>${totalObtainedMarks}</td>
            <td>${percentage}%</td>
            
            
        </tr>
       
    </table>`)