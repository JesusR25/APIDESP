console.log('Inicio del proceso');
//Servicios
const serviciosWS=require('./serviciosWS');
const Servicio=require('./Clases/Servicio');
//Productos
const productosWS=require('./productosWS');
const Producto=require('./Clases/Producto');
//Empleados
const empleadosWS=require('./empleadosWS');
const Empleado=require('./Clases/Empleado');
//Mecanicos
const mecanicosWS=require('./mecanicosWS');
const Mecanico=require('./Clases/Mecanico');
//Clientes
const clientesWS=require('./clientesWS');
const Cliente=require('./Clases/Cliente');
//Vehiculos
const vehiculosWS=require('./vehiculosWS');
const Vehiculo=require('./Clases/Vehiculo');
//Ventas
const ventasWS=require('./ventasWS');
const Venta=require('./Clases/Venta');
//Reparaciones
const reparacionesWS=require('./reparacionesWS');
const Reparacion=require('./Clases/Reparacion');
//Detalles
const detallesWS=require('./detallesWS');
const Detalle=require('./Clases/Detalle');
//
var express =require('express');
var bodyP= require('body-parser');
var cors= require('cors');

var app=express();
var router=express.Router();

app.use(bodyP.urlencoded({extended: true}));
app.use(bodyP.json());
app.use(cors());
app.use('/API',router);


