function Valida1(dni){
    const res = /\d{2}\.\d{3}\.\d{3}-[A-Z]$/;
    return res.test(dni);
}
function Valida2(nombre){
  const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
  return res.test(nombre);
}
function Valida3(apellido){
    const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
    return res.test(apellido);
  }
function Valida4(email)
{
    const res = /\S+@\S+\.\S+/;
    return res.test(email);
}
function Valida5(web){
    const res = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    return res.test(web)
}
function Valida6(pass)
{
    if(pass.length>=8 && pass.length <=10)
    {
        return true;
    }
    else
    {
        return false;
    }
}
 
function creaObjeto(dni, nombre, apellido, email, web, pass){
    this.dni = dni;
    this.nombre = nombre;
    this.apellido=apellido;
    this.email = email;
    this.web = web;
    this.passw = pass;
}

function Validacion(){
    const dni = document.getElementById("dni").value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const web = document.getElementById("web").value
    const pass = document.getElementById("pass").value
 
    if(!Valida1(dni))
    {
        console.log("El DNI no es válido")
    }
    else
    {
        if(!Valida2(nombre))
        {
            console.log("El nombre no es válido")
        }
        else
        {
            if(!Valida3(apellido))
            {
                console.log("El apellido no es válido")
            }
            else
            {
                if(!Valida4(email))
                {
                    console.log("El email no es válido")
                }
                else
                {
                    if(!Valida5(web))
                    {
                        console.log("La dirección web no es válida")
                    }
                    else
                    {
                        if(!Valida6(pass))
                        {
                            console.log("La contraseña debe tener entre 8 y 10 caracteres")
                        }
                        else
                        {
                            newRegistro = new creaObjeto(dni, nombre, apellido, email, web, pass);
                        }
                    }
                }
            }
        }
    }
}
