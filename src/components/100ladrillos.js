function diagdif(matriz){
    //verificar que la matriz no este vacía
    if(matriz.length==0){
        return "no hay nada";
    }
    //diferencia entre diagonales
    var diag = 0;

    for(let i = 0; i < matriz.length; i++){
        diag = diag + matriz[i][i] - matriz[i][matriz.length-1-i];
    }
    return diag > 0 ? diag: diag*-1
}


function hulk(n){
    var result = "I hate"
    for(let i = 1; i < n; i++){
        if(i%2==0){
            //impares para hate
            result = result + " that I hate"
        }else{
            //pares para love
            result = result + " that I love"
        }
    }
    return result + " it";
}

//"no hay nada"
matriz1=[]
//0
matriz2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//15
matriz3=[
    [4, 76, 23, 3],
    [32, 3, 3, 7],
    [0, 1, 13, 2],
    [1, 2, 122, 3]
]

//2
matriz4=[
    [1,2],
    [2,1]
]

console.log(diagdif(matriz1));
console.log(diagdif(matriz2));
console.log(diagdif(matriz3));
console.log(diagdif(matriz4));

//I hate it
console.log(hulk(1));
//I hate that I love it
console.log(hulk(2));
//I hate that I love that I hate that I love that I hate it
console.log(hulk(5));
