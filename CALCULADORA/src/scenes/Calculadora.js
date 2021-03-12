class Calculadora extends Phaser.Scene {
    constructor() {
        super({
            key: 'Calculadora'
        });
    }

    preload() {

    }

    create() {
        this.add.image(0, 0, 'display').setOrigin(0);
        let contador = '';
        this.operationActual = {};
        this.igualdad = false;
        this.operacionActiva = false;

        this.displayText = this.add.dynamicBitmapText(35, 30, 'pixel2', Phaser.Utils.String.Pad('0', 9, ' ', 1), 35, 1)
            .setTint(0xffffff)

        const group = this.add.group({
            key: 'btn',
            frame: [
                'btn_0', 'btn_1', 'btn_16', 'btn_3',
                'btn_4', 'btn_5', 'btn_6', 'btn_7',
                'btn_8', 'btn_9', 'btn_10', 'btn_11',
                'btn_12', 'btn_13', 'btn_14', 'btn_15',
                'btn_16', 'btn_17', 'btn_18', 'btn_19',
            ]
        });
        Phaser.Actions.GridAlign(group.getChildren(), {
            width: 4,
            height: 5,
            cellWidth: 90,
            cellHeight: 90,
            x: 44,
            y: 134,
        });

        // Hora de animar los botones!!!
        this.input.setHitArea(group.getChildren());
        group.getChildren().map((x) => {
            x.on('pointerdown', () => {
                let newTexture = x.scene.textures.getFrame('btn', `${x.frame.name.replace('-1', '')}-1`);
                x.frame = newTexture;
            });
            x.on('pointerup', () => {
                x.frame = x.scene.textures.getFrame('btn', x.frame.name.replace('-1', ''));
                const button = x.frame.name;
                if (this.igualdad) {
                    contador = '';
                    this.igualdad = false;
                } else {
                    if(this.operacionActiva) {
                        contador = `${logica(button)}`;
                        this.operacionActiva = false;
                    } else {
                        contador += (contador + logica(button)).length >= 10 ? '' : logica(button);
                    }
                }

                switch (button) {
                    // Reset
                    case 'btn_0':
                        contador = '';
                        break;
                        // Atrás
                    case 'btn_1':
                        contador = removeLast(this.displayText.text.trim());
                        break;
                        // División
                    case 'btn_3':
                        this.operacionActiva = true;
                        this.operationActual = division(this.displayText.text.trim());
                        break;
                        // Multiplicación
                    case 'btn_7':
                        this.operacionActiva = true;
                        this.operationActual = multiplicacion(this.displayText.text.trim());
                        break;
                        // Resta
                    case 'btn_11':
                        this.operacionActiva = true;
                        this.operationActual = resta(this.displayText.text.trim());
                        break;
                        // Suma
                    case 'btn_15':
                        this.operacionActiva = true;
                        this.operationActual = suma(this.displayText.text.trim());
                        break;
                        // Igual
                    case 'btn_19':
                        this.igualdad = true;
                        contador = (`${(clear(this.operationActual(this.displayText.text.trim())))}`.length >= 7) ? 'OVERFLOW :(' : 
                        clear(this.operationActual(this.displayText.text.trim()));
                        break;
                }

                this.displayText.setText(Phaser.Utils.String.Pad((contador === '') ? '0' : contador, 9, ' ', 1));
            });
        });
    }

}

export default Calculadora;