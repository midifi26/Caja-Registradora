/* Disponemos en la caja del siguiente dinero distribuido de la siguiente manera: 234,27 € (información que se debe cargar en un array)

    - Billetes de 500€: 0
    - Billetes de 200€: 0
    - Billetes de 100€: 0
    - Billetes de 50€: 1 
    - Billetes de 20€: 4
    - Billetes de 10€: 8
    - Billetes de 5€: 2
    - Monedas de 2€: 5
    - Monedas de 1€: 4
    - Monedas de 0.50€: 0
    - Monedas de 0.20€: 0
    - Monedas de 0.10€: 1
    - Monedas de 0.05€: 2
    - Monedas de 0.02€: 3
    - Monedas de 0.01€: 1

El programa obtiene un precio de artículo y un importe pagado desglosado (se deben conocer las cantidades entregadas de todos los billetes y monedas) y responderá si no hay cambio, si está justo o si se devuelve cambio, de nuevo con el desglose que debe ser lo más óptimo (es decir, si puedo devolver un billete de 20, no devuelvo 2 de 10, por ejemplo).

Debemos mostrar al final el desglose del cambio y el nuevo estado de la caja*/
const denominaciones=[500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02,0.01];
const enCaja={
    500:0,
    200:0,
    100:0,
    50:1,
    20:4,
    10:8,
    5:2,
    2:5,
    1:4,
    0.5:0,
    0.2:0,
    0.1:1,
    0.05:2,
    0.02:3,
    0.01:1
};
const totalEnCaja=234.27;

function calculaTotal(dinero){
    let total= 0;
    for(let valor of denominaciones){
        total+=valor * (dinero[valor] || 0);
    }
    return parseFloat(total.toFixed(2));
};

console.log(calculaTotal(enCaja));

const precio = 25.8;

const pagoCliente = {
    500:0,
    200:0,
    100:0,
    50:0,
    20:1,
    10:1,
    5:0,
    2:0,
    1:0,
    0.5:0,
    0.2:0,
    0.1:0,
    0.05:0,
    0.02:0,
    0.01:0
}

const totalPagado = calculaTotal(pagoCliente);
const cambio = parseFloat((totalPagado - precio).toFixed(2));


function calcularCambio(cambio,caja){
    let cambioRestante = cambio;
    const cambioDevuelto = {};

    for(let i = 0; i < denominaciones.length; i++){
        const valor = denominaciones[i];
        const disponible = caja[valor] || 0;
        const cantidadNecesaria = Math.floor(cambioRestante / valor);
        const cantidadUsar = Math.min(cantidadNecesaria, disponible);

        if(cantidadUsar > 0){
            cambioDevuelto[valor] = cantidadUsar;
            cambioRestante = parseFloat((cambioRestante-cantidadUsar*valor).toFixed(2));
        }

        
        }
        if(cambioDevuelto > 0){
            return null;
        
    }
    return cambioDevuelto;
};

const cambioOptimo = calcularCambio(cambio, enCaja);

console.log('En caja'+ calculaTotal(enCaja));
console.log('Precio'+ precio);
console.log('Pagado'+ totalPagado);


if(cambioOptimo === null){
    console.log('No hay cambio');
}else{
    console.log('El cambio es: ');
    console.table(cambioOptimo);
    console.log('=' + cambio);
};


function actualizarCaja(caja,pagoCliente, cambioDevuelto){
    //Sumar el dinero a caja
    for(let valor of denominaciones){
        const cantidad = pagoCliente[valor] || 0;
        caja[valor]= (caja[valor] || 0) + cantidad;
    }

    //Sacar el dinero de la caja
    for(let valor of denominaciones){
        const cantidad = cambioDevuelto[valor]|| 0;
        caja[valor]= (caja[valor] || 0) - cantidad;
    };
}

if(cambioOptimo){
    actualizarCaja(enCaja, pagoCliente,cambioOptimo);
    console.log('En la caja: ')
    console.table(enCaja);
    console.log('=' + calculaTotal(enCaja));
}


//Interfaz de lectura
/*const leer = require('readline');

const ir = leer.createInterface({
    input: process.stadin,
    output: process.stdout
});

function pedirPrecio(callback){
    ir.question('Ingrese el precio; ', (input)=>{
        const precio = parseFloat(input);
        if(isNaN(precio)|| precio <= 0){
        console.log('Precio no valido...');
        return pedirPrecio(callback);
    }
    callback(precio);
    });
};

function pedirPagoCliente(callback){
    const pagoCliente = {};
    let i = 0;
    function preguntar(){
        if(i<denominaciones.length){
            const valor = denominaciones[i];
            ir.question(`Billetes de: $(valor): `, (input => {
                const cantidad = parseInt(input);
                pagoCliente[valor] = isNaN(cantidad) ? 0: cantidad;
                i++
                preguntar()
            }
            ))
        }else{
            callback(pagoCliente);
        }
    }
    preguntar();
}*/