import Calculadora from './scenes/Calculadora.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "calculadora",
    width: 360,
    height: 540,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#95afc0",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, Calculadora]
};

new Phaser.Game(config);