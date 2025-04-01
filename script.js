// Disponemos en la caja del siguiente dinero distribuido de la siguiente manera: 234,27 € (información que se debe cargar en un array)

//     - Billetes de 500€: 0
//     - Billetes de 200€: 0
//     - Billetes de 100€: 0
//     - Billetes de 50€: 1 
//     - Billetes de 20€: 4
//     - Billetes de 10€: 8
//     - Billetes de 5€: 2
//     - Monedas de 2€: 5
//     - Monedas de 1€: 4
//     - Monedas de 0.50€: 0
//     - Monedas de 0.20€: 0
//     - Monedas de 0.10€: 1
//     - Monedas de 0.05€: 2
//     - Monedas de 0.02€: 3
//     - Monedas de 0.01€: 1

const totalCambio=[
    {billete: 500, enCaja: 0},
    {billete: 200, enCaja: 0},
    {billete: 100, enCaja: 0},
    {billete: 50, enCaja: 1},
    {billete: 20, enCaja: 4},
    {billete: 10, enCaja:8},
    {billete: 5, enCaja:2},
    {moneda: 2, enCaja:5},
    {moneda: 1, enCaja:4},
    {moneda: 0.50, enCaja:0},
    {moneda: 0.20, enCaja:0},
    {moneda: 0.10, enCaja:1},
    {moneda: 0.05, enCaja:2},
    {moneda: 0.02, enCaja:3},
    {moneda: 0.01, enCaja:1}
];
const totalEnCaja=234.27;

function devolverImporte(precio,importe){
    let regresarDinero= importe - precio;
    if(importe < precio){
        console.log("El monto es insuficiente")
    } else if(importe>=precio){
    console.log(`El monto a devolver es de ${regresarDinero.toFixed(2)}euros.`);
}
};
devolverImporte(78.94,80);


