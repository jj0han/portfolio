//parallax
const parallax = document.querySelectorAll(".inicio")
window.addEventListener("scroll", function() {
    let offset = this.window.pageYOffset
    parallax.forEach(lax => {
        lax.style.top = (offset - lax.offsetTop) * (0.34) + "px"
    })
})