const closePath = "./imagens/fechada.png"
const openPath = "./imagens/aberta.png"
const brokenPath = "./imagens/quebrada.png"

document.addEventListener("DOMContentLoaded", function() {
    const $img = document.querySelector("img")

    $img.src = closePath

    $img.addEventListener("mouseover", () => {
        $img.src = openPath
    })

    $img.addEventListener("mouseout", () => {
        $img.src = closePath
    })

    $img.addEventListener("click", () => {
        $img.src = brokenPath
    })
})