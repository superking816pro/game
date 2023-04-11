namespace SpriteKind {
    export const object2 = SpriteKind.create()
    export const feedingperson = SpriteKind.create()
    export const feedingperson2 = SpriteKind.create()
    export const feedingperson3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless1, effects.spray, 500)
        foodforhomeless1.x += -53
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite4, otherSprite4) {
    foodforhomeless1.follow(player1, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`right-animation`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson3, function (sprite3, otherSprite3) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless3, effects.spray, 500)
        foodforhomeless1.x += -53
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`leftt-animation`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson2, function (sprite2, otherSprite2) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless2, effects.spray, 500)
        foodforhomeless1.x += -53
        sprites.destroy(foodforhomeless1, effects.spray, 500)
    }
})
sprites.onOverlap(foodforthehomeless2, SpriteKind.Food, function (sprite, otherSprite) {
    foodforthehomeless2.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    foodforthehomeless3.follow(player1, 100)
})
let homeless3: Sprite = null
let homeless2: Sprite = null
let homeless1: Sprite = null
let foodforthehomeless3: Sprite = null
let foodforthehomeless2 = 0
let foodforhomeless1: Sprite = null
let player1: Sprite = null
story.startCutscene(function () {
    game.showLongText("would you like to be a humanitarian volunteer?", DialogLayout.Bottom)
    story.showPlayerChoices("Yes", "no")
    if (story.checkLastAnswer("Yes")) {
        game.showLongText("let's go ", DialogLayout.Bottom)
    } else {
        game.showLongText("you didn't want to be be a volunteer", DialogLayout.Bottom)
        game.gameOver(false)
    }
})
scene.setBackgroundImage(assets.image`bg`)
scene.cameraFollowSprite(player1)
info.setLife(1)
let table = sprites.create(assets.image`table`, SpriteKind.object2)
table.y += 10
table.x += -60
foodforhomeless1 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforhomeless1.x += -53
foodforthehomeless2 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforthehomeless2.x += -53
foodforthehomeless3 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforthehomeless3.x += -53
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
player1.y += 10
scene.cameraFollowSprite(player1)
player1.sayText("hello volunteer, I am you.", 5000, true)
pause(5000)
player1.sayText("today, you must complete giving food to the poor homeless people before time runs out.", 5000, true)
pause(5000)
player1.sayText("quick, let's begin", 5000, true)
pause(5000)
player1.sayText("they are waiting for us", 2000, true)
homeless1 = sprites.create(assets.image`homeless1`, SpriteKind.feedingperson)
homeless1.x += 55
homeless1.y += 10
homeless2 = sprites.create(assets.image`homeless2`, SpriteKind.feedingperson2)
homeless2.x += 75
homeless2.y += 10
homeless3 = sprites.create(assets.image`homeless3`, SpriteKind.feedingperson3)
homeless3.x += 35
homeless3.y += 10
game.onUpdate(function () {
    player1.x += controller.dx()
})
