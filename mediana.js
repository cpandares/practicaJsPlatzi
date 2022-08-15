const lista = [ 
    100,
    200,
    500,
    
    10000
];



function calcularPromedio (lista){
    let sumaNumeros =  0;

    for (let i = 0; i < lista.length; i++) {
         sumaNumeros = sumaNumeros + lista[i];
    
    }
    
    const promedio = sumaNumeros / lista.length

    return promedio;
}


const mitadLista = parseInt(lista.length / 2)

function esPar(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista -1];
    const elemento2 = lista[mitadLista];

    const promedioLocal = calcularPromedio([ elemento1, elemento2 ]);
    mediana = promedioLocal;

}else{
    mediana = lista[mitadLista]
}