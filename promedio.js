

/* const lista1 =[
    100,
    200,
    300,
    500
] */



function calcularPromedio (lista){
    let sumaNumeros =  0;

    for (let i = 0; i < lista.length; i++) {
         sumaNumeros = sumaNumeros + lista[i];
    
    }
    
    const promedio = sumaNumeros / lista.length

    return promedio;
}

