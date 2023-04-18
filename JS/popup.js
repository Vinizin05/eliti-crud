const button = document.querySelector("button")
const popup = document.querySelector(".popup")


button.addEventListener('click', () => {
    popup.style.display = 'block'
    console.log("kkkk")
})

popup.addEventListener('click', event => {
    const closepopup = document.querySelector(".submit")
    popup.style.display = 'none'
})