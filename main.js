canvas = document.getElementById("myCanvas")
pencil = canvas.getContext("2d")
mouseEvent = ""
lpox = ""
lpoy = ""
canvas.addEventListener("mousedown", mmd)
canvas.addEventListener("mouseup", mmu)
canvas.addEventListener("mousemove", mmm)
canvas.addEventListener("mouseleave", mml)

function mmd(e) {
    mouseEvent = "mousedown"
}

function mmu(e) {
    mouseEvent = "mouseup"
}

function mmm(e) {
    cpox = e.clientX - canvas.offsetLeft
    cpoy = e.clientY - canvas.offsetTop

    if (mouseEvent == "mousedown") {
        pencil.beginPath()
        pencil.strokeStyle = "#4213B9"
        pencil.lineWidth = 3
        pencil.moveTo(lpox, lpoy)
        pencil.lineTo(cpox, cpoy)
        pencil.stroke()
    }

    lpox = cpox
    lpoy = cpoy
}

function mml(e) {
    mouseEvent = "mouseleave"
}