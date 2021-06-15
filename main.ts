basic.forever(function () {
    basic.showString("Aceleraciones")
    basic.showString("X:" + input.acceleration(Dimension.X))
    basic.showString("Y:" + input.acceleration(Dimension.Y))
    basic.showString("Z:" + input.acceleration(Dimension.Z))
    basic.showString("F:" + input.acceleration(Dimension.Strength))
})
