function ValidaDNI(dni) {
    const StringValida = /\d{2}\.\d{3}\.\d{3}-[A-Z]$/
    return StringValida.test(dni)
}
function ValidaNombreYApellido(nombre) {
    const StringValida = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
    return StringValida.test(nombre)
}
function ValidaEmail(email) {
    const StringValida = /\S+@\S+\.\S+/
    return StringValida.test(email)
}
function ValidaWeb(web) {
    const StringValida = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    return StringValida.test(web)
}
function ValidaPass(pass) {
    if (pass.length >= 8 && pass.length <= 10) {
        return true
    }
    else {
        return false
    }
}

function CreaPersona(dni, nombre, apellido, email, web, pass) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.web = web;
    this.passw = pass;
}

function Validacion() {
    const dni = document.getElementById("dni").value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const web = document.getElementById("web").value
    const pass = document.getElementById("pass").value

    if (!ValidaDNI(dni)) {
        console.log("El DNI no es válido")
    }
    else {
        if (!ValidaNombreYApellido(nombre)) {
            console.log("El nombre no es válido")
        }
        else {
            if (!ValidaNombreYApellido(apellido)) {
                console.log("El apellido no es válido")
            }
            else {
                if (!ValidaEmail(email)) {
                    console.log("El email no es válido")
                }
                else {
                    if (!ValidaWeb(web)) {
                        console.log("La dirección web no es válida")
                    }
                    else {
                        if (!ValidaPass(pass)) {
                            console.log("La contraseña debe tener entre 8 y 10 caracteres")
                        }
                        else {
                            newRegistro = new CreaPersona(dni, nombre, apellido, email, web, pass)
                        }
                    }
                }
            }
        }
    }
}
