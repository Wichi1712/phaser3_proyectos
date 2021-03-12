import Menu from './scenes/Menu.js';
import Play from './scenes/Play.js';
import UI from './scenes/UI.js';
import Gameover from './scenes/Gameover.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "Snake",
    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#f9ca24",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 0
            }
        }
    },
    scene: [Bootloader, Menu, Play, UI, Gameover]
};

new Phaser.Game(config);