

const salariosCol = colombia.map(
    function (person){
        return person.salary
    }
)

const salariColSort = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
);


function esPar(number){
    return (number % 2 === 0)
     
}

function calcularPromedio (lista){
    let sumaNumeros =  0;

    for (let i = 0; i < lista.length; i++) {
         sumaNumeros = sumaNumeros + lista[i];
    
    }
    
    const promedio = sumaNumeros / lista.length

    return promedio;
}

function mediaSalario(lista){
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)){
        const personMitad1 = lista[mitad - 1] 
        const personMitad2= lista[mitad]  
        
        const mediana = calcularPromedio([personMitad1, personMitad2]);
        return mediana;
    }else{
        const personMitad = lista[mitad]
        return personMitad;
    }

}

console.log(mediaSalario(salariColSort))