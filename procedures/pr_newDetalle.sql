create procedure pr_newDetalle
@IDVenta int,
@IDProducto int,
@CantidadProd int,
@Subtotal money
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Detalles (
		IDVenta,
		IDProducto,
		CantidadProd,
		Subtotal
	) values (
		@IDVenta,
		@IDProducto,
		@CantidadProd,
		@Subtotal
	);
end;