/* Codico de un cuadrado */
console.group("Cuadrados")
/* const ladoCuadrado = 5 ; */

function perimetroCuadrado(lado){
    return lado * 4
} 
function areaCuadrado(lado){
    return lado * lado;
} 

/* console.warn("El perimetro de cuadrado es: " + perimetroCuadrado + " cm")
console.warn("El area del cuadrado es: " + areaCuadrado + " cm2 ") */

console.groupEnd()
/* Codico de un cuadrado */
console.log("Triangulo")
/* const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5  */

function perimetroTriangulo(lado1, lado2 , base){
    return lado1 + lado2 + base
} 

function areaTriangulo(base, altura){
    return ( base * altura ) / 2
} 

/* 
console.warn("EL lado 1 del triangulo mide " + lado1 + " cm El lado 2 mide " + lado2 + " cm la base " + base + " cm la altura es de " + altura + " cm")

console.warn("El perimetro del triangulo es " + perimetroTriangulo + " cm Y el area es " + areaTriangulo + " cm") */

console.groupEnd()

/* codigo del circulo */
console.group("Circulo")
/* const radio = 5; */

function diametro(radio){
    return radio * 2
} 
const PI = Math.PI

function perimetroCirculo(radio){

    const diametroCirculo = diametro(radio)

    return diametroCirculo * PI
}

function areaCirculo(radio){
   return PI * (radio * radio)
} 


function  calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado").value;
    const perometroCuadrado = perimetroCuadrado(input)
    alert("El valor del perimetro es: " + perometroCuadrado + " cm")
}

function  calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado").value;
    const areadeMiCuadrado = areaCuadrado(input)
    alert("El valor del perimetro es: " + areadeMiCuadrado + " cm")
}

function calcularAreaTriangulo(){
   
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    const areaDeMiTriangulo = areaTriangulo(base, altura)
    alert("El valor del area del triangulo es: " + areaDeMiTriangulo + " cm")

}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const perimetroDeMiTriangulo = perimetroTriangulo(lado1,lado2,base)

    alert("El valor del perimetro del triangulo es: " + perimetroDeMiTriangulo + " cm")
}