input.onButtonPressed(Button.A, function () {
    basic.showString("SDG3!")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 17))
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(2000)
        basic.showIcon(IconNames.Diamond)
        basic.pause(2000)
    }
})
