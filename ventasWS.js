const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos las ventas
async function getVentas(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Ventas');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta una venta especifica
async function getVenta(IDVenta){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDVenta',sql.Int,IDVenta)
        .query('select * from Ventas where IDVenta= @IDVenta');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de una venta
async function newVenta(venta){
    try{
        let pool=await sql.connect(conexion);
        let newVenta=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('FechaVenta',sql.VarChar,venta.FechaVenta)
            .input('Total',sql.Money,venta.Total)
            .input('IDCliente',sql.Int,venta.IDCliente)
            .input('IDEmpleado',sql.Int,venta.IDEmpleado)
            .execute('pr_newVenta');

        return newVenta.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar venta');
    }
}

//Update de una venta
async function upVenta(venta){
    try{
        let pool=await sql.connect(conexion);
        let upVenta=await pool.request()
            .input('IDVenta',sql.Int,venta.IDVenta)
            .input('FechaVenta',sql.VarChar,venta.FechaVenta)
            .input('Total',sql.Money,venta.Total)
            .input('IDCliente',sql.Int,venta.IDCliente)
            .input('IDEmpleado',sql.Int,venta.IDEmpleado)
            .execute('pr_upVenta');

        return upVenta.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar venta');
    }
}
async function upTotal(venta){
    try{
        let pool=await sql.connect(conexion);
        let upTotal=await pool.request()
            .input('IDVenta',sql.Int,venta.IDVenta)
            .input('Total',sql.Money,venta.Total)
            .execute('pr_upTotal');

        return upTotal.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar total venta');
    }
}

//Delete de una venta
async function delVenta(IDVenta){
    try{
        let pool=await sql.connect(conexion);
        let delVenta=await pool.request()
            .input('IDVenta',sql.Int,IDVenta)
            .execute('pr_delVenta');

        return delVenta.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar venta');
    }
}

async function getIDVentas(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select IDVenta from Ventas');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

async function getIDlast(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('SELECT TOP 1 IDVenta=(IDVenta+1) FROM Ventas ORDER BY IDVenta DESC');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

async function getIDlast(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('SELECT TOP 1 IDVenta=(IDVenta+1) FROM Ventas ORDER BY IDVenta DESC');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

module.exports={
    getVentas:getVentas,
    getVenta:getVenta,
    newVenta:newVenta,
    upVenta:upVenta,
    upTotal:upTotal,
    delVenta:delVenta,
    getIDVentas:getIDVentas,
    getIDlast:getIDlast
}