create procedure pr_delDetalle
	@IDVenta int
as
begin
/*Elimina en la bd en la tabla detalles*/
	DELETE FROM Detalles
	WHERE IDVenta=@IDVenta;
end;

