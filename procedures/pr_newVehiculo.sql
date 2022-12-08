create procedure pr_newVehiculo
@MarcaVehiculo varchar(50),
@NombreVehiculo varchar (50),
@ModeloVehiculo char(4),
@IDCliente int
as
begin
/*Inserta en la bd en la tabla vehiculos*/
	insert into Vehiculos (
		MarcaVehiculo,
		NombreVehiculo,
		ModeloVehiculo,
		IDCliente
	) values (
		@MarcaVehiculo,
		@NombreVehiculo,
		@ModeloVehiculo,
		@IDCliente
	);
end;