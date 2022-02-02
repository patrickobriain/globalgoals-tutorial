input.onButtonPressed(Button.A, function () {
    basic.showString("SDG3!")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 17))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
