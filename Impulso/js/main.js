var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var plataforma;
var player;
var nave;
var cursors;

function preload (){
    this.load.image("fondo1", "img/fondo.png");
    this.load.image("ballKing", "img/ballKing.png");
    this.load.image("flor", "img/flor.png");
    this.load.image("montana", "img/montana.png");
    this.load.spritesheet('nave', 
        'img/naveEspacial.png',
        { frameWidth: 128, frameHeight: 32 }
    );
}


function create (){
    this.add.image(320,405,"fondo1");

    //Se crea un grupo estatico llamado "plataforma"----------------------
    plataforma = this.physics.add.staticGroup();

    plataforma.create(100,100,"flor").setScale(0.1).refreshBody();
    plataforma.create(100,250,"flor").setScale(0.2).refreshBody();
    plataforma.create(100,450,"flor").setScale(0.3).refreshBody();
    plataforma.create(100,800,"flor").setScale(2.5,0.1).refreshBody();

    //-------------------------------------------------------------------

    player = this.physics.add.sprite(400, 5, 'ballKing');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('ballKing', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'ballKing', frame: 0 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('ballKing', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1
    });

    //-------------------------------------------------------------------
    nave = this.physics.add.sprite(250, 50, 'nave');

    nave.setBounce(0.2);
    nave.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'nave', frame: 2 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('nave', { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, plataforma);
    this.physics.add.collider(nave, plataforma);

    cursors = this.input.keyboard.createCursorKeys();

}

function update (){

    if (cursors.left.isDown){
        player.setVelocityX(-160);
        player.anims.play('left', true);
        console.load("left is Down");
    }
    else if (cursors.right.isDown){
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else{
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-330);
    }
}