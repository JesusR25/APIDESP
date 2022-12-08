const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los detalles
async function getDetalles(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Detalles');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un detalle especifico
async function getDetalle(IDVenta){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDVenta',sql.Int,IDVenta)
        .query('select * from Detalles where IDVenta= @IDVenta');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de los detalles
async function newDetalle(detalle){
    try{
        let pool=await sql.connect(conexion);
        let newDetalle=await pool.request()
            .input('IDVenta',sql.Int,detalle.IDVenta)
            .input('IDProducto',sql.Int,detalle.IDProducto)
            .input('CantidadProd',sql.Int,detalle.CantidadProd)
            .input('Subtotal',sql.Money,detalle.Subtotal)
            .execute('pr_newDetalle');

        return newDetalle.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar detalle');
    }
}

//Update de un detalle
async function upDetalle(detalle){
    try{
        let pool=await sql.connect(conexion);
        let upDetalle=await pool.request()
        .input('IDVenta',sql.Int,detalle.IDVenta)
        .input('IDProducto',sql.Int,detalle.IDProducto)
        .input('CantidadProd',sql.Int,detalle.CantidadProd)
        .input('Subtotal',sql.Money,detalle.Subtotal)
        .execute('pr_upDetalle');

        return upDetalle.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar detalle');
    }
}

//Delete de un detalle
async function delDetalle(IDVenta){
    try{
        let pool=await sql.connect(conexion);
        let delDetalle=await pool.request()
            .input('IDVenta',sql.Int,IDVenta)
            .execute('pr_delDetalle');

        return delDetalle.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar detalle');
    }
}
module.exports={
    getDetalles:getDetalles,
    getDetalle:getDetalle,
    newDetalle:newDetalle,
    upDetalle:upDetalle,
    delDetalle:delDetalle
}