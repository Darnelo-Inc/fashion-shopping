//const burger = document.getElementById("burger")
//const page = document.getElementById("page")
//const body = document.body

console.log("Hello")

burger.addEventListener("click", => {
    if (burger.classList.contains("active")) {
        closeMenu()
    } else {
        showMenu()
    }
})

function showMenu() {
    burger.classList.add("active")
}

function closeMenu() {
    burger.classList.remove("active")
}