//Ruta para obtener los Servicios
router.route('/servicios').get((request,response)=>{
    serviciosWS.getServicios().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener un Servicio
router.route('/servicios/consultar/:IDServicio').get((request,response)=>{
    serviciosWS.getServicio(request.params.IDServicio).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar un Servicio
router.route('/servicios/agregar').post((request,response)=>{
    let Servicio={...request.body}
    serviciosWS.newServicio(Servicio).then(result=>{
        response.json('Se ha registrado correctamente el servicio')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un Servicio
router.route('/servicios/actualizar').put((request,response)=>{
    let Servicio={...request.body}
    serviciosWS.upServicio(Servicio).then(result=>{
        response.json('Se ha actualizado correctamente el servicio')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un Servicio
router.route('/servicios/eliminar/:IDServicio').get((request,response)=>{
    serviciosWS.delServicio(request.params.IDServicio).then(result=>{
        response.json('Se ha elimnado correctamente el servicio')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/servicios/ids').get((request,response)=>{
    serviciosWS.getIDServicios().then(result=>{
        response.json(result[0])
    })
});




/////RUTAS DE PRODUCTOS

//Ruta para obtener todos los Productos
router.route('/productos').get((request,response)=>{
    productosWS.getProductos().then(result=>{
        response.json(result[0])
    })
});
//RUTA PARA OBTENER PRODUCTOSA DE FORMA ASC POR PRECIO
router.route('/productosAsc').get((request,response)=>{
    productosWS.getProductosAsc().then(result=>{
        response.json(result[0])
    })
});

//RUTA PARA OBTENER PRODUCTOSA DE FORMA ASC POR PRECIO
router.route('/productosDesc').get((request,response)=>{
    productosWS.getProductosDesc().then(result=>{
        response.json(result[0])
    })
});
//RUTA PARA OBTENER PRODUCTOSA DE FORMA DESC EN NOMBRE
router.route('/productosAlfa').get((request,response)=>{
    productosWS.getProductosAlfa().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener un Producto
router.route('/productos/consultar/:IDProducto').get((request,response)=>{
    productosWS.getProducto(request.params.IDProducto).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar un Producto
router.route('/productos/agregar').post((request,response)=>{
    let Producto={...request.body}
    productosWS.newProducto(Producto).then(result=>{
        response.json('Se ha registrado correctamente el producto')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un producto
router.route('/productos/actualizar').put((request,response)=>{
    let Producto={...request.body}
    productosWS.upProducto(Producto).then(result=>{
        response.json('Se ha actualizado correctamente el producto')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un producto
router.route('/productos/eliminar/:IDProducto').get((request,response)=>{
    productosWS.delProducto(request.params.IDProducto).then(result=>{
        response.json('Se ha elimnado correctamente el producto')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/productos/idp').get((request,response)=>{
    productosWS.getIDProductos().then(result=>{
        response.json(result[0])
    })
});


//RUTAS DE EMPLEADOS

//Ruta para obtener los Empleados
router.route('/empleados').get((request,response)=>{
    empleadosWS.getEmpleados().then(result=>{
        response.json(result[0])
    })
});


router.route('/empleados/login/:Username').get((request, response) => {
    empleadosWS.getEmpleadoUser(request.params.Username).then(result => {
        response.json(result[0])
    })
});

router.route('/empleados/loginc/:Contrasena').get((request, response) => {
    empleadosWS.getEmpleadoCont(request.params.Contrasena).then(result => {
        response.json(result[0])
    })
});

//Ruta para obtener un empleado
router.route('/empleados/consultar/:IDEmpleado').get((request,response)=>{
    empleadosWS.getEmpleado(request.params.IDEmpleado).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar un empleado
router.route('/empleados/agregar').post((request,response)=>{
    let Empleado={...request.body}
    empleadosWS.newEmpleado(Empleado).then(result=>{
        response.json('Se ha registrado correctamente el empleado')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un empleado
router.route('/empleados/actualizar').put((request,response)=>{
    let Empleado={...request.body}
    empleadosWS.upEmpleado(Empleado).then(result=>{
        response.json('Se ha actualizado correctamente el empleado')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un empleado
router.route('/empleados/eliminar/:IDEmpleado').get((request,response)=>{
    empleadosWS.delEmpleado(request.params.IDEmpleado).then(result=>{
        response.json('Se ha elimnado correctamente el empleado')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/empleados/ide').get((request,response)=>{
    empleadosWS.getIDEmpleados().then(result=>{
        response.json(result[0])
    })
});
//RUTAS DE MECANICOS

//Ruta para obtener los MECANICOS
router.route('/mecanicos').get((request,response)=>{
    mecanicosWS.getMecanicos().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener un MECANICO
router.route('/mecanicos/consultar/:IDMecanico').get((request,response)=>{
    mecanicosWS.getMecanico(request.params.IDMecanico).then(result=>{
        response.json(result[0])
    })
});


router.route('/mecanicos/login/:Username').get((request, response) => {
    mecanicosWS.getMecanicoUser(request.params.Username).then(result => {
        response.json(result[0])
    })
});

router.route('/mecanicos/loginc/:Contrasena').get((request, response) => {
    mecanicosWS.getMecanicoCont(request.params.Contrasena).then(result => {
        response.json(result[0])
    })
});

//Ruta para agregar un MECANICO
router.route('/mecanicos/agregar').post((request,response)=>{
    let Mecanico={...request.body}
    mecanicosWS.newMecanico(Mecanico).then(result=>{
        response.json('Se ha registrado correctamente el mecanico')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un MECANICO
router.route('/mecanicos/actualizar').put((request,response)=>{
    let Mecanico={...request.body}
    mecanicosWS.upMecanico(Mecanico).then(result=>{
        response.json('Se ha actualizado correctamente el mecanico')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un MECANICO
router.route('/mecanicos/eliminar/:IDMecanico').get((request,response)=>{
    mecanicosWS.delMecanico(request.params.IDMecanico).then(result=>{
        response.json('Se ha elimnado correctamente el mecanico')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/mecanicos/idm').get((request,response)=>{
    mecanicosWS.getIDMecanicos().then(result=>{
        response.json(result[0])
    })
});

//RUTAS DE CLIENTES
router.route('/ventas/last').get((request,response)=>{
    ventasWS.getIDlast().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener los clientes
router.route('/clientes').get((request,response)=>{
    clientesWS.getClientes().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener un cliente
router.route('/clientes/consultar/:IDCliente').get((request,response)=>{
    clientesWS.getCliente(request.params.IDCliente).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar un cliente
router.route('/clientes/agregar').post((request,response)=>{
    let Cliente={...request.body}
    clientesWS.newCliente(Cliente).then(result=>{
        response.json('Se ha registrado correctamente el cliente')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un cliente
router.route('/clientes/actualizar').put((request,response)=>{
    let Cliente={...request.body}
    clientesWS.upCliente(Cliente).then(result=>{
        response.json('Se ha actualizado correctamente el cliente')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un cliente
router.route('/clientes/eliminar/:IDCliente').get((request,response)=>{
    clientesWS.delCliente(request.params.IDCliente).then(result=>{
        response.json('Se ha elimnado correctamente el Cliente')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/clientes/idc').get((request,response)=>{
    clientesWS.getIDClientes().then(result=>{
        response.json(result[0])
    })
});

//CAMBIOS EN CLASE INDEX

//RUTA PARA CLIENTELOGIN -------- NUEVA APP
router.route('/userLogin').post((request,response)=>{
    let Cliente = {...request.body}
    clientesWS.getClienteMov(Cliente).then(result=>{
        response.json(result[0][0])
    })
});

//RUTA PARA CREAR UN CLIENTE ------- NUEVA APP
router.route('/createUser').post((request,response)=>{
    let Cliente={...request.body}
    clientesWS.newCliente(Cliente).then(result=>{
        response.json('Se ha registrado correctamente el cliente')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});


//RUTA PARA OBTENER UN CLIENTE MEDIANTE SU ID POR METODO POST
router.route('/cliente').post((request,response)=>{
    let Cliente = {...request.body}
    clientesWS.getClienteInf(Cliente).then(result=>{
        response.json(result[0][0])
    })
});


// RUTAS PARA VEHICULOS

//Ruta para obtener los vehiculos
router.route('/vehiculos').get((request,response)=>{
    vehiculosWS.getVehiculos().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener un vehiculo
router.route('/vehiculos/consultar/:IDVehiculo').get((request,response)=>{
    vehiculosWS.getVehiculo(request.params.IDVehiculo).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar un vehiculo
router.route('/vehiculos/agregar').post((request,response)=>{
    let Vehiculo={...request.body}
    vehiculosWS.newVehiculo(Vehiculo).then(result=>{
        response.json('Se ha registrado correctamente el vehiculo')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un vehiculo
router.route('/vehiculos/actualizar').put((request,response)=>{
    let Vehiculo={...request.body}
    vehiculosWS.upVehiculo(Vehiculo).then(result=>{
        response.json('Se ha actualizado correctamente el vehiculo')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un vehiculo
router.route('/vehiculos/eliminar/:IDVehiculo').get((request,response)=>{
    vehiculosWS.delVehiculo(request.params.IDVehiculo).then(result=>{
        response.json('Se ha elimnado correctamente el vehiculo')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/vehiculos/idv').get((request,response)=>{
    vehiculosWS.getIDVehiculos().then(result=>{
        response.json(result[0])
    })
});
// RUTAS PARA VENTAS

//Ruta para obtener las ventas
router.route('/ventas').get((request,response)=>{
    ventasWS.getVentas().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener una venta
router.route('/ventas/consultar/:IDVenta').get((request,response)=>{
    ventasWS.getVenta(request.params.IDVenta).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar una venta
router.route('/ventas/agregar').post((request,response)=>{
    let Venta={...request.body}
    ventasWS.newVenta(Venta).then(result=>{
        response.json('Se ha registrado correctamente la venta')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar una venta
router.route('/ventas/actualizar').put((request,response)=>{
    let Venta={...request.body}
    ventasWS.upVenta(Venta).then(result=>{
        response.json('Se ha actualizado correctamente la venta')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar una venta
router.route('/ventas/eliminar/:IDVenta').get((request,response)=>{
    ventasWS.delVenta(request.params.IDVenta).then(result=>{
        response.json('Se ha elimnado correctamente la venta')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

router.route('/ventas/idv').get((request,response)=>{
    ventasWS.getIDVentas().then(result=>{
        response.json(result[0])
    })
});


// RUTAS PARA REPARACIONES

//Ruta para obtener las reparaciones
router.route('/reparaciones').get((request,response)=>{
    reparacionesWS.getReparaciones().then(result=>{
        response.json(result[0])
    })
});



//RUTA PARA OBTENER TODOS LAS REPARACIONES DE UN VEHICULO
router.route('/reparacionesVehi').post((request,response)=>{
    let Reparacion = {...request.body}
    reparacionesWS.getReparacioneVehiculo(Reparacion).then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener una reparacion
router.route('/reparaciones/consultar/:IDReparacion').get((request,response)=>{
    reparacionesWS.getReparacion(request.params.IDReparacion).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar una reparacion
router.route('/reparaciones/agregar').post((request,response)=>{
    let Reparacion={...request.body}
    reparacionesWS.newReparacion(Reparacion).then(result=>{
        response.json('Se ha registrado correctamente la reparacion')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar una reparacion
router.route('/reparaciones/actualizar').put((request,response)=>{
    let Reparacion={...request.body}
    reparacionesWS.upReparacion(Reparacion).then(result=>{
        response.json('Se ha actualizado correctamente la reparacion')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar una reparacion
router.route('/reparaciones/eliminar/:IDReparacion').get((request,response)=>{
    reparacionesWS.delReparacion(request.params.IDReparacion).then(result=>{
        response.json('Se ha elimnado correctamente la reparacion')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});


//RUTAS PARA APP
//OBTENER SERVICIO POR TOKEN
router.route('/reparaciones/consultarMov').post((request,response)=>{
    let Reparacion = {...request.body}
    reparacionesWS.getReparacion(Reparacion.IDReparacion).then(result=>{
        response.json(result[0][0])
    })
});

//OBTENER VEHICULO MEDIANTE ID
router.route('/vehiculo/consultarMov').post((request,response)=>{
    let Vehiculo = {...request.body}
    vehiculosWS.getVehiculo(Vehiculo.IDVehiculo).then(result=>{
        response.json(result[0][0])
    })
});

//OBTENER VEHICULOS MEDIANTE IDCLIENTE
router.route('/vehiculo/consultarVehiMov').post((request,response)=>{
    let Vehiculo = {...request.body}
    vehiculosWS.getVehiculoCliente(Vehiculo.IDCliente).then(result=>{
        response.json(result[0])
    })
});




// RUTAS PARA DETALLES

//Ruta para obtener los detalles
router.route('/detalles').get((request,response)=>{
    detallesWS.getDetalles().then(result=>{
        response.json(result[0])
    })
});

//Ruta para obtener un detalle
router.route('/detalles/consultar/:IDVenta').get((request,response)=>{
    detallesWS.getDetalle(request.params.IDVenta).then(result=>{
        response.json(result[0])
    })
});

//Ruta para agregar un detalle
router.route('/detalles/agregar').post((request,response)=>{
    let Detalle={...request.body}
    detallesWS.newDetalle(Detalle).then(result=>{
        response.json('Se ha registrado correctamente el detalle')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para actualizar un detalle
router.route('/detalles/actualizar').put((request,response)=>{
    let Detalle={...request.body}
    detallesWS.upDetalle(Detalle).then(result=>{
        response.json('Se ha actualizado correctamente el detalle')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

//Ruta para eliminar un detalle
router.route('/detalles/eliminar/:IDVenta').get((request,response)=>{
    detallesWS.delDetalle(request.params.IDVenta).then(result=>{
        response.json('Se ha elimnado correctamente el detalle')
    },(err)=>{
        console.log(err.message);
        response.json(err.message);
    })
});

var portconn=process.env.PORT || 8080;
app.listen(portconn);

console.log('fin del proceso');
