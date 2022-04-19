// -----------------------------------------------------------------------------------------
// Autumn Moulios
// Last Updated: 4/14/2022 4:16 PM
//
// Original Rocket Patrol Clone code by Nathan Altice
//
// Mods Included:
// - Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// - Implement mouse control for player movement and mouse click to fire (20)
// - Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
//
// Credits:
// https://freesound.org/people/EminYILDIRIM/sounds/536925/
// User EminYILDRIM on freesound.org for a bit of ice sfx used as a layer in Ice.wav
// -----------------------------------------------------------------------------------------

let config = {
    type: Phaser.CANVAS,
    width: 670,
    height: 480,
    scene: [ Menu, Play ]
}

// instantiate the game
let game = new Phaser.Game(config);

// set UI size
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, mouseClick;