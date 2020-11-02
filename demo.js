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
let operador1;
let operador2;
function operadores(){
     operador1 = parseInt(document.getElementById("operador1").value);
     operador2 = parseInt(document.getElementById("operador2").value);
}

//Eventos
document.getElementById("boton-suma").addEventListener("click",function(){
    operadores();
    operacionSuma(operador1,operador2);
    
}); 
document.getElementById("boton-resta").addEventListener("click",function(){
    operadores();
    operacionResta(operador1,operador2);
});
document.getElementById("boton-multiplicar").addEventListener("click",function(){
    operadores();
    operacionMultiplicar(operador1,operador2);
});
document.getElementById("boton-dividir").addEventListener("click", function(){
    operadores();
    operacionDividir(operador1,operador2);
});