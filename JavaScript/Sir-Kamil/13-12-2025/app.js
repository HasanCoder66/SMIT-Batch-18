// console.log("js is running -->")

let paragraph = document.getElementById("paragraph")
let btn = document.getElementById("btn")
// console.log(btn)


let expandParaText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi iure eligendi vitae ea quam libero expedita praesentium rerum incidunt.`


function expand() {
    // paragraph.innerHTML = expandParaText
    if (btn.innerText.toLowerCase() == "see more") {
        paragraph.innerHTML = expandParaText
        btn.innerHTML = "See Less"
    } else {
        btn.innerHTML = "See More"
        paragraph.innerHTML = expandParaText.slice(0, 30)
    }

}



// submit Handler

var email = document.getElementById("email")
var pass = document.getElementById("password")

function sweetAlert2(message) {

    // console.log(message)
    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}

function submitHandler(e) {
    // console.log("form submit horaha hai ...", e)
    e.preventDefault()

    if (email.value.trim() == "") {
        sweetAlert2("Please Enter a Email!")
        return

    }

    if (pass.value.trim() == "") {
        sweetAlert2("Please Enter a Password!")
        return
    }

    if (pass.value.length <= 7) {
        sweetAlert2("Please Enter at least 8 Characters.")
    }



    Swal.fire({
        title: "Congratulations!",
        icon: "success",
        draggable: true
    });

    setTimeout(function () {
        window.location.href = "dashboard.html"
    }, 10000)

}