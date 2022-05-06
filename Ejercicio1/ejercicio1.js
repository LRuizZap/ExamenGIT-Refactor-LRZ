function CalcularSueldo() {

    const sueldo = parseInt(document.getElementById('sueldo').value)
    const antiguedad = parseInt(document.getElementById('antiguedad').value)

    NuevoSueldo(sueldo, antiguedad)
}

function NuevoSueldo(sueldo, antiguedad) {
    if (sueldo < 1000) {
        if (antiguedad > 10) {
            resultado.innerHTML = "El sueldo es " + (sueldo * 1.20) + "€"
        }
        else {
            if (antiguedad > 5) {
                resultado.innerHTML = "El sueldo es " + (sueldo * 1.15) + "€"
            }
            else {
                resultado.innerHTML = "El sueldo es " + (sueldo * 1.10) + "€"
            }
        }
    }
    else {
        if (antiguedad > 10) {
            resultado.innerHTML = "El sueldo es " + (sueldo * 1.10) + "€"
        }
        else {
            if (antiguedad > 5) {
                resultado.innerHTML = "El sueldo es " + (sueldo * 1.05) + "€"
            }
            else {
                resultado.innerHTML = "El sueldo es " + (sueldo * 1.01) + "€"
            }
        }
    }
}
