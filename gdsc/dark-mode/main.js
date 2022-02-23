
function toggle(){
    document.body.classList.toggle("dark-mode")
    const Types = document.querySelectorAll("span")
    Types.forEach(Type => {
        Type.textContent = Type.textContent === "dark" ? "light" : "dark" 
    });
}

const MyTime = new Date("Feb 26, 2022 15:37:25")

setInterval(() => {
    const now = new Date()
    const differance = MyTime - now

    let days = Math.floor(differance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differance % (1000 * 60)) / 1000);

    document.querySelector(".countdown").textContent = `mazal ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

}, 1000);