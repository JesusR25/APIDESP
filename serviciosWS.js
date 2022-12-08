const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los servicios
async function getServicios(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Servicios');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un servicio especifico
async function getServicio(IDServicio){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDServicio',sql.Int,IDServicio)
        .query('select * from Servicios where IDServicio= @IDServicio');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de los servicios
async function newServicio(servicio){
    try{
        let pool=await sql.connect(conexion);
        let newServicio=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('TipoServicio',sql.VarChar,servicio.TipoServicio)
            .input('CostoServicio',sql.Money,servicio.CostoServicio)
            .execute('pr_newServicio');

        return newServicio.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar s');
    }
}

//Update de los servicios
async function upServicio(servicio){
    try{
        let pool=await sql.connect(conexion);
        let upServicio=await pool.request()
            .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('TipoServicio',sql.VarChar,servicio.TipoServicio)
            .input('CostoServicio',sql.Money,servicio.CostoServicio)
            .execute('pr_upServicio');

        return upServicio.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar s');
    }
}

//Delete de los servicios
async function delServicio(IDServicio){
    try{
        let pool=await sql.connect(conexion);
        let delServicio=await pool.request()
            .input('IDServicio',sql.Int,IDServicio)
            .execute('pr_delServicio');

        return delServicio.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar servicio');
    }
}

async function getIDServicios(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select IDServicio from Servicios');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
module.exports={
    getServicios:getServicios,
    getServicio:getServicio,
    newServicio:newServicio,
    upServicio:upServicio,
    delServicio:delServicio,
    getIDServicios:getIDServicios
}