//efeito scroll
//skills
const scrolls = document.querySelectorAll(".scroll")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting)
        if(entry.isIntersecting) {
            console.log(entry.target)
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.4
}) 

scrolls.forEach(scrl => {
    observer.observe(scrl)
})


//seta
const seta = document.querySelector(".seta")
const sobre = document.querySelector("#sobre")
const setaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        seta.classList.toggle("seta__animation", entry.isIntersecting)
    })
})

setaObserver.observe(sobre)