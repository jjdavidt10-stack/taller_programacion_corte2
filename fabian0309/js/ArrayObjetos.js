let vehiculos = [
  {
    marca: "Chevrolet",
    cc: 1400,
    modelo: "2022",
    referencia: "optra",
    valor: "$45'000.000",
    km: 60000,
    almacen: {
      div: "Cra1-#20-58",
      tel: "6076819111",
      correo: "correo@gmail.com",
    },
    propietario: {
      nombre: "ola",
      tel: "123456789",
    },
    docsVehiculo: {
      soat: true,
      rtm: false,
      impuestos: true,
      comparendos: true,
    },
  },
  { modelo: "2024",
    marca: "audi",
    cc: 2000,
    ref:"q3",
    valor:"80'000.000",
    km:30000,
    almacen:{
        dir:"Cra 27 Av G.Valencia",
        tel:"6076585050",
        correo:"audi@correo.com"
    },
    propietario:{
        nombre:"Karen",
        telefono:"3245111156",
    },
    docsVehiculo:{
        soat: true,
        rtm: true,
        impuestos: true,
        comparendos: false,

    }

  },
];
console.log(
  "Mi novia me ama :",
  vehiculos[0].docsVehiculo.impuestos
);
console.log(
    "El propietario del vehiculo es :", vehiculos[1].propietario.nombre
)