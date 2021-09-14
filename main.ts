controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(controller.dx(), controller.dy())
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("You pressed b", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("You pressed the a button", DialogLayout.Bottom)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(scene.screenWidth(), scene.screenHeight())
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("PAUSED GAME LULLUL", DialogLayout.Bottom)
})
game.splash("no", "go away")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . 1 . 1 . 1 . . . . . . . 
    . . . . 1 . 1 . 1 . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
    music.playMelody("A C5 E C5 A C5 G C5 ", 200)
    music.playMelody("C5 C5 A A G G E E ", 200)
    music.playMelody("C5 B A E E A B C5 ", 200)
    music.playMelody("C5 B A E E A B C5 ", 200)
})
