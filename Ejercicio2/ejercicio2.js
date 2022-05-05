function Ordenar(){
    var array = [];
    array = document.getElementById("cadena").value.split(" ");
        
    while(array.length>=1){
        Mayor(array);
    }
}

function Mayor(array){
    var mayor = array[0].length;
    var indice;
    for(var i=0;i<array.length;i++){
        if(array[i].length>=mayor){
            mayor=array[i].length;
            indice = i;
        }
    }
    console.log(array[indice])
    array.splice(indice,1);
}