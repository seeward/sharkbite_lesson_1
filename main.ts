// for sharky to bite
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mouthOpen = 1
    sharky.setImage(img`
        . . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . .
        . . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . .
        . . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . .
        . . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . .
        . . . . . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . .
        . . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . .
        . . . . . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c
        . . . . . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c
        . . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c .
        . . . . . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . .
        . . . . . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . .
        . . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . .
        . . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f .
        . . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f .
        . . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f
        . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f
    `)
})
// add all game characters on screen
function addCharacters() {
    smallfish = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . c c c c . . . .
        . . . . . . c c d d d d c . . .
        . . . . . c c c c c c d c . . .
        . . . . c c 4 4 4 4 d c c . . .
        . . . c 4 d 4 4 4 4 4 1 c . c c
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f
        . f 4 4 4 4 1 c 4 f 4 d f f f f
        . . f f 4 d 4 4 f f 4 c f c . .
        . . . . f f 4 4 4 4 c d b c . .
        . . . . . . f f f f d d d c . .
        . . . . . . . . . . c c c . . .
    `, SpriteKind.Food)
    sharky = sprites.create(img`
        . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
        . . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . .
        . . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . .
        . . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . .
        . . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . .
        . . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . .
        . . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . .
        f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . .
        f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . .
        f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . .
        . f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . .
        . . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . .
        . . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . .
        . . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . .
        . . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . .
        . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    bigfish = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c c c c . . .
        . . . . . . c 5 5 5 5 5 c c . .
        . . . . . c 5 5 5 5 5 5 5 5 c .
        . . . . c b b b b b b 5 5 5 c .
        . . . . c b b b b 1 b b c c . .
        . . . . c 1 1 b b 1 1 1 c . . .
        . . . c 1 1 1 1 b 1 1 1 c . . .
        . . . c 1 1 1 1 b 1 1 1 b b c c
        . . c c d 1 1 1 b 1 b 1 5 5 5 c
        . . c c d 1 c 1 1 1 b 1 b b 5 c
        . c c d d 1 1 1 1 1 b 1 f b 5 c
        f d d d 1 1 1 1 1 b b b f . c c
        f f f f f 1 1 1 b b 5 5 5 f . .
        . . . . . f f f 5 5 5 5 5 f . .
        . . . . . . . . f f f f f f . .
    `, SpriteKind.Food)
    baddie = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . f f f f . . . . . . . . . .
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . .
        . . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d d d 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d d d d d d 1 1 1 d f . . . . . .
        . . . . . . f b d d d d b f d 1 d f . . . . . .
        . . . . . . f c b b b d c f d d b f . . . . . .
        . . . . . . . f c b b 1 1 1 1 1 f . . . . . . .
        . . . . . . . . f f f f f 1 b 1 f . . . . . . .
        . . . . . . . . f b 1 1 1 c f b f . . . . . . .
        . . . . . . . . f f b 1 b 1 f f . . . . . . . .
        . . . . . . f . f f f b f b f . . . . . . . . .
        . . . . . . f f f f f f f f . . . . . . . . . .
        . . . . . . . f f f f f . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    baddie.setPosition(135, 80)
    sharky.setPosition(Math.randomRange(0, -120), Math.randomRange(0, 140))
    baddie.setVelocity(150, 0)
    animation.runImageAnimation(
        baddie,
        [img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f f f f . . . . . . . . .
            . . . . . . . . f f 1 1 1 1 1 f . . . . . . . .
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
            . . . . . . f b d 1 1 1 1 1 1 1 f . . . . . . .
            . . . . . . f d d d 1 1 1 1 1 1 d f . . . . . .
            . . . . . . f d d d d 1 1 1 1 1 d f . . . . . .
            . . . . . . f d d d d d d d 1 1 d f . . . . . .
            . . . . . . f d d d d d d d 1 1 1 f . . . . . .
            . . . . . . f d d d d d d c f 1 1 f . . . . . .
            . . . . . . . f b d d d b 1 1 1 1 b f . . . . .
            . . . . . . . . f f f c f d b 1 b 1 f . . . . .
            . . . . . . . f f f f f f f f b f b f . . . . .
            . . . . f f . f f f f f f f f f f f . . . . . .
            . . . . . f f f f f f f f . . . . . . . . . . .
            . . . . . f f f f f f b 1 b 1 f . . . . . . . .
            . . . . . . f f f f f f b f b f . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f f f . . . . . . . . . .
            . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
            . . . . . . f b d 1 1 1 1 1 1 1 f . . . . . . .
            . . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . .
            . . . . . . f d d d 1 1 1 1 1 1 d f . . . . . .
            . . . . . . f d d d d d d 1 1 1 d f . . . . . .
            . . . . . . f d d d d d d 1 1 1 d f . . . . . .
            . . . . . . f b d d d d d d d 1 d f . . . . . .
            . . . . . . f f b b d d b f d 1 d f . . . . . .
            . . . . . . . f c b b d c f d d b f . . . . . .
            . . . . . . . f f f b d d c c f f f f . . . . .
            . . . . . . . f f f f c f b b b 1 b c f . . . .
            . . . . . . f f f f f f f f c d 1 b 1 f . . . .
            . . . f f f f f f f f f f . . f d f d f . . . .
            . . . . . f f f f f f . . . . . f . f . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . f f f f f . . . . . . . . . .
            . . . . . . . f f b 1 1 1 1 f f . . . . . . . .
            . . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . .
            . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . .
            . . . . . f f f f 1 1 1 1 1 1 1 d f . . . . . .
            . . . . f b 1 1 1 c 1 d d 1 1 1 d f . . . . . .
            . . . . f f b 1 b 1 f d c f 1 1 b f . . . . . .
            . . . . . f f b f b f b 1 1 1 1 1 f . . . . . .
            . . . . . . f f f f c f d b 1 b 1 f . . . . . .
            . . . . . . . f c c c f c f b f b f . . . . . .
            . . . . . . . . f f f f f f f f f f . . . . . .
            . . . . . . . . . f f f f f f . . . . . . . . .
            . . . . . . . . . f f f f f f . . . . . . . . .
            . . . . . f . . f f f f f f f . . . . . . . . .
            . . . . . f f f f f f f f f . . . . . . . . . .
            . . . . . . f f f f f f f . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f f f . . . . . . . . . .
            . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
            . . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . .
            . . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . .
            . . . . . . f d d d 1 1 1 1 1 1 d f . . . . . .
            . . . . . . f d d d d d d 1 1 1 d f . . . . . .
            . . . . . . f b d d d d b f d 1 d f . . . . . .
            . . . . . . f c b b b d c f d d b f . . . . . .
            . . . . . . . f c b b 1 1 1 1 1 f . . . . . . .
            . . . . . . . . f f f f f 1 b 1 f . . . . . . .
            . . . . . . . . f b 1 1 1 c f b f . . . . . . .
            . . . . . . . . f f b 1 b 1 f f . . . . . . . .
            . . . . . . f . f f f b f b f . . . . . . . . .
            . . . . . . f f f f f f f f . . . . . . . . . .
            . . . . . . . f f f f f . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
        `],
        500,
        true
    )
    animation.runImageAnimation(
        sharky,
        [img`
            . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . .
            . . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . .
            . . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . .
            . . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . .
            . . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . .
            . . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . .
            f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . .
            f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . .
            f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . .
            . f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . .
            . . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . .
            . . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . .
            . . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . .
            . . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . .
            . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . .
            . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . .
            . . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c
            . . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c
            . . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c .
            f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f .
            f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . .
            f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . .
            . f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . .
            . . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f .
            . . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f .
            . . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f
            . . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f
            . . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . .
            . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . . c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . c c d d b f . . . . . . . . . . . . . .
            . . . . . . . . . . . c b d d b f f . . . . . . . . . c c c . .
            . . . . . . . . . . f c c b b c f . . . . . . . . . c b b c . .
            . . . f f f f f f f c c c c c c f f . . . . . . . c d b c . . .
            . f f c b b b b b b b b b b b b b c f f f . . . . c d b f . . .
            f c b b b b b b b b b c b b b b b b c c c f f . c d b f . . . .
            f b c b b b b f f b b b c b c b b b c c c c c f f d c f . . . .
            f b b 1 1 1 1 f f b b b c b c b b b c c c c c c b b c f . . . .
            . f b 1 1 1 1 1 1 1 1 b b c b b b c c c c c c c c b b c f . . .
            . . f c c c 3 3 c b 1 1 b b b b c c c c c c c f f f b b f . . .
            . . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . f b b f . .
            . . . . f 3 3 c 1 1 1 c b b c c d d d d d b c . . . . f f f . .
            . . . . . f f 1 1 1 1 f d b b c c d d b c c . . . . . . . . . .
            . . . . . . . c c c c c f d b b b f c c . . . . . . . . . . . .
            . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . .
            . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . .
            . . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c
            . . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c
            . . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c .
            f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f .
            f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . .
            f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . .
            . f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . .
            . . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f .
            . . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f .
            . . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f
            . . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f
            . . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . .
            . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c
            . . . . . . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c
            . . . . . . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c .
            . . . . f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f .
            . . . . f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . .
            . . . . f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . .
            . . . . . f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . .
            . . . . . . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f .
            . . . . . . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f .
            . . . . . . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f
            . . . . . . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f
            . . . . . . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
   `, img`
            . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . .
            . . . . . . . . . f f f f f f c c b b c f . . . . . . . . . . . . . . .
            . . . . . . f f f b b b b b b b b c c c f f . . . . . . . . . . . . . .
            . . . . . f b b b b b b b b b b b b b b b c f f f . . . . . . c c c c c
            . . . . . b c b b b b b f f b c b c b b b b c c c f f . . . c d b b b c
            . . . . . b b b 1 1 1 1 f f b b c b c b b b c c c c c f f c d d b b c .
            . . . . . f b 1 1 1 1 1 1 1 1 b c b c b b b c c c c c c c b d b b f . .
            . . . . . . f c c c 3 3 c 1 1 b b b b b b c c c c c c c c c b b c f . .
            . . . . . . . f c 1 3 1 c c 1 1 b b b b c c c c c c c c f f b c c f . .
            . . . . . . . . f 3 3 c 1 1 1 1 b b b c c c c c b d b c . . f b b c f .
            . . . . . . . . . f f 1 1 1 1 c b b b f d d d d d c c . . . . f b b f .
            . . . . . . . . . . . c c c 1 f b d b b f d d c c . . . . . . . f b b f
            . . . . . . . . . . . . . . c c f b d b b f c . . . . . . . . . . f f f
            . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
        `],
        500,
        true
    )
    controller.moveSprite(sharky)
    smallfish.setPosition(0, Math.randomRange(0, 140))
    bigfish.setPosition(0, Math.randomRange(-50, 100))
    smallfish.setVelocity(50, 0)
    bigfish.setVelocity(10, 2)
    smallfish.image.flipX()
    bigfish.image.flipX()
    scene.setBackgroundImage(img`
        8 c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c c c c c c c c e e e e c c b b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e b b b b b b b c c b b b e e e e e e c b b c e e e e e e e e e e e c c c
        8 c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 c c c c c c c c c c c c c c c c f f f f c c c c c c c c c c c c c c e c c f f f c c c c c c c c c c c e e c c b b b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e c b b b b b c c c e e e e e e e c b c e e e e e e e e e e e c c c c
        c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f c c c c c c c f c c c c c c f f f f f f c c c c c c c c f c c c e c c b b b b c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e c b b b b b c e e e e e e e e c c e e e e e e e e e e e c b b c c
        c c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 c c c c c c c c c c c c f f f f f f f f f f c c c c c f f f c c c c f f f f f f f c c c c c c c c f f c c c c c c b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e e e e e c c b b c e e e e e e e e c e e e e e e f f f e e c c b b b c
        c 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c e c f f f f f f c c e c c c c c c f c c c e c c c b b b b c c c c c c c f f f f c c f f f f f f f f f f f f f c b b b b b c c f f f f f f f f f f f f f f f f f f f f f f f c c c c e e e e e e e c c c e e e e e e e e c e e e e f f f f f e e e c b b b b b
        c 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f c c c f f f f f f f c c e e c c c c c c c c e e c c c b b b b c c c c c c c c f f c c c c f f f f f f f f f f f c c b b b b b b b c c f f f f f f f f f f f f f f f f f c c c c c c b c c e e e e e e e e e e e e e e e e c c e e f f f f f e e e e e e c c b b b
        8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c f f f f f f f f c c e e e e e c c c c c e c c c c b b b b b b b b c c c c c c c c c c f f f f f f f f f f f c b b b b b b b b b c c f f f f f f f f f f f f f f f c c b b b b b b b b c c e e e e e e e e f f f f e c c e e f f f f f e e c e e e e e c b b b
        8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c f f f f f f f f f c e e e e e e f f c c e e e c c b b b b b b b b b b b b b b b c c c c f f f f f f f f f c c b b b b b b b b b b c c f f f f f f f f f f f f f f c b b b b b b b b b b c c e e e f f f f f f f f e c e e e e f f e c c c c e e e e e e c b b
        8 8 8 8 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c f f f f f f f f c c c e e e c f f f c e e e e c c b b b b b b b b b b b b b b b b b c c c f f f f f f c c c b b b b b b b b b b b c f f f f f f f f f f f f f c c b b b b b b b b b b b b c e e f f f f f f f f e e e e e e e c c c c c c e e e e e e c c b
        8 8 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c f f c c c c c c f f f f f f f f f f c c c c c c c c f f f f f f f c c c c c c c f f f c e e e c c c b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b c f f f f f f f f f f f f c c b b b b b b b b b b b b b c c e e f f f f f f e e c c c c c c c c c c c c e e e e e e c c
        f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f c c c f f f f f f f f f f c e e c c c c c c f f f f f f c c c c c c c f f f c e c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f f f f f f f f f c b b b b b b b b b b b b b b b b c c f f f f f e e e c b b b b c c c c c c c e e e e e e e e
        f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f c c f f f f f f f f f f c c c c c c c c e c f f f f c c c c c c c c f f f c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f f f f f f f f c c b b e e b b b b b b b b b b b b b c e f f f e e e c b b b b b c c c c c c c c e e e e e e e
        f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f c f f c c c c c c c c f f c c c c c c c c c c c e e e c c c c e e e c b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b c f f f f f f f f c c b b b c e e e e b b b b b b b b b b c c e f f e e e c b b b b c c c c c c c c c c e e e e e e
        f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c e e c c c c c c c c c c c c c e e e e e e e e e e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f f f c c c b b b b c e e e e e e e b b b b b b b b c c e e e e c b b b b b c c c c b b c c c c c c c c c c
        f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c e e e c c c c c c c c c c c c e e e e e e e e e e c c c c e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f f c c b b b b b b b c e e e e e e e e e b b b b b b c e e e e c c b c c c c c c b b b b b b c c b b b b b
        f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c e e e c c c f f f c c c c c c e c e e e e c c c e e c b b c e e e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f c c b b b b b b b b b c e e e e e e e e e e e c b b c c e e e e e e e c c c c b b b b b b b b b b b b b b
        f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c e e e e c c c f f f f f f c c e e c c c f f f f f f e c c b b c e e e e e e c c b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b c f f c c b b b b b b b b b b b e e e e e e e e e e e e e c c c e e e e e e e e c c c b b b b b b b b b b b b b b
        f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f c c c f f f f f f f c e c b c c c c e e e c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b c e e e e e e e e e e e e e c c e e e e e e e e e e c b b b b b b b b b b b b b b
        f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f e c c b c c c e e e e c c c b b b b b b c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b e e e e e e e e e e e e e e c c e e e e c e e e e e c b b b b b b b b b b b b b
        f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f c c f f f f f f f c c c c f f f f f f f f f f f f f f c e c c b b c c e e e e c c b b b b b b b b b b b c b b b b b b b b b e e c c c b b b b c e e c c c c c c b b b b b b b b b b b c e e e e e e e e e e e e e e c c c c c c c c e e e e c b b b b b b b b c e e c b
        f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f c c c f f f f f f f c c c f f f f f f f f f f f f c c c c c c b b b c c c c c b b b b b b b b b b b b c b b b b b b b b b e e e e e c c b b b c e c c c c c c b b b b b b b b b b b b c e e e e e e e e e e e e e e e c c c c c c c e e e e e b b b b b c c e e e e c b
        f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f c c c c f f f f f f f f c c f f f f f f f f f f f f c c c c b b b b b b b c c c b b b b b b b b b b b c c c b b b b b b b b e e e e e c c c b b e e c c c c c c b b b b b b b b b b b b c e e e e e e e e e e e e e c c c c c c c c c e e e e e c b b b c e e b b b c c b
        f f f f f f f f f f f 8 8 8 8 8 8 8 8 c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f c c c c c c c f f f f f f f f f f f c c c b b b b b b b b c c c b b b b b b b b b b c c c c c b b e b b b c e e e e e e e c c c c e c f f c c b b b b b b b b b b b b b c c e e e e c c e c c f f f f c c c c c c c c e e e e e e c b b e e e b b b b b b
        f f f f f f f f f f f f 8 8 8 8 8 c c c c c c c c c b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f c c b b c c c c c f f f f f f f f f e e c c c b b b b b b c c e e e e c c c c b c c c c c c c b b c b b b c e e e e e e e c c c c c f f c c c b b b b b b b b b b b b c c c e e e e e c f f f f f f f f c c c c c c c c e e e e e e e e e e c b b b b c c
        f f f f f f f f f f f 8 8 8 8 c c c c c c c c c c b b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f c c e c c f f c c b b b b c c c c c c c c c f f f f c e e e e c c c c c c c e e e e e e e e e e c c c c b b b b b b b b b e e e e e e e e c c c c c f f c c c b b b b b b b b b b e e e e e e e e e c e f f f f f f f f f f f c c c c c c c c e e e e e e e c b b b b c c
        f f f f f f f f f 8 8 8 8 c c c c c c c c c c c c b b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f c c f c c c c c b b c c c c c c c c c c c c c c c e e e e e e e e e e e e f f f e e e e e e e e c b b b b b b b b b c e e e e e e e c c c c c c f c e e e e b b b e e e e e e e e e e e e e e e c e f f f f f f f f f f f f f f f f f f f f e e e e e e e c b b c c c
        8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c b b b c c e e f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f c c c c c e e e c c c c c b b c c c c c c c e e e e e e e e e e e e f f f f f f f f c e c b b b b b b b b b b c e e e e e e e e c b b b c c c c e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e c
        8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c b b b c e e e f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f c c b b c e e e c c c c c c b c e e e c c e e f f f f f f e e e e e f f f f f f f f c c c b b b b b b b b b b c c e e e e e e c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f f f f c c c c c c c f f f f f f f f f f f f e e e e e e e e e c
        c c c c c c c c c c c c c c c c c c c c c c b b b c e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c e e c c c c c c c c e e e e e e e f f f f f f f c c c c c f f f f f f e c b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b e e e e e e e e e e e e e e e e e c e e f f f f f f e e e e e c c c c f f f f f f f f f f f f e e e e e e e e
        b b c c c c c c c c c c c b b b c c c c c c c c c e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f c c c c c c c c e c c c c c c c c c c e e e e e e f f f f f f c c c c c e f f c c c e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c e e e e e e e e e e e e e e e e e e f f f f f f f f c e e e e e c e e c f f f f f f f f f f c c e e e e e e
        b b b b c c c c c c c b b b b b b c c c c c c c e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b c c c c c c c b b c c e e c c c c c c c c c c c c e e e e e e f f f e c e c c c c c e f c e e c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e f f f f f c e e e e e e e e c c c e c c f f f f f f f f f c c e e e e e
        c c c c b b c c c c b b b b b b b c c c c c e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b c c c c c b b b b b c c c c c c c c c c c b b b c c e e e e c e f f f c c c c c c e e c e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c e e e e e e e e e e e e e e e e e e f f f f e c c c c b b b b b b b c c c c c c c f f f f f f f c c c e e e e
        e e c c c c c c c c c b b b c c c c c c c e e e e e f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f c c c c c c c b b b b b b b b b b b c c c c c c c c c c c c e e e e e e f f f e c c c e e e e e e c c c c c c b b b b b b b b b b b b c c c b b b b b b b b b b b b b b b c c c e c e e e e e e c c c c e e f f f f e c b b b b b b b b b b b b b b b b c c c c f f f f f f e c c e e e
        e e e e c c c c c c c c c e e e e e e e e e e e e f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f c c e e c b b b b b b b b b b b b b b c c c c c c c c c c e e e e e c f f f c c c c e e e e e e c c c c c c b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b c e e e c b b b b e e f f f c c b b b b b b b b b b b b b b b b b b b c c c c f f f f f e e e e e
        f e e e e e c c c c c e e e e e e e e e e e e c f f f f f f f f f f f c c c b c c c f f f f f f f f f f f f f f f f f f c c e c c b b b b b b b b b b c c c c c c b b c c c c c c e e e e c c f f f f e c e e e e e e e e e c c c c b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f f c b b b b b b b b b b b b b b b b b b b b b b c c e f f f f e e e e e
        f f f f e e e e c c e e e e e e e e e e e e c f f f f f f f f f f f c c c b c c c c f f f f f f f f f f f f f f f f f f c c c c c b b b b b b b b b c e e e e c b b b b b c c c c c c c e e c f f f f c e e e e e e e e e e e e c c b b b b b b b b b b b b b b b c e e e b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f c c b b b b b b b b b b b b b b b b b b b b b b b c c e f f f e e e e e
        f f f f f e e e e e e e e e e e e e e e e c f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c b b b b b b b b b b b c e e e e b b b b b b b c c c c c c c c c c f f f f e c e e e e e e e e e c c c b b e e b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c f f c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c f f c e e e e
        f f f f f e e e e e e e e e e e e e e c c f f f f f f f f f f f f c c c c c c e c f f f f f f f f f f f f f f f c c c b b b b b b b b b b b b b b b c e e e e b b b b b b b c c c c c c c c c c c f f f c e e e e e e e e c c c c c c e e e e b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f e e e e
        f f f f f e e e e e e e e e e e c c c c f f f f f f f f f f f f c c c c c c e e f f f f f f f f f f f f f f f f c c b b b b b b b b b b b b b b b b c e c e c c b b b b b b c c c b b b c c c c c f f f e e e e e e e e e c b b b b c e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f c e e e
        f f f f f e e e e e e c c c c c c f f f f f f f f f f f f f f f c c c c c c e c f f f f f f f f f f f f f f f c c c b b b b b b b b b b b b b b b b c c f f c c c c c c c c b b b b b b b c c c c c f f e e e e e e e e c c b b b b b c e e e e e e b b c e e b b b b b b b b b b b b b b b b b b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f c e e e
        f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f c c c c c c e e c f f f f f f f f f f f f f f f c c c b b b b c c c c b b b b b b b b c c f f e c e e e e c c c b b b b b c c c c c c f f c e c c c e e e c c c b b b c c e e e e e e c c c e c b b b b b b b b b b b b b b b b b b b b b c c e e e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f c c c c b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c e e e f f f f f f f f f f f f f f c c c b b b b c c c c c c b b b b b b c c c f f e c e e e e e c c c c c c c c c c e c c f f c c c c e e e e e c c c c c e e e e e e e e c b c c c b b b b b b b b b b b b b b b b b b b b c e e e e e e e c b b b b b b b b b b b b b b e e e e e e e e e e e b b b b b b b b b b c c c c c b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e c c c c c c c f f f f f f f f f f f f c c c b b b b c c c c c c c c c c c c c c c f f c c e e e e c c b c c c c e c c e e e c f c c e e e e e e c e e e e e e e e c c e e e e c c c c c c c c b b b b b c c e e b e e e c c c e e e e e e e e e c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e b b b b b b c c b b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e c c c c c c c c c c f f f f f f f f f f f c c c c b b c c c c c c c c c c c c c c c c c c c c c e e e c b b c c c c c c c c e c c c e e e e e e c c e f c e e e e e c c c c e e e e c c c c c c c c c c c c c e e e e e e e e e e e e e e f f f e e e c b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e c c c c c c c c c c f f f f f f f f f f c c c c b b c c c c c c c c c c c c c c c c c c b b c c c c c b b b c c c c c c c c c c c e e e e e c c f f f f f f e e e c c c c c e e e e c b b b b b c e e c c c e e e e e e e e e e e e e f f f f f e e e e e e b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e e e e e e e e c c c f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c b b b b c c c c b b b b b b b b b b b c c c e e e e c c f f f f f f f f e c c c c c c e e e c c b b b b b c c c c c c c c c e e e e e e e e c f f f f f f f e e e e e b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e c f f f f f f f f f c c c c c c c c c c c c c e e e e e e c c c c c c b c c c c c b b b b b b b b b b b b c c e e c c f f f f f f f f f f e c c c b c c c c c c b b b b b b c c c c c c c c c c c e e c c c c c c e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e c c c c c c c c f f f f f f f f f f c e c c c c c c c c c c c e e e e e e c c c c c c c c c c c c c b b b b b b b b b b b c c c e f f f f f f f f f f f f c c c c b b c c c c b b b b b c c c c e c c c b b b b b c e c c c c e e e e f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e c c c f f f f f f f f f f f f f f f f f e e e c c c c c c c c c e e e e e e c c c c c c c c c c c c c b c c c b c c c b b c c c c e f f f f f f f f f f f f c c c b b b b c c b b b b c c c c c e e c c b b b b b b b c e c e e e c c e f f e e c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c c c f f f f f f f f f f f f f f f f f f e e e e c e e c c c c e e e e e e e c c c c c c c c c c c c c c c c e e e e c c c c c c e c f f f f f f f f f f f f c c b b b b c c c c c c c c c c c c e c c b b b b b b b b c e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c b b b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e c c c c c f f f f f f f f f f f f f f c c c c e e e e e c c c c c e e e e e e e e c c c c c c c e e e e e c c c e e e e c c c c c c c f f f f f f f f f f f f f c c c c c c c c c e e e e e e e e e e c b b b b b b b b b b c c c c c c e f f e e c c c c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c b
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f c c c b c c c c c c c c c c c c e e e e e e e e e e e c c c e e e e e e c c c c e e c c e e e c c c f f f f f f f f f c c f e c c c c c c c e e e e e e e e e e e c c b b b b b b b b b c c f f f f f c e e e c c b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c
        f f f f f f f c c c c c f f f f f f f f f f f f f f f f f c c c c c b b b c c f f f f f f f f f f c c b b b b b b b b b c c c c c e e e e e e e c c c c e e c c e e e e e e c c c c e e e e e e e c c c c f f f f f f c c c c c c c c e c e e e e e e e e e e e e e e c c b b b b b b b b b c c f f f f f c e e c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c
        f f f f f f e e e c c e c f f f f f f f f f f f f f f f f f c e c b b b b c c f f f f f f f f f f c c c b b b b b b b b c c c c c e e e e e e e c c c c c c c c e e e e e e c c c c e e e e e e c c c c c c f f f f c c c c c c c c e e e e e e e e e f f f c e e e c c b b b b b b b b b b c e f f f f f c c c c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c
        f f f f c e e e e e e c c c f f f f f f f f f f f f f f f c c c b b b b b b c c f f f f f f f f c c c c c c b b b b b c c c c c c e e e e e e c c c c c c c c c c e e e c c c c c c c e e e e e c c c c c c c f f f c c b c c c c c e e e e e e e e f f f f e e e e c c b b b b b b b b b c c f f f f f f c e c c e b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c e e e e e e
        f f f f e e e e e e e c c c c f f f f f f f f f f f f f c c c b b b b b b b c c f f f f f f c c c c c c c c b c c c c c c c c c e e e e e e c c f e c c c b c c c e e c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c e e c c c f f f f f f f e e e e c c c b b b b c c c c c c f f f f f f c e e e e e e e e b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c e e e e e e
        f f f e e e e e e e e e e c c c f f f f f f f f f f f c c c c b b b b b b b b c c f f f f c c c b b b b b b b c c c e e e e e c c e e e e c c f f e c b b b c c c c e e c e e e e c c c c c c c e c b b b c c c c c c c c c c c c c c f f f f f f f f f f f e e e e e c c c b b c c e c c c c f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c e e e e e e e
        f f c e e e e e e e e e e c c c f f f f f f f f f c c c c c c b b b b b b b c c c f f f f c c c c b b b b b b b c c e e e e e c c c e e e c f f f c c b b b c c c c e e c c e e e c c c c c c c c c c c c c c c c c c c c c c b b c c c f f f f f f f f f f f e e e e e e e e e e e e e c c c f f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c e f f f f f e e
        f f e e e e e e e e e e e e c c c f f f c c c c c c c c c c b b b b b b b b c c c f f f f c c c c b b b b b b b c c e e e e c c c c c c e c f f f c c c c c c c c c c c c c e e c c c c c c c c c c c c c c c c c c c e e e b b b b c c f f f c c f f f f f f c e e e e e e e e e e e c c c c c f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c f f f f f c e
        f f e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c b b b b b c c c c f f f c c c c c b b b b b b b b c c e e c c b b b c c c c f f f c c c c c c c c c c e c c e e c c c c c c e e c c c c c c c c c c c e e c b b b b c c c c c e e c f f f f f c c c e e e e e e e e e e e e e e c f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c e
        f f e e e e e c c c c c e e e e c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b b b b c c c c c c b c c c c c c c f f c c c c c c c c c c e f c c e e e c e e e e c c c c c c c c c c c c c c b b b b b c c c c c e e c f f f f c e c c f c c c e e e e e e e e e e e f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c e c e e e e e c c c c b b c c
        f f f f f f f c f c c c c e e e e c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b b b c c c c c c b b b c c c c c c f f f e e e e e e e e e c f f f c c e e e e e c c c c b b b b c b b b b b b b b b b b b c c c c c c e c f f f c e e c c f f f f c c c c c c c c c c f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c e e e c c b b b b b b b b b
        f f f f f f f f f f f c c c c c c c c c f c c c c c c c c c c c b b b b c c c c c c c b b b c c c c b b b b b c c c c c b b b b c c c c c c c f f f f c e e e e e c c f f f f f f c e e e c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c f f f e e e e e e c f f c f f f f f c c f f f f f f f c c b b b b b b e e e e e e e e e e e e e e c c c c c c c c c c c c e e e b b b b b b b b b b b b
        f f f f f f f f f f f f f c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b c c c c c c b b b b c c c c c e e f f f f f f f f f f f f f f f f f f f c c c c b b b b b b b b c c b b b b b b b b b b b b b b b b b c c c c e c c c c c e e e c f f f f f f f f f f f f f f f c c b b b b b b b c e e e e e e e e e e c c c c c c c f f f f f c e e c b b b b b b b b b b b b b
        f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f c c c c e e c e c c c c c c c c c c b b b b b c c c c c c c b b c c c c e e e e f f f f f f f f f f f f f f f f f f f c c c b b c c c c c c c c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c e e c f f f f f f f f f f f f f c c b b b b b b b b b b e e e e e e e e e c c f f f f f f f f f f e e c b b b b b b b b b b b b b b
        f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f e c c c c f f c c c c b b b c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c c c c c c e c c e e e e e c c b b b b b b b b b b b b c c c c c c b b b b b b c c c c c e f f f f f f f f f f f f f e c b b b b b b b b b b b e e e e e e e c f f f f f f f f f f f c e c b b b b b b b b b b b b b b b
        c f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f c e e e e e c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c e e e e e e e e e e c c c b b b b b b b b b b c c c c b b b b b b b b b c c c c c c c f f f f f f f f f f f f e e c b b b b b b b b b b b c e e e f f f f f f f f f f f f f f e c b b b b b b b b b b b b b b b b
        c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e e c c c c c e e e c c c c c c c c c e c c c c c c f f f f f f f f f f f f f f f f f f f c c c c e e e c e f f f f f f c c c b c c b b b c c c c c c c b b b b b b c c c c c c c c c e e c f f f f f f f f f f f e e e e b b b b b b b b b b b c e e f f f f f f f f f f f f f e c b b b b b b b b b b b b b c c c c
        c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e e e e c c c c c c c e c c c c c c e e e e e e c f f f f f f f f f f f f f f f f f f f f f f c c c e e e c f f f f f f f f c c b b b c c c c c c c c c c b b b b c c c c c c e e c e e e e e e c f f f f f f f f f c e e e e e b b b b b b b b b b c c e f f f f f f f f f f f f f e c b b b b b b b b b c c c c c c c e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c e e e c e e e e e e e c c c c c c c c c c c c e e c c f f f f f f f f f f f f f f f f f f f f f f f c e e e e c f f f f f f f f f f c b b b c e e e c c c c c c b b b c c e e e e e e e e e e e e e e c f f f f f f f f f e e e e e e e e b b b b b b b b b c e f f f f f f f f f f f f f e c c b b b b b c c c c c c c c e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c e c c c e e e e e e c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c e c c f f f c e e c c f f c c b b b c c c c b b b c c c c c c e e e e e e e e e e e e e e c c c c f f f f f f f f c e e e e e e e e e b b b b b b b c c c f f f f f f f f f f f f e c c c c c c c c c c c c e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c e c f f c e e e e e c c c c c c c c c c f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f c c f f f c e e e e c c f c c c c c c c c c b b c c e e e e e e e e e e e e e e e e e e c c f f f f f f f f f f f c e e e e e e e e e e e c b b b b c c c f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c e c f c c c c e c c c c c c c f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c c c c c c c c f f c c c c e e e e e e e e e e e e e e e e c c e c f f f f f f f f f f f f f f c e e e e e e e e e e e e e b b b c c c f f f f f f f f f f c e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c e e e e c c c c c c c c c f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e c c c f f f f f f f f f e e e e e e e e e e e e e e e e c e c c f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e c c c f f f f f f f f c e e e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c e c e e c f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e c c f f f f f f f f f f c e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e c f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c b b b b b c c c c c c c c c c c f f f f f c e c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c c f f f f f f f f f f c e e e e e c c c c e e e e e c f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e f f f f f e e c e e e e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c b b b b b b c c c c c c f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c f f f f f f f f f f f c e e b b b b b b b b b b c c e c f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e c f f f c e c c c e e e e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f c c c c c c c c c b b b b b b c c c c f f f f f f f f f f f c c e e e c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c f f f f c c c f f f f f f f f f f f c e c c b b b b b b b b b b b b c e e f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e f f c e e c c e e e e e e e e e e e e e e e e e e e e e e e
        f f f f f f f f f f f f f f f f c c c c c c c f f f f f f f c c c c c c c c c b b b b b b c c c c f f f f f f f f f f f c c c c e e e e e e f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f c f f f f f f f f f f f f c c b b b b b b b b b b b b b b b c c c f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e c c e e e e e e e e e e c c c e e e e e e e e e e e e e e c c
        f f f f f f f f f f f f f f f c c e c c c f f f f f f f f f f c c c c c c c c c c b c c c c c f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f e c e b b b b c c b b b b b b b b b b b c c c f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e c c e e e e e e e e e e c f f c e e e e e e e e e e e e e c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e c c c c c c c c c c f f f f f f f f f f f f f f f f c f c c c c f f f f f f f f f f f f f f f c c c c c c f f f e c c f f f f f f f f f f f f f f f f f e e e e e e e e e e c c c b b b b b b b b c c c f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e f c e e e e e e e e c c f f f f f f c e e e e e e e e e e e c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f c c f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e c c c c c b b b b b c c f f f f f f f f f f f f f f f f f f f f f c c e e e e e e f f f f f c c e e e e e e f f f f f f f f c c e e e e e e e e e e e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f f c c e e e e e c c c e
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e c f f f c c c f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f c c c c c c c f f f f c c c c f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e e e c c c c c c e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f c c c c c c c c f f f c b b c c c f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f c c c c c c f f c c b b b c c c c c c f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f c c c c c b c c c c c c f f f f f f c c c c c c c c c b b b b b c c c c c c c f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f c b b b b c c f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f c c c c c c c c b c c c c c c c c f f f f f c c c c c c c c c b b b c c c b b b b c c f f f f f f f f e c f f f f f f c c e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f c b b b c c c c f f f f f c c c f f f c c c c e f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f c c e c c c b b b b b b b c c c b b b c c f f f f f f f f f f f f f f f f f f f f f c c c c c c c e e e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f c c b b c c c f f f f f f c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c b b b b c b b b b c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f c c c c c e f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c b b b c c b b b b c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c b b b c c b b b b c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f c c c c c c c c b b b c c c c c c c c c c c c f f f f f f c c c c c c c b b b b c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f c c c c c c c c c e c f f f f c c c c c c c c b b b c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f c c c c c c c c c e f f f f f c c c c c c c c b b c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f c c c c c c c c c c c c c c c c c e c f f f f f c c c c c c c c c c c c c c f f f f c c c f f f f f f f f f f c c b c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f c c c c c c c c c c c c c c c c c e e f f f f f f c c c c c c c c e c c c c c f f f c c c c f f f c c f f f f f c b b b c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f c c c c c c c c c c c c c c c c c c e c f f f f f c c c c c c c c f f f f f f f f f f c c c c c f f c c c f f f c c b c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f c c c c c c e e e c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c f f f f c c c c c c c c b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c f f f f c c c c e e e e c c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c f f f f f f f f c c c f f f c c b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f c e e e e e f f c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f c c c f f f c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f c c c c c c c c b b c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f c c c c c b b b b b c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c e e e e c c c c c f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f c c c c c b b b c c c c f f f f f f f f f f f f f c c f c c c e e e c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c e e e e e e e e c c c c c c c c c f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c e e e e e e c c c c c c c c c c c c c c c f f f f f f
        f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e c c c e e e e e f f f f f f f f f f f f f f f f f f f f f f c c c c e e e e c c c c c c c c c c c c c c c c c c c c c f f f f
        f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e f f f f c c c f f f f f f f f f f f f f f f f f c c c e e e c c c c c c c c c c c c c c c c c c c c c c c c f f f
        f f f f f f f f f f f f f f f f f f f c c b c c c c c c c c f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f c e e e e c c c c c c c c c c c c c c c c c c c c c c c c c c c f
        f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f f c c e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f c c c c f f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f c c e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        f f f f f f f f f f f f f f f f f f f f f f f f f f c b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f
    `)
}
// close sharks mouth when button released
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    sharky.setImage(img`
        . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
        . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . .
        . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . .
        . . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c
        . . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c
        . . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c .
        f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f .
        f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . .
        f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . .
        . f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . .
        . . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f .
        . . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f .
        . . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f
        . . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f
        . . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . .
        . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
    `)
    mouthOpen = 0
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Paused")
})
// when sharky overlaps with food
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (mouthOpen == 1) {
        if (otherSprite == smallfish) {
            mouthOpen = 0
            info.changeScoreBy(1)
            otherSprite.destroy()
            smallfish = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . c c c c . . . .
                . . . . . . c c d d d d c . . .
                . . . . . c c c c c c d c . . .
                . . . . c c 4 4 4 4 d c c . . .
                . . . c 4 d 4 4 4 4 4 1 c . c c
                . . c 4 4 4 1 4 4 4 4 d 1 c 4 c
                . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c
                f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f
                f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f
                f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f
                . f 4 4 4 4 1 c 4 f 4 d f f f f
                . . f f 4 d 4 4 f f 4 c f c . .
                . . . . f f 4 4 4 4 c d b c . .
                . . . . . . f f f f d d d c . .
                . . . . . . . . . . c c c . . .
            `, SpriteKind.Food)
            smallfish.setPosition(0, Math.randomRange(0, 80))
            smallfish.setVelocity(50, 0)
            smallfish.image.flipX()
        }
        if (otherSprite == bigfish) {
            info.changeLifeBy(1)
            mouthOpen = 0
            info.changeScoreBy(10)
            otherSprite.destroy()
            bigfish = sprites.create(img`
                . . . . . . . . c c c c c . . .
                . . . . . . c c 5 5 5 5 5 c . .
                . . . . . c 5 5 5 5 5 5 5 5 c .
                . . . . c b b b b b b 5 5 5 c .
                . . . . c 1 1 b b 1 b b c c . .
                . . . c 1 1 1 b b 1 1 1 c . . .
                . . . c 1 1 1 1 b 1 1 1 c . c c
                . . . c d 1 1 1 b 1 1 1 b b 5 c
                . . c c d 1 c 1 b 1 b 1 5 5 5 c
                . c c d d 1 1 1 1 1 b 1 b b 5 c
                f d d d 1 1 1 1 1 b b 1 f . c c
                f f f 1 1 1 1 1 1 b b b f . . .
                . . . f f 1 1 1 b b b 5 5 f . .
                . . . . . f f f 5 5 5 5 5 f . .
                . . . . . . . . f f f f f f . .
                . . . . . . . . . . . . . . . .
            `, SpriteKind.Food)
            bigfish.setPosition(0, Math.randomRange(0, 80))
            bigfish.setVelocity(5, 1)
            bigfish.image.flipX()
        }
    }
})
// when sharky overlaps with baddie
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
    if (info.life() == 1) {
        sharky.say("Ouch")
        sharky.startEffect(effects.warmRadial)
    }
    otherSprite.setPosition(Math.randomRange(0, -300), Math.randomRange(0, 140))
    otherSprite.setVelocity(100, 0)
})
let baddie: Sprite = null
let bigfish: Sprite = null
let smallfish: Sprite = null
let sharky: Sprite = null
let mouthOpen = 0
music.setVolume(5)
scene.setBackgroundImage(img`
    8 c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c c c c c c c c e e e e c c b b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e b b b b b b b c c b b b e e e e e e c b b c e e e e e e e e e e e c c c
    8 c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 c c c c c c c c c c c c c c c c f f f f c c c c c c c c c c c c c c e c c f f f c c c c c c c c c c c e e c c b b b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e c b b b b b c c c e e e e e e e c b c e e e e e e e e e e e c c c c
    c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f c c c c c c c f c c c c c c f f f f f f c c c c c c c c f c c c e c c b b b b c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e c b b b b b c e e e e e e e e c c e e e e e e e e e e e c b b c c
    c c 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 c c c c c c c c c c c c f f f f f f f f f f c c c c c f f f c c c c f f f f f f f c c c c c c c c f f c c c c c c b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e e e e e c c b b c e e e e e e e e c e e e e e e f f f e e c c b b b c
    c 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c e c f f f f f f c c e c c c c c c f c c c e c c c b b b b c c c c c c c f f f f c c f f f f f f f f f f f f f c b b b b b c c f f f f f f f f f f f f f f f f f f f f f f f c c c c e e e e e e e c c c e e e e e e e e c e e e e f f f f f e e e c b b b b b
    c 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f c c c f f f f f f f c c e e c c c c c c c c e e c c c b b b b c c c c c c c c f f c c c c f f f f f f f f f f f c c b b b b b b b c c f f f f f f f f f f f f f f f f f c c c c c c b c c e e e e e e e e e e e e e e e e c c e e f f f f f e e e e e e c c b b b
    8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c f f f f f f f f c c e e e e e c c c c c e c c c c b b b b b b b b c c c c c c c c c c f f f f f f f f f f f c b b b b b b b b b c c f f f f f f f f f f f f f f f c c b b b b b b b b c c e e e e e e e e f f f f e c c e e f f f f f e e c e e e e e c b b b
    8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c f f f f f f f f f c e e e e e e f f c c e e e c c b b b b b b b b b b b b b b b c c c c f f f f f f f f f c c b b b b b b b b b b c c f f f f f f f f f f f f f f c b b b b b b b b b b c c e e e f f f f f f f f e c e e e e f f e c c c c e e e e e e c b b
    8 8 8 8 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c f f f f f f f f c c c e e e c f f f c e e e e c c b b b b b b b b b b b b b b b b b c c c f f f f f f c c c b b b b b b b b b b b c f f f f f f f f f f f f f c c b b b b b b b b b b b b c e e f f f f f f f f e e e e e e e c c c c c c e e e e e e c c b
    8 8 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c f f c c c c c c f f f f f f f f f f c c c c c c c c f f f f f f f c c c c c c c f f f c e e e c c c b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b c f f f f f f f f f f f f c c b b b b b b b b b b b b b c c e e f f f f f f e e c c c c c c c c c c c c e e e e e e c c
    f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f c c c f f f f f f f f f f c e e c c c c c c f f f f f f c c c c c c c f f f c e c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f f f f f f f f f c b b b b b b b b b b b b b b b b c c f f f f f e e e c b b b b c c c c c c c e e e e e e e e
    f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f c c f f f f f f f f f f c c c c c c c c e c f f f f c c c c c c c c f f f c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f f f f f f f f c c b b e e b b b b b b b b b b b b b c e f f f e e e c b b b b b c c c c c c c c e e e e e e e
    f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f c f f c c c c c c c c f f c c c c c c c c c c c e e e c c c c e e e c b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b c f f f f f f f f c c b b b c e e e e b b b b b b b b b b c c e f f e e e c b b b b c c c c c c c c c c e e e e e e
    f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c e e c c c c c c c c c c c c c e e e e e e e e e e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f f f c c c b b b b c e e e e e e e b b b b b b b b c c e e e e c b b b b b c c c c b b c c c c c c c c c c
    f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c e e e c c c c c c c c c c c c e e e e e e e e e e c c c c e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f f c c b b b b b b b c e e e e e e e e e b b b b b b c e e e e c c b c c c c c c b b b b b b c c b b b b b
    f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c e e e c c c f f f c c c c c c e c e e e e c c c e e c b b c e e e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f c c b b b b b b b b b c e e e e e e e e e e e c b b c c e e e e e e e c c c c b b b b b b b b b b b b b b
    f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c e e e e c c c f f f f f f c c e e c c c f f f f f f e c c b b c e e e e e e c c b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b c f f c c b b b b b b b b b b b e e e e e e e e e e e e e c c c e e e e e e e e c c c b b b b b b b b b b b b b b
    f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f c c c f f f f f f f c e c b c c c c e e e c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b c e e e e e e e e e e e e e c c e e e e e e e e e e c b b b b b b b b b b b b b b
    f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f e c c b c c c e e e e c c c b b b b b b c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b e e e e e e e e e e e e e e c c e e e e c e e e e e c b b b b b b b b b b b b b
    f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f c c f f f f f f f c c c c f f f f f f f f f f f f f f c e c c b b c c e e e e c c b b b b b b b b b b b c b b b b b b b b b e e c c c b b b b c e e c c c c c c b b b b b b b b b b b c e e e e e e e e e e e e e e c c c c c c c c e e e e c b b b b b b b b c e e c b
    f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f c c c f f f f f f f c c c f f f f f f f f f f f f c c c c c c b b b c c c c c b b b b b b b b b b b b c b b b b b b b b b e e e e e c c b b b c e c c c c c c b b b b b b b b b b b b c e e e e e e e e e e e e e e e c c c c c c c e e e e e b b b b b c c e e e e c b
    f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f c c c c f f f f f f f f c c f f f f f f f f f f f f c c c c b b b b b b b c c c b b b b b b b b b b b c c c b b b b b b b b e e e e e c c c b b e e c c c c c c b b b b b b b b b b b b c e e e e e e e e e e e e e c c c c c c c c c e e e e e c b b b c e e b b b c c b
    f f f f f f f f f f f 8 8 8 8 8 8 8 8 c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f c c c c c c c f f f f f f f f f f f c c c b b b b b b b b c c c b b b b b b b b b b c c c c c b b e b b b c e e e e e e e c c c c e c f f c c b b b b b b b b b b b b b c c e e e e c c e c c f f f f c c c c c c c c e e e e e e c b b e e e b b b b b b
    f f f f f f f f f f f f 8 8 8 8 8 c c c c c c c c c b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f c c b b c c c c c f f f f f f f f f e e c c c b b b b b b c c e e e e c c c c b c c c c c c c b b c b b b c e e e e e e e c c c c c f f c c c b b b b b b b b b b b b c c c e e e e e c f f f f f f f f c c c c c c c c e e e e e e e e e e c b b b b c c
    f f f f f f f f f f f 8 8 8 8 c c c c c c c c c c b b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f c c e c c f f c c b b b b c c c c c c c c c f f f f c e e e e c c c c c c c e e e e e e e e e e c c c c b b b b b b b b b e e e e e e e e c c c c c f f c c c b b b b b b b b b b e e e e e e e e e c e f f f f f f f f f f f c c c c c c c c e e e e e e e c b b b b c c
    f f f f f f f f f 8 8 8 8 c c c c c c c c c c c c b b b b c c c f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f c c f c c c c c b b c c c c c c c c c c c c c c c e e e e e e e e e e e e f f f e e e e e e e e c b b b b b b b b b c e e e e e e e c c c c c c f c e e e e b b b e e e e e e e e e e e e e e e c e f f f f f f f f f f f f f f f f f f f f e e e e e e e c b b c c c
    8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c b b b c c e e f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f c c c c c e e e c c c c c b b c c c c c c c e e e e e e e e e e e e f f f f f f f f c e c b b b b b b b b b b c e e e e e e e e c b b b c c c c e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e c
    8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c b b b c e e e f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f c c b b c e e e c c c c c c b c e e e c c e e f f f f f f e e e e e f f f f f f f f c c c b b b b b b b b b b c c e e e e e e c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f f f f c c c c c c c f f f f f f f f f f f f e e e e e e e e e c
    c c c c c c c c c c c c c c c c c c c c c c b b b c e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c e e c c c c c c c c e e e e e e e f f f f f f f c c c c c f f f f f f e c b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b e e e e e e e e e e e e e e e e e c e e f f f f f f e e e e e c c c c f f f f f f f f f f f f e e e e e e e e
    b b c c c c c c c c c c c b b b c c c c c c c c c e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f c c c c c c c c e c c c c c c c c c c e e e e e e f f f f f f c c c c c e f f c c c e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c e e e e e e e e e e e e e e e e e e f f f f f f f f c e e e e e c e e c f f f f f f f f f f c c e e e e e e
    b b b b c c c c c c c b b b b b b c c c c c c c e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b c c c c c c c b b c c e e c c c c c c c c c c c c e e e e e e f f f e c e c c c c c e f c e e c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e f f f f f c e e e e e e e e c c c e c c f f f f f f f f f c c e e e e e
    c c c c b b c c c c b b b b b b b c c c c c e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b c c c c c b b b b b c c c c c c c c c c c b b b c c e e e e c e f f f c c c c c c e e c e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c e e e e e e e e e e e e e e e e e e f f f f e c c c c b b b b b b b c c c c c c c f f f f f f f c c c e e e e
    e e c c c c c c c c c b b b c c c c c c c e e e e e f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f c c c c c c c b b b b b b b b b b b c c c c c c c c c c c c e e e e e e f f f e c c c e e e e e e c c c c c c b b b b b b b b b b b b c c c b b b b b b b b b b b b b b b c c c e c e e e e e e c c c c e e f f f f e c b b b b b b b b b b b b b b b b c c c c f f f f f f e c c e e e
    e e e e c c c c c c c c c e e e e e e e e e e e e f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f c c e e c b b b b b b b b b b b b b b c c c c c c c c c c e e e e e c f f f c c c c e e e e e e c c c c c c b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b c e e e c b b b b e e f f f c c b b b b b b b b b b b b b b b b b b b c c c c f f f f f e e e e e
    f e e e e e c c c c c e e e e e e e e e e e e c f f f f f f f f f f f c c c b c c c f f f f f f f f f f f f f f f f f f c c e c c b b b b b b b b b b c c c c c c b b c c c c c c e e e e c c f f f f e c e e e e e e e e e c c c c b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f f c b b b b b b b b b b b b b b b b b b b b b b c c e f f f f e e e e e
    f f f f e e e e c c e e e e e e e e e e e e c f f f f f f f f f f f c c c b c c c c f f f f f f f f f f f f f f f f f f c c c c c b b b b b b b b b c e e e e c b b b b b c c c c c c c e e c f f f f c e e e e e e e e e e e e c c b b b b b b b b b b b b b b b c e e e b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f c c b b b b b b b b b b b b b b b b b b b b b b b c c e f f f e e e e e
    f f f f f e e e e e e e e e e e e e e e e c f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c b b b b b b b b b b b c e e e e b b b b b b b c c c c c c c c c c f f f f e c e e e e e e e e e c c c b b e e b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c f f c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c f f c e e e e
    f f f f f e e e e e e e e e e e e e e c c f f f f f f f f f f f f c c c c c c e c f f f f f f f f f f f f f f f c c c b b b b b b b b b b b b b b b c e e e e b b b b b b b c c c c c c c c c c c f f f c e e e e e e e e c c c c c c e e e e b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f e e e e
    f f f f f e e e e e e e e e e e c c c c f f f f f f f f f f f f c c c c c c e e f f f f f f f f f f f f f f f f c c b b b b b b b b b b b b b b b b c e c e c c b b b b b b c c c b b b c c c c c f f f e e e e e e e e e c b b b b c e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c f f f c e e e
    f f f f f e e e e e e c c c c c c f f f f f f f f f f f f f f f c c c c c c e c f f f f f f f f f f f f f f f c c c b b b b b b b b b b b b b b b b c c f f c c c c c c c c b b b b b b b c c c c c f f e e e e e e e e c c b b b b b c e e e e e e b b c e e b b b b b b b b b b b b b b b b b b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f f c e e e
    f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f c c c c c c e e c f f f f f f f f f f f f f f f c c c b b b b c c c c b b b b b b b b c c f f e c e e e e c c c b b b b b c c c c c c f f c e c c c e e e c c c b b b c c e e e e e e c c c e c b b b b b b b b b b b b b b b b b b b b b c c e e e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c f f c c c c b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c e e e f f f f f f f f f f f f f f c c c b b b b c c c c c c b b b b b b c c c f f e c e e e e e c c c c c c c c c c e c c f f c c c c e e e e e c c c c c e e e e e e e e c b c c c b b b b b b b b b b b b b b b b b b b b c e e e e e e e c b b b b b b b b b b b b b b e e e e e e e e e e e b b b b b b b b b b c c c c c b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e c c c c c c c f f f f f f f f f f f f c c c b b b b c c c c c c c c c c c c c c c f f c c e e e e c c b c c c c e c c e e e c f c c e e e e e e c e e e e e e e e c c e e e e c c c c c c c c b b b b b c c e e b e e e c c c e e e e e e e e e c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e b b b b b b c c b b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e c c c c c c c c c c f f f f f f f f f f f c c c c b b c c c c c c c c c c c c c c c c c c c c c e e e c b b c c c c c c c c e c c c e e e e e e c c e f c e e e e e c c c c e e e e c c c c c c c c c c c c c e e e e e e e e e e e e e e f f f e e e c b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e c c c c c c c c c c f f f f f f f f f f c c c c b b c c c c c c c c c c c c c c c c c c b b c c c c c b b b c c c c c c c c c c c e e e e e c c f f f f f f e e e c c c c c e e e e c b b b b b c e e c c c e e e e e e e e e e e e e f f f f f e e e e e e b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e e e e e e e e c c c f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c b b b b c c c c b b b b b b b b b b b c c c e e e e c c f f f f f f f f e c c c c c c e e e c c b b b b b c c c c c c c c c e e e e e e e e c f f f f f f f e e e e e b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e c f f f f f f f f f c c c c c c c c c c c c c e e e e e e c c c c c c b c c c c c b b b b b b b b b b b b c c e e c c f f f f f f f f f f e c c c b c c c c c c b b b b b b c c c c c c c c c c c e e c c c c c c e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e c c c c c c c c f f f f f f f f f f c e c c c c c c c c c c c e e e e e e c c c c c c c c c c c c c b b b b b b b b b b b c c c e f f f f f f f f f f f f c c c c b b c c c c b b b b b c c c c e c c c b b b b b c e c c c c e e e e f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e c c c f f f f f f f f f f f f f f f f f e e e c c c c c c c c c e e e e e e c c c c c c c c c c c c c b c c c b c c c b b c c c c e f f f f f f f f f f f f c c c b b b b c c b b b b c c c c c e e c c b b b b b b b c e c e e e c c e f f e e c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c c c f f f f f f f f f f f f f f f f f f e e e e c e e c c c c e e e e e e e c c c c c c c c c c c c c c c c e e e e c c c c c c e c f f f f f f f f f f f f c c b b b b c c c c c c c c c c c c e c c b b b b b b b b c e e e e e e e e f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c b b b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e c c c c c f f f f f f f f f f f f f f c c c c e e e e e c c c c c e e e e e e e e c c c c c c c e e e e e c c c e e e e c c c c c c c f f f f f f f f f f f f f c c c c c c c c c e e e e e e e e e e c b b b b b b b b b b c c c c c c e f f e e c c c c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c b
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f c c c b c c c c c c c c c c c c e e e e e e e e e e e c c c e e e e e e c c c c e e c c e e e c c c f f f f f f f f f c c f e c c c c c c c e e e e e e e e e e e c c b b b b b b b b b c c f f f f f c e e e c c b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c
    f f f f f f f c c c c c f f f f f f f f f f f f f f f f f c c c c c b b b c c f f f f f f f f f f c c b b b b b b b b b c c c c c e e e e e e e c c c c e e c c e e e e e e c c c c e e e e e e e c c c c f f f f f f c c c c c c c c e c e e e e e e e e e e e e e e c c b b b b b b b b b c c f f f f f c e e c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c
    f f f f f f e e e c c e c f f f f f f f f f f f f f f f f f c e c b b b b c c f f f f f f f f f f c c c b b b b b b b b c c c c c e e e e e e e c c c c c c c c e e e e e e c c c c e e e e e e c c c c c c f f f f c c c c c c c c e e e e e e e e e f f f c e e e c c b b b b b b b b b b c e f f f f f c c c c b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c
    f f f f c e e e e e e c c c f f f f f f f f f f f f f f f c c c b b b b b b c c f f f f f f f f c c c c c c b b b b b c c c c c c e e e e e e c c c c c c c c c c e e e c c c c c c c e e e e e c c c c c c c f f f c c b c c c c c e e e e e e e e f f f f e e e e c c b b b b b b b b b c c f f f f f f c e c c e b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c e e e e e e
    f f f f e e e e e e e c c c c f f f f f f f f f f f f f c c c b b b b b b b c c f f f f f f c c c c c c c c b c c c c c c c c c e e e e e e c c f e c c c b c c c e e c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c e e c c c f f f f f f f e e e e c c c b b b b c c c c c c f f f f f f c e e e e e e e e b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c e e e e e e
    f f f e e e e e e e e e e c c c f f f f f f f f f f f c c c c b b b b b b b b c c f f f f c c c b b b b b b b c c c e e e e e c c e e e e c c f f e c b b b c c c c e e c e e e e c c c c c c c e c b b b c c c c c c c c c c c c c c f f f f f f f f f f f e e e e e c c c b b c c e c c c c f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c e e e e e e e
    f f c e e e e e e e e e e c c c f f f f f f f f f c c c c c c b b b b b b b c c c f f f f c c c c b b b b b b b c c e e e e e c c c e e e c f f f c c b b b c c c c e e c c e e e c c c c c c c c c c c c c c c c c c c c c c b b c c c f f f f f f f f f f f e e e e e e e e e e e e e c c c f f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c e f f f f f e e
    f f e e e e e e e e e e e e c c c f f f c c c c c c c c c c b b b b b b b b c c c f f f f c c c c b b b b b b b c c e e e e c c c c c c e c f f f c c c c c c c c c c c c c e e c c c c c c c c c c c c c c c c c c c e e e b b b b c c f f f c c f f f f f f c e e e e e e e e e e e c c c c c f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c f f f f f c e
    f f e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c b b b b b c c c c f f f c c c c c b b b b b b b b c c e e c c b b b c c c c f f f c c c c c c c c c c e c c e e c c c c c c e e c c c c c c c c c c c e e c b b b b c c c c c e e c f f f f f c c c e e e e e e e e e e e e e e c f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c e
    f f e e e e e c c c c c e e e e c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b b b b c c c c c c b c c c c c c c f f c c c c c c c c c c e f c c e e e c e e e e c c c c c c c c c c c c c c b b b b b c c c c c e e c f f f f c e c c f c c c e e e e e e e e e e e f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c e c e e e e e c c c c b b c c
    f f f f f f f c f c c c c e e e e c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b b b c c c c c c b b b c c c c c c f f f e e e e e e e e e c f f f c c e e e e e c c c c b b b b c b b b b b b b b b b b b c c c c c c e c f f f c e e c c f f f f c c c c c c c c c c f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c e e e c c b b b b b b b b b
    f f f f f f f f f f f c c c c c c c c c f c c c c c c c c c c c b b b b c c c c c c c b b b c c c c b b b b b c c c c c b b b b c c c c c c c f f f f c e e e e e c c f f f f f f c e e e c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c f f f e e e e e e c f f c f f f f f c c f f f f f f f c c b b b b b b e e e e e e e e e e e e e e c c c c c c c c c c c c e e e b b b b b b b b b b b b
    f f f f f f f f f f f f f c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b c c c c c c b b b b c c c c c e e f f f f f f f f f f f f f f f f f f f c c c c b b b b b b b b c c b b b b b b b b b b b b b b b b b c c c c e c c c c c e e e c f f f f f f f f f f f f f f f c c b b b b b b b c e e e e e e e e e e c c c c c c c f f f f f c e e c b b b b b b b b b b b b b
    f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f c c c c e e c e c c c c c c c c c c b b b b b c c c c c c c b b c c c c e e e e f f f f f f f f f f f f f f f f f f f c c c b b c c c c c c c c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c e e c f f f f f f f f f f f f f c c b b b b b b b b b b e e e e e e e e e c c f f f f f f f f f f e e c b b b b b b b b b b b b b b
    f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f e c c c c f f c c c c b b b c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c c c c c c e c c e e e e e c c b b b b b b b b b b b b c c c c c c b b b b b b c c c c c e f f f f f f f f f f f f f e c b b b b b b b b b b b e e e e e e e c f f f f f f f f f f f c e c b b b b b b b b b b b b b b b
    c f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f c e e e e e c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c e e e e e e e e e e c c c b b b b b b b b b b c c c c b b b b b b b b b c c c c c c c f f f f f f f f f f f f e e c b b b b b b b b b b b c e e e f f f f f f f f f f f f f f e c b b b b b b b b b b b b b b b b
    c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e e c c c c c e e e c c c c c c c c c e c c c c c c f f f f f f f f f f f f f f f f f f f c c c c e e e c e f f f f f f c c c b c c b b b c c c c c c c b b b b b b c c c c c c c c c e e c f f f f f f f f f f f e e e e b b b b b b b b b b b c e e f f f f f f f f f f f f f e c b b b b b b b b b b b b b c c c c
    c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c e e e e e e e c c c c c c c e c c c c c c e e e e e e c f f f f f f f f f f f f f f f f f f f f f f c c c e e e c f f f f f f f f c c b b b c c c c c c c c c c b b b b c c c c c c e e c e e e e e e c f f f f f f f f f c e e e e e b b b b b b b b b b c c e f f f f f f f f f f f f f e c b b b b b b b b b c c c c c c c e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c e e e c e e e e e e e c c c c c c c c c c c c e e c c f f f f f f f f f f f f f f f f f f f f f f f c e e e e c f f f f f f f f f f c b b b c e e e c c c c c c b b b c c e e e e e e e e e e e e e e c f f f f f f f f f e e e e e e e e b b b b b b b b b c e f f f f f f f f f f f f f e c c b b b b b c c c c c c c c e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c e c c c e e e e e e c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c e c c f f f c e e c c f f c c b b b c c c c b b b c c c c c c e e e e e e e e e e e e e e c c c c f f f f f f f f c e e e e e e e e e b b b b b b b c c c f f f f f f f f f f f f e c c c c c c c c c c c c e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c e c f f c e e e e e c c c c c c c c c c f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f c c f f f c e e e e c c f c c c c c c c c c b b c c e e e e e e e e e e e e e e e e e e c c f f f f f f f f f f f c e e e e e e e e e e e c b b b b c c c f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c e c f c c c c e c c c c c c c f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c c c c c c c c f f c c c c e e e e e e e e e e e e e e e e c c e c f f f f f f f f f f f f f f c e e e e e e e e e e e e e b b b c c c f f f f f f f f f f c e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c e e e e c c c c c c c c c f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e c c c f f f f f f f f f e e e e e e e e e e e e e e e e c e c c f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e c c c f f f f f f f f c e e e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c e c e e c f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e c c f f f f f f f f f f c e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e c f f f f f f c e e e e e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c b b b b b c c c c c c c c c c c f f f f f c e c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c c f f f f f f f f f f c e e e e e c c c c e e e e e c f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e f f f f f e e c e e e e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c b b b b b b c c c c c c f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e c f f f f f f f f f f f c e e b b b b b b b b b b c c e c f f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e c f f f c e c c c e e e e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f c c c c c c c c c b b b b b b c c c c f f f f f f f f f f f c c e e e c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c f f f f c c c f f f f f f f f f f f c e c c b b b b b b b b b b b b c e e f f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e f f c e e c c e e e e e e e e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f c c c c c c c f f f f f f f c c c c c c c c c b b b b b b c c c c f f f f f f f f f f f c c c c e e e e e e f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f c f f f f f f f f f f f f c c b b b b b b b b b b b b b b b c c c f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e c c e e e e e e e e e e c c c e e e e e e e e e e e e e e c c
    f f f f f f f f f f f f f f f c c e c c c f f f f f f f f f f c c c c c c c c c c b c c c c c f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f e c e b b b b c c b b b b b b b b b b b c c c f f f f f f f f f f f f f f f f f f f c e e e e e e e e e e e e e c c e e e e e e e e e e c f f c e e e e e e e e e e e e e c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e c c c c c c c c c c f f f f f f f f f f f f f f f f c f c c c c f f f f f f f f f f f f f f f c c c c c c f f f e c c f f f f f f f f f f f f f f f f f e e e e e e e e e e c c c b b b b b b b b c c c f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e f c e e e e e e e e c c f f f f f f c e e e e e e e e e e e c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f c c f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e c c c c c b b b b b c c f f f f f f f f f f f f f f f f f f f f f c c e e e e e e f f f f f c c e e e e e e f f f f f f f f c c e e e e e e e e e e e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f f c c e e e e e c c c e
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e e e e e c f f f c c c f f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f c c c c c c c f f f f c c c c f f f f f f f f f f f f f f c e e e e e e e e e e e e e e e e e e e c c c c c c e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f c c c c c c c c f f f c b b c c c f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f c c c c c c f f c c b b b c c c c c c f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f c c c c c b c c c c c c f f f f f f c c c c c c c c c b b b b b c c c c c c c f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f c b b b b c c f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f c c c c c c c c b c c c c c c c c f f f f f c c c c c c c c c b b b c c c b b b b c c f f f f f f f f e c f f f f f f c c e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f c b b b c c c c f f f f f c c c f f f c c c c e f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f c c e c c c b b b b b b b c c c b b b c c f f f f f f f f f f f f f f f f f f f f f c c c c c c c e e e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f c c b b c c c f f f f f f c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c b b b b c b b b b c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f c c c c c e f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c b b b c c b b b b c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c b b b c c b b b b c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f c c c c c c c c b b b c c c c c c c c c c c c f f f f f f c c c c c c c b b b b c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f c c c c c c c c c e c f f f f c c c c c c c c b b b c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f c c c c c c c c c e f f f f f c c c c c c c c b b c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f c c c c c c c c c c c c c c c c c e c f f f f f c c c c c c c c c c c c c c f f f f c c c f f f f f f f f f f c c b c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f c c c c c c c c c c c c c c c c c e e f f f f f f c c c c c c c c e c c c c c f f f c c c c f f f c c f f f f f c b b b c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f c c c c c c c c c c c c c c c c c c e c f f f f f c c c c c c c c f f f f f f f f f f c c c c c f f c c c f f f c c b c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f c c c c c c e e e c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c f f f f c c c c c c c c b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c f f f f c c c c e e e e c c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c f f f f f f f f c c c f f f c c b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f c e e e e e f f c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f c c c f f f c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f c c c c c c c c b b c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f c c c c c b b b b b c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c e e e e c c c c c f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f c c c c c b b b c c c c f f f f f f f f f f f f f c c f c c c e e e c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c e e e e e e e e c c c c c c c c c f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c e e e e e e c c c c c c c c c c c c c c c f f f f f f
    f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e c c c e e e e e f f f f f f f f f f f f f f f f f f f f f f c c c c e e e e c c c c c c c c c c c c c c c c c c c c c f f f f
    f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e f f f f c c c f f f f f f f f f f f f f f f f f c c c e e e c c c c c c c c c c c c c c c c c c c c c c c c f f f
    f f f f f f f f f f f f f f f f f f f c c b c c c c c c c c f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f c e e e e c c c c c c c c c c c c c c c c c c c c c c c c c c c f
    f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f f c c e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f c c c c f f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f c c e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f f f f f f f f f f f c b b c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f
`)
game.splash("Welcome to SHARKBITE", "Eat the fish (A)")
addCharacters()
info.setLife(5)
// our main game loop
game.onUpdate(function () {
    // keep sharky on left of screen
    sharky.x = 135
    // if small fish passes sharky
    if (smallfish.x > 160) {
        smallfish.setPosition(0, Math.randomRange(0, 100))
        smallfish.setVelocity(50, 0)
    }
    // if big fish passes sharky
    if (bigfish.x > 160) {
        bigfish.setPosition(0, Math.randomRange(0, 100))
        bigfish.setVelocity(50, 0)
    }
    // if baddie passes sharky
    if (baddie.x > 160) {
        baddie.setPosition(0, Math.randomRange(0, 120))
        baddie.setVelocity(100, 0)
    }
    // keep sharky from going off top
    if (sharky.y < 10) {
        sharky.y = 10
    }
    // keep sharky from going off bottom
    if (sharky.y > 110) {
        sharky.y = 110
    }
})
