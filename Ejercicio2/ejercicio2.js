function Ordenar() {

    const array = document.getElementById("cadena").value.split(" ")

    while (array.length >= 1) {
        Mayor(array)
    }
}

function Mayor(array) {

    let indice
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= array[0].length) {
            array[0].length = array[i].length
            indice = i
        }
    }
    console.log(array[indice])
    array.splice(indice, 1)
}