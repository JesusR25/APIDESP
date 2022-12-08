create procedure pr_delProducto
	@IDProducto int
as
begin
/*Elimina en la bd en la tabla productos*/
	DELETE FROM Productos
	WHERE IDProducto=@IDProducto;
end;