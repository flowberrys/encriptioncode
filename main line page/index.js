const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

let login_attemps = 0

c.fillRect(0,0,canvas.width,canvas.height)

const signOnTime = new Date();

let userName = prompt("please enter user name")
console.log("hello" + userName + "!")

let password = prompt("enter admin password")

if (userName === "darknight25" && password === "CoCo1435"){
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    console.log('welcome admin')
    console.log(password && userName && signOnTime)
} else {
    let password = prompt("hit enter")
    c.fillStyle = 'blue'
    c.fillRect(0,0,canvas.width,canvas.height)
    console.log("welcome" + userName + "!" && signOnTime)

    document.getElementById('iframe').innerHTML = moveTo(0,0) && width === 1024 && height === 576
    document.getElementById('title').innerHTML = "login_in_complete"
    document.getElementById('h1').innerHTML = "continue to next step"
    c.clearRect(0,0,canvas.width,canvas.height)
   
}

