create procedure pr_newVenta
@FechaVenta varchar(10),
@IDCliente int,
@IDEmpleado int
as
begin
/*Inserta en la bd en la tabla ventas*/
	insert into Ventas (
		FechaVenta,
		IDCliente,
		IDEmpleado
	) values (
		@FechaVenta,
		@IDCliente,
		@IDEmpleado
	);
end;
