input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        contador += -1
        basic.showNumber(contador)
        basic.pause(1000)
    }
})
let contador = 0
contador = 10
basic.showNumber(contador)
