const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
const pf = (x) => parseFloat(x);
const precision = (x) => x.toPrecision(8);

const division = (a) => (b) => pf(a) / pf(b);
const multiplicacion = (a) => (b) => pf(a) * pf(b);
const suma = (a) => (b) => pf(a) + pf(b);
const resta = (a) => (b) => pf(a) - pf(b);

const removeLast = (x) => x.substring(0, x.length - 1);

const clear = compose(
    pf,
    precision
);


const logica = (x) => {
    let out = 0;
    switch (x) {
        case 'btn_4':
            out = 7;
            break;
        case 'btn_5':
            out = 8;
            break;
        case 'btn_6':
            out = 9;
            break;
        case 'btn_8':
            out = 4;
            break;
        case 'btn_9':
            out = 5;
            break;
        case 'btn_10':
            out = 6;
            break;
        case 'btn_12':
            out = 1;
            break;
        case 'btn_13':
            out = 2;
            break;
        case 'btn_14':
            out = 3;
            break;
        case 'btn_17':
            out = 0;
            break;
        case 'btn_18':
            out = '.';
            break;
        default:
            out = '';
            break;
    }
    return out;
}