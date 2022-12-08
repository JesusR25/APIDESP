create procedure pr_delCliente
	@IDCliente int
as
begin
/*Elimina en la bd en la tabla clientes*/
	DELETE FROM Clientes
	WHERE IDCliente=@IDCliente;
end;

