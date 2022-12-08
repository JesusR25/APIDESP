create procedure pr_upVehiculo
@IDVehiculo int,
@MarcaVehiculo varchar(50),
@NombreVehiculo varchar (50),
@ModeloVehiculo char(4),
@IDCliente int
as
begin
/*actualiza en la bd en la tabla Vehiculos*/
	UPDATE Vehiculos
	SET MarcaVehiculo=@MarcaVehiculo,
		NombreVehiculo=@NombreVehiculo,
		ModeloVehiculo=@ModeloVehiculo,
		IDCliente=@IDCliente
	WHERE IDVehiculo=@IDVehiculo;
end;
