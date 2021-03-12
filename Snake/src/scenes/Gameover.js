
class Gameover extends Phaser.Scene {
    constructor() {
        super({key: 'Gameover'});
    }
    
    preload() {
        this.cameras.main.fadeIn(300);
    }

    create() {
        this.scene.stop('UI');
        this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2 - 30, 'pixel', 'GAME OVER ', 20, 1).setOrigin(0.5);
        const event = setTimeout(() => {this.scene.start('Menu')}, 5000);
        this.input.on('pointerdown', () => {
            clearTimeout(event);
            this.scene.start('Menu')
        });
    }

    update() {

    }
}

export default Gameover;
