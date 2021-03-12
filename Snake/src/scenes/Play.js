import Food from '../obj/Food.js';
import Snake from '../obj/Snake.js';

class Play extends Phaser.Scene {
    constructor() {
        super({key: 'Play'});
    }
    
    preload() {
        this.cameras.main.fadeIn(300);
    }

    create() {
        this.scene.launch('UI');
        const UI = this.scene.get('UI');

        this.food = new Food(this);
        this.snake = new Snake(this);

        // Controls
        this.input.keyboard.on('keydown_RIGHT', () => {
            this.snake.changeDir('right');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.snake.changeDir('left');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.snake.changeDir('up');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.snake.changeDir('down');
        });

        // Colision con la comida
        this.physics.add.collider(this.snake.body[0], this.food.food, () => {
            this.food.crearComida();
            this.snake.crece();
            UI.addPoint()
        });

        // Agregar puntos
                
    }

    update(time) {
        this.snake.update(time);
    }
}

export default Play;
