class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('body');
        this.load.image('food');
        this.load.image('tablero');

        this.load.json('fontJSON', 'font/font.json');
        this.load.image('font', 'font/font.png');

        this.load.image('logo_gamma'); 
        this.load.on('complete', () => {
            const fontBordersJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this, fontBordersJSON));

            this.scene.start('Menu');
        });
    }

}
export default Bootloader;