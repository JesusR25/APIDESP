const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los vehiculos
async function getVehiculos(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Vehiculos');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un vehiculo especifico
async function getVehiculo(IDVehiculo){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDVehiculo',sql.Int,IDVehiculo)
        .query('select * from Vehiculos where IDVehiculo= @IDVehiculo');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un vehiculo especifico por idcliente
async function getVehiculoCliente(IDCliente){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDCliente',sql.Int,IDCliente)
        .query('select * from Vehiculos where IDCliente= @IDCliente');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de un vehiculo
async function newVehiculo(vehiculo){
    try{
        let pool=await sql.connect(conexion);
        let newVehiculo=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            
            .input('MarcaVehiculo',sql.VarChar,vehiculo.MarcaVehiculo)
            .input('NombreVehiculo',sql.VarChar,vehiculo.NombreVehiculo)
            .input('ModeloVehiculo',sql.Char,vehiculo.ModeloVehiculo)
            .input('IDCliente',sql.Int,vehiculo.IDCliente)
            .execute('pr_newVehiculo');

        return newVehiculo.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar vehiculo');
    }
}

//Update de un vehiculo
async function upVehiculo(vehiculo){
    try{
        let pool=await sql.connect(conexion);
        let upVehiculo=await pool.request()
            .input('IDVehiculo',sql.Int,vehiculo.IDVehiculo)
            .input('MarcaVehiculo',sql.VarChar,vehiculo.MarcaVehiculo)
            .input('NombreVehiculo',sql.VarChar,vehiculo.NombreVehiculo)
            .input('ModeloVehiculo',sql.Char,vehiculo.ModeloVehiculo)
            .input('IDCliente',sql.Int,vehiculo.IDCliente)
            .execute('pr_upVehiculo');

        return upVehiculo.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar vehiculo');
    }
}

//Delete de un vehiculo
async function delVehiculo(IDVehiculo){
    try{
        let pool=await sql.connect(conexion);
        let delVehiculo=await pool.request()
            .input('IDVehiculo',sql.Int,IDVehiculo)
            .execute('pr_delVehiculo');

        return delVehiculo.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar vehiculo');
    }
}
async function getIDVehiculos(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select IDVehiculo from Vehiculos');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
module.exports={
    getVehiculos:getVehiculos,
    getVehiculo:getVehiculo,
    getVehiculoCliente:getVehiculoCliente,
    newVehiculo:newVehiculo,  
    upVehiculo:upVehiculo,
    delVehiculo:delVehiculo,
    getIDVehiculos:getIDVehiculos
}