const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los mecanicos
async function getMecanicos(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Mecanicos');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un mecanico especifico
async function getMecanico(IDMecanico){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDMecanico',sql.Int,IDMecanico)
        .query('select * from Mecanicos where IDMecanico= @IDMecanico');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de los mecanicos
async function newMecanico(mecanico){
    try{
        let pool=await sql.connect(conexion);
        let newMecanico=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('NombreMecanico',sql.VarChar,mecanico.NombreMecanico)
            .input('ApePatMecanico',sql.VarChar,mecanico.ApePatMecanico)
            .input('ApeMatMecanico',sql.VarChar,mecanico.ApeMatMecanico)
            .input('CorreoMecanico',sql.VarChar,mecanico.CorreoMecanico)
            .input('TelefonoMecanico',sql.VarChar,mecanico.TelefonoMecanico)
            .input('Username',sql.VarChar,mecanico.Username)
            .input('Contrasena',sql.VarChar,mecanico.Contrasena)
            .execute('pr_newMecanico');

        return newMecanico.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar mecanico');
    }
}

async function getMecanicoUser(Username) {
    try {
        let pool = await sql.connect(conexion);
        let salida = await pool.request()
            .input('Username', sql.VarChar, Username)
            .query('select * from Mecanicos where Username = @Username');
        return salida.recordsets;
    } catch (err) {
        console.log(err);
    }
}

async function getMecanicoCont(Contrasena) {
    try {
        let pool = await sql.connect(conexion);
        let salida = await pool.request()
            .input('Contrasena', sql.VarChar, Contrasena)
            .query('select * from Mecanicos where Contrasena = @Contrasena');
        return salida.recordsets;
    } catch (err) {
        console.log(err);
    }
}


//Update de los servicios
async function upMecanico(mecanico){
    try{
        let pool=await sql.connect(conexion);
        let upMecanico=await pool.request()
            .input('IDMecanico',sql.Int,mecanico.IDMecanico)
            .input('NombreMecanico',sql.VarChar,mecanico.NombreMecanico)
            .input('ApePatMecanico',sql.VarChar,mecanico.ApePatMecanico)
            .input('ApeMatMecanico',sql.VarChar,mecanico.ApeMatMecanico)
            .input('CorreoMecanico',sql.VarChar,mecanico.CorreoMecanico)
            .input('TelefonoMecanico',sql.VarChar,mecanico.TelefonoMecanico)
            .input('Username',sql.VarChar,mecanico.Username)
            .input('Contrasena',sql.VarChar,mecanico.Contrasena)
            .execute('pr_upMecanico');

        return upMecanico.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar mecanico');
    }
}

//Delete de los servicios
async function delMecanico(IDMecanico){
    try{
        let pool=await sql.connect(conexion);
        let delMecanico=await pool.request()
            .input('IDMecanico',sql.Int,IDMecanico)
            .execute('pr_delMecanico');

        return delMecanico.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar mecanico');
    }
}
async function getMecanicoMov(mecanico){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('Username',sql.VarChar,mecanico.Username)
        .input('Contrasena', sql.VarChar,mecanico.Contrasena)
        .query('select * from Mecanicos where Username= @Username AND Contrasena= @Contrasena');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
async function getIDMecanicos(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query("select IDMecanico from Mecanicos");
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
module.exports={
    getMecanicos:getMecanicos,
    getMecanico:getMecanico,
    newMecanico:newMecanico,
    upMecanico:upMecanico,
    delMecanico:delMecanico,
    getMecanicoMov:getMecanicoMov,
    getIDMecanicos:getIDMecanicos,
    getMecanicoCont: getMecanicoCont,
    getMecanicoUser: getMecanicoUser
}