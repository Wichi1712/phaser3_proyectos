
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu'});
    }
    
    preload() {
        this.cameras.main.fadeIn(300);//Opacidad de pantalla
    }

    create() {
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2 - 50, 'logo_gamma');
        this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2 - 10, 'pixel', 'SNAKE GAMMA', 18, 1).setOrigin(0.5);
        const pressButton = this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2+15, 'pixel', 'PRESS ANY BUTTON DIRECTION', 8, 1).setOrigin(0.5);
        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            duration: 500,
            ease: (x) => x < 0.5 ? 0 : 1,
            yoyo: true,
            repeat: -1 
        });
        this.input.keyboard.on('keydown_RIGHT', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.scene.start('Play');
        });

    }

}

export default Menu;
