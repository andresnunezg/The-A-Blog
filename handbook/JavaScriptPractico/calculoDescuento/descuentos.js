const cupones = [
    {nombre: "QWERTY1234", descuento: 15},
    {nombre: "POIUYT4629", descuento: 10},
    {nombre: "FHSCAJ1415", descuento: 20},
    {nombre: "DCVFEQ5212", descuento: 5}
];

function validarEntradas(){
    const precio = Number(document.getElementById("in-precio").value);
    const descuento = Number(document.getElementById("in-descuento").value);
    let cuponUsuario = String(document.getElementById("in-cupon").value);
    let descuentoCupon = 0;
    let validar = false;
    const buscarCupon = function(cupon){
        return cupon.nombre === cuponUsuario;
    }
    const validarCupon = cupones.find(buscarCupon);
    if(!validarCupon){
        alert(`Cupon ${cuponUsuario} invalido`);
        document.getElementById("in-cupon").value = "";
    }else {
        descuentoCupon = Number(validarCupon.descuento);
    }
    if (precio < 0 || descuento < 0 || descuento > 100){
        document.getElementById("in-descuento").value = undefined;
        document.getElementById("in-precio").value = undefined;
        alert("Verifique las entradas");
        validar = false;
    }else {
        validar = true;
    }
    return [validar, precio, descuento, descuentoCupon];
}

function calcularDescuento(){
    const arrayValidar = validarEntradas();
    const entradasValidas = arrayValidar[0]
    if (entradasValidas === true){
        const precio = arrayValidar[1];
        const descuento = arrayValidar[2];
        const cupon = arrayValidar[3];
        console.log(cupon);
        const ahorro = precio * ((descuento + cupon) / 100);
        const nuevoPrecio = precio - ahorro;
        document.getElementById("saving").innerText = "$" + String(ahorro);
        document.getElementById("new-price").innerText = "$" + String(nuevoPrecio);
    }
}