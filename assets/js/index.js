let altura = document.getElementById("conteinAltura");

let peso = document.getElementById("conteinPeso");

let resultado = document.getElementById("containResultado");

let botoon = document.getElementById("boton");

function calculadora(suAltura, suPeso) {
    resultadoCorporal = suAltura / (suPeso * suPeso);
    return resultadoCorporal;
};
console.log(calculadora);
botoon.addEventListener("click", e =>{
    let totalCorporal;
    peso = peso.value;
    altura = altura.value;

    totalCorporal = calculadora(peso,altura);
    resultado.innerHTML = totalCorporal;
})
