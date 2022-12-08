create procedure pr_newReparacion
@IDVenta int,
@Estatus varchar(100),
@IDServicio int,
@IDVehiculo int,
@IDMecanico int
as
begin
/*Inserta en la bd en la tabla ventas*/
	insert into Reparaciones(
		IDVenta,
		Estatus,
		IDServicio,
		IDVehiculo,
		IDMecanico
	) values (
		@IDVenta,
		@Estatus,
		@IDServicio,
		@IDVehiculo,
		@IDMecanico
	);
end;