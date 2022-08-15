

const lista = [
    1 ,2 ,3,2,1,4,2,3,4,5,6,53,2
];

const listCount = {}

lista.map(
    function(elemento){
        if(listCount[elemento]){
            listCount[elemento] += 1
        }else{
            listCount[elemento] = 1
        }
    }
)


const listaArray = Object.entries(listCount).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1]
    }
)


const moda = listaArray[listaArray.length - 1]

/* 
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5


*/