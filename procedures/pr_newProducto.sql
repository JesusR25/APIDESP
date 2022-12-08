create procedure pr_newProducto
@NombreProducto varchar (30),
@MarcaProducto varchar(30),
@DescripcionProducto varchar(100),
@PrecioProducto decimal(7,2),
@ExistenciaProducto int
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Productos (
		NombreProducto,
		MarcaProducto,
		DescripcionProducto,
		PrecioProducto,
		ExistenciaProducto
	) values (
		@NombreProducto,
		@MarcaProducto,
		@DescripcionProducto,
		@PrecioProducto,
		@ExistenciaProducto
	);
end;