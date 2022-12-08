create procedure pr_upDetalle
@IDVenta int,
@IDProducto int,
@CantidadProd int,
@Subtotal money
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Detalles
	SET IDProducto=@IDProducto,
		CantidadProd=@CantidadProd,
		Subtotal=@Subtotal
	WHERE IDVenta=@IDVenta;
end;