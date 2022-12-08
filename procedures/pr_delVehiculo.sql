create procedure pr_delVehiculo
	@IDVehiculo int
as
begin
/*Elimina en la bd en la tabla vehiculos*/
	DELETE FROM Vehiculos
	WHERE IDVehiculo=@IDVehiculo;
end;