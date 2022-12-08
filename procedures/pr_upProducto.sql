create procedure pr_upProducto
@IDProducto int,
@NombreProducto varchar (30),
@MarcaProducto varchar(30),
@DescripcionProducto varchar(100),
@PrecioProducto decimal(7,2),
@ExistenciaProducto int
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Productos
	SET NombreProducto=@NombreProducto,
		MarcaProducto=@MarcaProducto,
		DescripcionProducto=@DescripcionProducto,
		PrecioProducto=@PrecioProducto,
		ExistenciaProducto=@ExistenciaProducto
	WHERE IDProducto=@IDProducto;
end;

select * from Productos