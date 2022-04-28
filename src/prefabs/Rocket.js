// -----------------------------------------------------------------------------------------
// Autumn Moulios
// Last Updated: 4/14/2022
//
// Original Rocket Patrol Clone code by Nathan Altice
// -----------------------------------------------------------------------------------------

// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      this.wizard = new Phaser.GameObjects.Sprite(scene, x, y, 'rocket', frame)
  
      // add object to existing scene
      scene.add.existing(this);
      scene.add.existing(this.wizard);
      this.play('ice');
      this.isFiring = false;
      this.moveSpeed = 5;
      this.visible = false;

      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
                this.wizard.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
                this.wizard.x += this.moveSpeed;
            }
        }

        if (game.input.mousePointer.distance > 0 &&
            game.input.mousePointer.x >= borderUISize + this.width && 
            game.input.mousePointer.x <= game.config.width - borderUISize - this.width) {
            this.wizard.x = game.input.mousePointer.x;
            if (!this.isFiring)
            this.x = game.input.mousePointer.x;
        }

        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) || game.input.mousePointer.leftButtonDown() && 
        !this.isFiring) {
            this.isFiring = true;
            this.visible = true;
            this.play('ice');
            this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderPadding) {
            this.reset();
        }
    }

    reset() {
        this.isFiring = false;
        this.visible = false;
        this.y = game.config.height - borderUISize - borderPadding - 25;
        this.x = this.wizard.x;
    }
  }