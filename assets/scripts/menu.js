//menu
const botao = document.querySelector("[data-button]")
const menu = document.querySelectorAll(".menu__lista")

botao.addEventListener("click", function() {
    menu.forEach(secao => {
        secao.classList.toggle("hide")
        if(!secao.style.display || secao.style.display == "none") {
            secao.style.display = "flex"
        } else {
            setTimeout(function() {
                secao.style.display = "none"
            }, 500)
        }
    })
})

//switch theme
const body = document.querySelector("body")
const tema = document.querySelector(".menu__switch")
const icon = document.querySelector(".menu__link--switch")
tema.addEventListener("click", function() {
    body.classList.toggle("dark")
    icon.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PHBhdGggZD0iTTI2NCw0ODBBMjMyLDIzMiwwLDAsMSwzMiwyNDhDMzIsMTU0LDg2LDY5LjcyLDE2OS42MSwzMy4zM2ExNiwxNiwwLDAsMSwyMS4wNiwyMS4wNkMxODEuMDcsNzYuNDMsMTc2LDEwNC42NiwxNzYsMTM2YzAsMTEwLjI4LDg5LjcyLDIwMCwyMDAsMjAwLDMxLjM0LDAsNTkuNTctNS4wNyw4MS42MS0xNC42N2ExNiwxNiwwLDAsMSwyMS4wNiwyMS4wNkM0NDIuMjgsNDI2LDM1OCw0ODAsMjY0LDQ4MFoiLz48L3N2Zz4="
    if(body.classList == "dark") {
        icon.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1zdW4iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMSIgeTI9IjMiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIxIiB5Mj0iMjMiLz48bGluZSB4MT0iNC4yMiIgeDI9IjUuNjQiIHkxPSI0LjIyIiB5Mj0iNS42NCIvPjxsaW5lIHgxPSIxOC4zNiIgeDI9IjE5Ljc4IiB5MT0iMTguMzYiIHkyPSIxOS43OCIvPjxsaW5lIHgxPSIxIiB4Mj0iMyIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMjEiIHgyPSIyMyIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iNC4yMiIgeDI9IjUuNjQiIHkxPSIxOS43OCIgeTI9IjE4LjM2Ii8+PGxpbmUgeDE9IjE4LjM2IiB4Mj0iMTkuNzgiIHkxPSI1LjY0IiB5Mj0iNC4yMiIvPjwvc3ZnPg=="
    }
})