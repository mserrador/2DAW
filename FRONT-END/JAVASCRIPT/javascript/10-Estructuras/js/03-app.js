//switch case. funciones dentro del switch

const metodoPago='tarjeta';
switch(metodoPago) {
    case 'efectivo':
            console.log(`Pagaste con ${metodoPago}`);
            break; //detenemos la ejecución del switch
    case 'cheque':
            console.log(`Pagaste con ${metodoPago}`);
            break;
    case 'tarjeta':
            pagarTarjeta();
            break;
    default:
            console.log('Aún no has seleccionado un método de pago');
            break;
}

function pagarTarjeta(){
    console.log('Pagando con tarjeta..');
}

