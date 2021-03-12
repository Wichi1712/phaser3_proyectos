class Snake {
    constructor(scene) {
        this.scene = scene;
        this.timmer = 0;
        this.dir = 'left';
        this.oldDir = 'right';
        this.gameOver = false;

        this.body = Array.from([...Array(3)]).map((x, i) =>
            this.scene.physics.add.image(150 + (i * 10), 100, 'body').setOrigin(0)
        );

        // Colisiones
        this.body.map((x, i) => {
            if (i >= 1) {
                this.scene.physics.add.collider(this.body[0], x, () => this.choca());
            }
        });

    }

    choca() {
        this.gameOver = true;
        this.scene.scene.start('Gameover');
    }
    crece() {
        const obj = this.body[this.body.length - 1];
        const newObj = this.scene.physics.add.image(obj.x, obj.y, 'body').setOrigin(0);
        this.body.push(newObj);
        this.scene.physics.add.collider(this.body[0], obj, () => this.choca());
    }
    changeDir(dir) {
        if (this.oldDir != dir) {
            this.dir = dir;
        }
    }
    update(time) {
        if (time > this.timmer) {
            if (!this.gameOver) {

                for (let i = this.body.length - 1; i > 0; --i) {
                    this.body[i].x = this.body[i - 1].x;
                    this.body[i].y = this.body[i - 1].y;

                    this.body[this.body.length - 1 - i].x = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].x, 0, this.scene.sys.game.config.width);
                    this.body[this.body.length - 1 - i].y = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].y, 20, this.scene.sys.game.config.height);


                }

                switch (this.dir) {
                    case 'left':
                        this.oldDir = 'right';
                        this.body[0].x -= 10;
                        break;
                    case 'right':
                        this.oldDir = 'left';
                        this.body[0].x += 10;
                        break;
                    case 'up':
                        this.oldDir = 'down';
                        this.body[0].y -= 10;
                        break;
                    case 'down':
                        this.oldDir = 'up';
                        this.body[0].y += 10;
                        break;

                }
            }

            this.timmer = time + 150;
        }

    }
}

export default Snake;