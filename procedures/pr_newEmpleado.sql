create procedure pr_newEmpleado
@NombreEmpleado varchar (30),
@ApePatEmpleado varchar(30),
@ApeMatEmpleado  varchar(30),
@CorreoEmpleado varchar(50),
@TelefonoEmpleado varchar(10)
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Empleados (
		NombreEmpleado,
		ApePatEmpleado,
		ApeMatEmpleado,
		CorreoEmpleado,
		TelefonoEmpleado
	) values (
		@NombreEmpleado,
		@ApePatEmpleado,
		@ApeMatEmpleado,
		@CorreoEmpleado,
		@TelefonoEmpleado
	);
end;