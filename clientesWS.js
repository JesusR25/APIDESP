const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los clientes
async function getClientes(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Clientes');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un cliente especifico
async function getCliente(IDCliente){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDCliente',sql.Int,IDCliente)
        .query('select * from Clientes where IDCliente= @IDCliente');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}


//Insert de los productos
async function newCliente(cliente){
    try{
        let pool=await sql.connect(conexion);
        let newCliente=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('NombreCliente',sql.VarChar,cliente.NombreCliente)
            .input('ApePatCliente',sql.VarChar,cliente.ApePatCliente)
            .input('ApeMatCliente',sql.VarChar,cliente.ApeMatCliente)
            .input('CorreoCliente',sql.VarChar,cliente.CorreoCliente)
            .input('TelefonoCliente',sql.VarChar,cliente.TelefonoCliente)
            .input('Username',sql.VarChar,cliente.Username)
            .input('Contrasena',sql.VarChar,cliente.Contrasena)
            .execute('pr_newCliente');

        return newCliente.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar cliente');
    }
}

//Update de un cliente
async function upCliente(cliente){
    try{
        let pool=await sql.connect(conexion);
        let upCliente=await pool.request()
            .input('IDCliente',sql.Int,cliente.IDCliente)
            .input('NombreCliente',sql.VarChar,cliente.NombreCliente)
            .input('ApePatCliente',sql.VarChar,cliente.ApePatCliente)
            .input('ApeMatCliente',sql.VarChar,cliente.ApeMatCliente)
            .input('CorreoCliente',sql.VarChar,cliente.CorreoCliente)
            .input('TelefonoCliente',sql.VarChar,cliente.TelefonoCliente)
            .input('Username',sql.VarChar,cliente.Username)
            .input('Contrasena',sql.VarChar,cliente.Contrasena)
            .execute('pr_upCliente');

        return upCliente.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar cliente');
    }
}

//Delete de un cliente
async function delCliente(IDCliente){
    try{
        let pool=await sql.connect(conexion);
        let delCliente=await pool.request()
            .input('IDCliente',sql.Int,IDCliente)
            .execute('pr_delCliente');

        return delCliente.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar cliente');
    }
}

//CAMBIOS EN CLASE CLIENTESWS
//Esto es para movil
//Funcion para obtener cliente por correo y contraseña
async function getClienteMov(cliente){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('CorreoCliente',sql.VarChar,cliente.CorreoCliente)
        .input('Contrasena', sql.VarChar,cliente.Contrasena)
        .query('select * from Clientes where CorreoCliente= @CorreoCliente AND Contrasena= @Contrasena');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Funcion para obtener cliente por ID
async function getClienteInf(cliente){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDCliente',sql.Int,cliente.IDCliente)
        .query('select * from Clientes where IDCliente= @IDCliente');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

async function getIDClientes(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query("select IDCliente from Clientes");
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
} 

module.exports={
    getClientes:getClientes,
    getCliente:getCliente,
    newCliente:newCliente,
    upCliente:upCliente,
    delCliente:delCliente,
    getClienteMov:getClienteMov,
    getClienteInf:getClienteInf,
    getIDClientes:getIDClientes
}