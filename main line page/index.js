const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width,canvas.height)

let userName = prompt("please enter user name")
console.log("hello" + userName + "!")

if (userName = 'darknight25') {
    let password = prompt("admin enter password")
    console.log('admin acsess')
} else {
    console.log('no password needed')
    c.fillStyle = 'cyan'
    c.fillRect(0,0,canvas.width,canvas.height)
    
    
}

if (password = 'CoCo1435') {
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle = 'blue';
    c.fillRect(0,0,canvas.width,canvas.height)
} 

if(userName = 'darknight' && password !== 'CoCo1435'){
    c.clearRect(0,0,canvas.width,canvas.height)
    console.clear
    console.log('login failed try again')
    let retry = prompt("retry password or user name for acsses")
    console.log("hello" + userName && password + "1")
}
