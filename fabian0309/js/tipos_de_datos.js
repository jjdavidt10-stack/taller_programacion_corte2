let data =
    {
        nombre:"Ricardo Medina",
        rol:"docente",
        estadoVinculacion: true,
        fechaIngreso:"2026-02-03",
        cantAsignaturas:7,
        oficina:{
            edificio:"c",
            ext:2721,
            sec:"Adriana V.",
            nombre:"Coord. Teleco",
            coordinador:{
                nombre:"R.Gonzales",
                ext:"2720",
                correo:"coord@correo.uts.edu.co",
            }
        }
    }
   console.log(data.oficina.coordinador.ext)