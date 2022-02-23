const input1 = document.querySelector(".first > input")
const button1 = document.querySelector(".first > button")

button1.addEventListener("click", () => {
    input1.type = input1.type === "text" ? "password" : input1.type === "password" ? "type" : input1.type
    button1.textContent = button1.textContent === "hide" ? "show" : button1.textContent === "show" ? "hide" : button1.textContent
})




const input2 = document.querySelector(".second > input")
const button2 = document.querySelector(".second > button")

button2.addEventListener("click", () => {
    input2.select()
    navigator.clipboard.writeText(input2.value);
})

const input3 = document.querySelector(".third > input")
const button3 = document.querySelector(".third > button")
const generate = () => {
    const characters = "ABCDEFGHIZJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789!?@#$%^&"
    let RandomText = ""
    for(let i = 0 ; i < 12 ; i++){
        if(Math.random() < 1/4){
            RandomText += numbers[Math.floor(Math.random()*numbers.length)]
        }
        else{
            if(Math.random() < 1/2){
                RandomText += characters[Math.floor(Math.random()*characters.length)].toUpperCase()
            }
            else{
                RandomText += characters[Math.floor(Math.random()*characters.length)].toLowerCase()
            }
        }
    }
    return RandomText;
}

button3.addEventListener("click", () => {
    input3.value = generate()
})



const input4 = document.querySelector(".form > input")
const button4 = document.querySelector(".form > #button")
const statue = document.querySelector(".form > .status")

button4.addEventListener("click", () => {

    const Text = input4.value
    const RegEx = /\S+@\S+\.\S+/
    statue.style.display = "block"
    if(RegEx.test(Text)){
        statue.textContent = "valid"
        statue.style.color = "green"
    }
    else{
        statue.textContent = "non valid"
        statue.style.color = "red"
    }
})

let [r,g,b] = [255,255,255]
const randomColor = () => [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)]

let Timer = setInterval(() => {
    [r,g,b] = randomColor()
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}, 1000);


const toggle = document.querySelector(".toggle")
toggle.addEventListener("click", () => {

})