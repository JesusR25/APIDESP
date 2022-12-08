const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos las reparaciones
async function getReparaciones(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Reparaciones');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//CONSULTAR REPARACIONES POR IDCLIENTE
async function getReparacionesCliente(reparacion){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDCliente',sql.Int,reparacion.IDCliente)
        .query('select * from Reparaciones where IDCliente= @IDCliente');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
//CONSULTAR REPARACIONES POR IDVEHICULO
async function getReparacioneVehiculo(reparacion){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDVehiculo',sql.Int,reparacion.IDVehiculo)
        .query('select * from Reparaciones where IDVehiculo= @IDVehiculo');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta una reparacion especifica
async function getReparacion(IDReparacion){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDReparacion',sql.Int,IDReparacion)
        .query('select * from Reparaciones where IDReparacion= @IDReparacion');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de las reparaciones
async function newReparacion(reparacion){
    try{
        let pool=await sql.connect(conexion);
        let newReparacion=await pool.request()
            .input('IDVenta',sql.Int,reparacion.IDVenta)
            .input('Estatus',sql.VarChar,reparacion.Estatus)
            .input('IDServicio',sql.Int,reparacion.IDServicio)
            .input('IDVehiculo',sql.Int,reparacion.IDVehiculo)
            .input('IDMecanico',sql.Int,reparacion.IDMecanico)
            .execute('pr_newReparacion');

        return newReparacion.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar reparacion');
    }
}

//Update de la reparacion
async function upReparacion(reparacion){
    try{
        let pool=await sql.connect(conexion);
        let upReparacion=await pool.request()
        .input('IDReparacion',sql.Int,reparacion.IDReparacion)
        .input('IDVenta',sql.Int,reparacion.IDVenta)
        .input('Estatus',sql.VarChar,reparacion.Estatus)
        .input('IDServicio',sql.Int,reparacion.IDServicio)
        .input('IDVehiculo',sql.Int,reparacion.IDVehiculo)
        .input('IDMecanico',sql.Int,reparacion.IDMecanico)
        .execute('pr_upReparacion');

        return upReparacion.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar reparacion');
    }
}

//Delete de la reparacion
async function delReparacion(IDReparacion){
    try{
        let pool=await sql.connect(conexion);
        let delReparacion=await pool.request()
            .input('IDReparacion',sql.Int,IDReparacion)
            .execute('pr_delReparacion');

        return delReparacion.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar reparacion');
    }
}
module.exports={
    getReparaciones:getReparaciones,
    getReparacionesCliente:getReparacionesCliente,
    getReparacion:getReparacion,
    getReparacioneVehiculo:getReparacioneVehiculo,
    newReparacion:newReparacion,  
    upReparacion:upReparacion,
    delReparacion:delReparacion
}