//Crear las funciones
function operacionSuma(number1,number2){
    const suma = number1 + number2;
    document.getElementById("resultado").innerHTML = suma;
}
function operacionResta(number1 , number2){
    const resta = number1 - number2;
    document.getElementById("resultado").innerHTML = resta;
}
function operacionMultiplicar(number1,number2){
    const multiplicar = number1 * number2;
    document.getElementById("resultado").innerHTML = multiplicar;
}
function operacionDividir(number1,number2){
    const dividir = number1 / number2;
    document.getElementById("resultado").innerHTML = dividir;
}


//console.log(7/2)

//Eventos
document.getElementById("boton-suma").addEventListener("click",function(){
    let operador1 = parseInt (document.getElementById("operador1").value);
    let operador2 = parseInt (document.getElementById("operador2").value);
    operacionSuma(operador1,operador2);
}); 
document.getElementById("boton-resta").addEventListener("click",function(){
    let operador1 = document.getElementById("operador1").value;
    let operador2 = document.getElementById("operador2").value;
    operacionResta(operador1,operador2);
});
document.getElementById("boton-multiplicar").addEventListener("click",function(){
    let operador1 =document.getElementById("operador1").value;
    let operador2 = document.getElementById("operador2").value;
    operacionMultiplicar(operador1,operador2);
});
document.getElementById("boton-dividir").addEventListener("click", function(){
    let operador1 = document.getElementById("operador1").value;
    let operador2 = document.getElementById("operador2").value;
    operacionDividir(operador1,operador2)
});