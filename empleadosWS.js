const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los empleados
async function getEmpleados(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Empleados');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un servicio especifico
async function getEmpleado(IDEmpleado){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDEmpleado',sql.Int,IDEmpleado)
        .query('select * from Empleados where IDEmpleado= @IDEmpleado');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de los productos
async function newEmpleado(empleado){
    try{
        let pool=await sql.connect(conexion);
        let newEmpleado=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('NombreEmpleado',sql.VarChar,empleado.NombreEmpleado)
            .input('ApePatEmpleado',sql.VarChar,empleado.ApePatEmpleado)
            .input('ApeMatEmpleado',sql.VarChar,empleado.ApeMatEmpleado)
            .input('CorreoEmpleado',sql.VarChar,empleado.CorreoEmpleado)
            .input('TelefonoEmpleado',sql.VarChar,empleado.TelefonoEmpleado)
            .input('Username',sql.VarChar,empleado.Username)
            .input('Contrasena',sql.VarChar,empleado.Contrasena)
            .execute('pr_newEmpleado');

        return newEmpleado.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar empleado');
    }
}

//Update de los servicios
async function upEmpleado(empleado){
    try{
        let pool=await sql.connect(conexion);
        let upEmpleado=await pool.request()
            .input('IDEmpleado',sql.Int,empleado.IDEmpleado)
            .input('NombreEmpleado',sql.VarChar,empleado.NombreEmpleado)
            .input('ApePatEmpleado',sql.VarChar,empleado.ApePatEmpleado)
            .input('ApeMatEmpleado',sql.VarChar,empleado.ApeMatEmpleado)
            .input('CorreoEmpleado',sql.VarChar,empleado.CorreoEmpleado)
            .input('TelefonoEmpleado',sql.VarChar,empleado.TelefonoEmpleado)
            .input('Username',sql.VarChar,empleado.Username)
            .input('Contrasena',sql.VarChar,empleado.Contrasena)
            .execute('pr_upEmpleado');

        return upEmpleado.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar e');
    }
}


async function getEmpleadoUser(Username) {
    try {
        let pool = await sql.connect(conexion);
        let salida = await pool.request()
            .input('Username', sql.VarChar, Username)
            .query('select * from Empleados where Username = @Username');
        return salida.recordsets;
    } catch (err) {
        console.log(err);
    }
}

async function getEmpleadoCont(Contrasena) {
    try {
        let pool = await sql.connect(conexion);
        let salida = await pool.request()
            .input('Contrasena', sql.VarChar, Contrasena)
            .query('select * from Empleados where Contrasena = @Contrasena');
        return salida.recordsets;
    } catch (err) {
        console.log(err);
    }
}


//Delete de los servicios
async function delEmpleado(IDEmpleado){
    try{
        let pool=await sql.connect(conexion);
        let delEmpleado=await pool.request()
            .input('IDEmpleado',sql.Int,IDEmpleado)
            .execute('pr_delEmpleado');

        return delEmpleado.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar empleado');
    }
}
async function getEmpleadoMov(empleado){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('Username',sql.VarChar,empleado.Username)
        .input('Contrasena', sql.VarChar,empleado.Contrasena)
        .query('select * from Empleados where Username= @Username AND Contrasena= @Contrasena');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
async function getIDEmpleados(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query("select IDEmpleado from Empleados");
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
module.exports={
    getEmpleados:getEmpleados,
    getEmpleado:getEmpleado,
    newEmpleado:newEmpleado,
    upEmpleado:upEmpleado,
    delEmpleado:delEmpleado,
    getEmpleadoMov:getEmpleadoMov,
    getEmpleadoUser: getEmpleadoUser,
    getEmpleadoCont: getEmpleadoCont,
    getIDEmpleados:getIDEmpleados
}