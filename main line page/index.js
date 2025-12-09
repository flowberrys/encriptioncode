const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

let login_attemps = 0

c.fillRect(0,0,canvas.width,canvas.height)

let userName = prompt("please enter user name")
console.log("hello" + userName + "!")

if (userName === 'darknight25') {
    let password = prompt("admin enter password")
    console.log('admin acsess')
} else {
    console.log('no password needed')
    c.fillStyle = 'blue'
    c.fillRect(0,0,canvas.width,canvas.height)
    login_attemps = 0
    
    
}

if (password === 'CoCo1435') {
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle = 'white';
    c.fillRect(0,0,canvas.width,canvas.height)
} 

if(userName === 'darknight' && password !== 'CoCo1435'){
    c.clearRect(0,0,canvas.width,canvas.height)
    console.clear
    console.log('login failed try again')
    let retry = prompt("retry password or user name for acsses")
    login_attemps + 1
    console.log("hello" + userName && password + login_attemps)

}
let timer = 120

if (login_attemps => 3) {
    console.clear
    c.clearRect
    c.fillStyle = 'red'
    c.fillRect(0,0,canvas.width,canvas.height)
    document.getElementById("h1").innerHTML = "login failed try again in 2 minutes"

const timerInterval = setInterval(() => {
  counter--; // Decrement the counter by 1
  console.log(`Remaining: ${counter} seconds`);

  if (counter <= 0) {
    clearInterval(timerInterval); // Stop the interval when the counter reaches 0 or less
    console.log("Timer finished! try login again");
  }
}, 1000);

 login_attemps = 0
}
