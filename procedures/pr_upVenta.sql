create procedure pr_upVenta
@IDVenta int,
@FechaVenta varchar(10),
@IDCliente int,
@IDEmpleado int
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Ventas
	SET FechaVenta=@FechaVenta,
		IDCliente=@IDCliente,
		IDEmpleado=@IDEmpleado
	WHERE IDVenta=@IDVenta;
end;