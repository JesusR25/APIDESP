const conexion=require('./conexion.js');
const sql=require('mssql');



async function getHistorial(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Historial');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}


async function newHistorial(historial){
    try{
        let pool=await sql.connect(conexion);
        let newHistorial=await pool.request()
            .input('IDReparacion',sql.Int,historial.IDReparacion)
            .input('IDVenta',sql.Int,historial.IDVenta)
            .input('Estatus',sql.VarChar,historial.Estatus)
            .input('Observaciones',sql.VarChar,historial.Observaciones)
            .input('TipoServicio',sql.VarChar,historial.TipoServicio)
            .input('Vehiculo',sql.VarChar,historial.Vehiculo)
            .input('Mecanico',sql.VarChar,historial.Mecanico)
            .execute('pr_newHistorial');

        return newHistorial.recordsets;

    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar historial');
    }
}

module.exports={
    getHistorial:getHistorial,
    newHistorial:newHistorial
}
