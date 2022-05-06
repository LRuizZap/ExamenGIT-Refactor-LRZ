function Grupo(codigo, horario) {
     var grupo = new Object();
     grupo.codigo = codigo;
     grupo.horario = horario;
     grupo.alumnos = [];

     grupo.matricular = function matricular(dni, nombre, nota) {
          this.alumnos.push(CreaAlumno(dni, nombre, nota));
     };

     function CreaAlumno(dni, nombre, nota) {
          var alumno = new Object();
          alumno.dni = dni;
          alumno.nombre = nombre;
          alumno.nota = nota;
          return alumno;
     }

     grupo.NumeroAlumnos = function Alumnos() {
          var num = this.alumnos.length;
          return num;
     };

     grupo.media = function Media() {
          var suma = 0;
          for (let i = 0; i < this.alumnos.length; i++) {
               suma += this.alumnos[i].nota;
          }
          return suma / this.alumnos.length;
     };

     return grupo;
}

var asir1 = Grupo("ASIR1", "tarde");

asir1.matricular("2345", "pepe", 7.8);
asir1.matricular("4545", "juan", 9.8);
