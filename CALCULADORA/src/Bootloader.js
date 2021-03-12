class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';
        this.load.atlas('btn', 'btn/btn.png', 'btn/btn_atlas.json');
        this.load.image('display', 'display.png');

        this.load.json('fontJSON', 'fonts/font.json');
        this.load.image('font', 'fonts/font.png');

        this.load.on('complete', () => {

            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel2', Phaser.GameObjects.RetroFont.Parse(this, fontJSON));


            this.scene.start('Calculadora');
        });
    }

}
export default Bootloader;