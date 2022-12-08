const conexion=require('./conexion.js');
const sql=require('mssql');

//Consulta de todos los servicios
async function getProductos(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Productos');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Consulta un servicio especifico
async function getProducto(IDProducto){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request()
        .input('IDProducto',sql.Int,IDProducto)
        .query('select * from Productos where IDProducto= @IDProducto');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//Insert de los productos
async function newProducto(producto){
    try{
        let pool=await sql.connect(conexion);
        let newProducto=await pool.request()
        //    .input('IDServicio',sql.Int,servicio.IDServicio)
            .input('NombreProducto',sql.VarChar,producto.NombreProducto)
            .input('MarcaProducto',sql.VarChar,producto.MarcaProducto)
            .input('DescripcionProducto',sql.VarChar,producto.DescripcionProducto)
            .input('PrecioProducto',sql.Money,producto.PrecioProducto)
            .input('ExistenciaProducto',sql.Int,producto.ExistenciaProducto)
            .execute('pr_newProducto');

        return newProducto.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado agregar p');
    }
}

//Update de los servicios
async function upProducto(producto){
    try{
        let pool=await sql.connect(conexion);
        let upProducto=await pool.request()
            .input('IDProducto',sql.Int,producto.IDProducto)
            .input('NombreProducto',sql.VarChar,producto.NombreProducto)
            .input('MarcaProducto',sql.VarChar,producto.MarcaProducto)
            .input('DescripcionProducto',sql.VarChar,producto.DescripcionProducto)
            .input('PrecioProducto',sql.Money,producto.PrecioProducto)
            .input('ExistenciaProducto',sql.Int,producto.ExistenciaProducto)
            .execute('pr_upProducto');

        return upProducto.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado actualizar s');
    }
}

//Delete de los servicios
async function delProducto(IDProducto){
    try{
        let pool=await sql.connect(conexion);
        let delProducto=await pool.request()
            .input('IDProducto',sql.Int,IDProducto)
            .execute('pr_delProducto');

        return delProducto.recordsets;
        
    } catch (err) {
        throw new Error ('Se presentó un error en el procedimiento almacenado eliminar producto');
    }
}

async function getIDProductos(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select IDProducto from Productos');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}

//NUEVOS METODOS EN APP
async function getProductosAsc(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Productos ORDER BY PrecioProducto');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
    //NUEVO METODO EN APP
async function getProductosDesc(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Productos ORDER BY PrecioProducto DESC');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
    //NUEVO METODO EN APP
async function getProductosAlfa(){
    try{
        let pool=await sql.connect(conexion);
        let salida=await pool.request().query('select * from Productos ORDER BY NombreProducto');
        return salida.recordsets;
    }catch(err){
        console.log(err);
    }
}
module.exports={
    getProductos:getProductos,
    getProducto:getProducto,
    newProducto:newProducto,  
    upProducto:upProducto,
    delProducto:delProducto,
    getIDProductos:getIDProductos,
    getProductosDesc:getProductosDesc,
    getProductosAsc:getProductosAsc,
    getProductosAlfa:getProductosAlfa
}