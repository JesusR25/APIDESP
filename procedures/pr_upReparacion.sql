create procedure pr_upReparacion
@IDReparacion int,
@IDVenta int,
@Estatus varchar(100),
@IDServicio int,
@IDVehiculo int,
@IDMecanico int
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Reparaciones
	SET IDVenta=@IDVenta,
		Estatus=@Estatus,
		IDServicio=@IDServicio,
		IDVehiculo=@IDVehiculo,
		IDMecanico=@IDMecanico
	WHERE IDReparacion=@IDReparacion;
end;