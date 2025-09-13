const body = document.body

const navbar = document.querySelector(".navbar").addEventListener("click", () => {
    const headerNav = document.querySelector(".header-nav ul")
    headerNav.classList.toggle("active")
    body.classList.toggle("no-scroll")
})

