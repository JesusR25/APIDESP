create procedure pr_delVenta
	@IDVenta int
as
begin
/*Elimina en la bd en la tabla detalles*/
	DELETE FROM Ventas
	WHERE IDVenta=@IDVenta;
end;

