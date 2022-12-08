create procedure pr_upEmpleado
@IDEmpleado int,
@NombreEmpleado varchar (30),
@ApePatEmpleado varchar(30),
@ApeMatEmpleado  varchar(30),
@CorreoEmpleado varchar(50),
@TelefonoEmpleado varchar(10)
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Empleados
	SET NombreEmpleado=@NombreEmpleado,
		ApePatEmpleado=@ApePatEmpleado,
		ApeMatEMpleado=@ApeMatEmpleado,
		CorreoEmpleado=@CorreoEmpleado,
		TelefonoEmpleado=@TelefonoEmpleado
	WHERE IDEmpleado=@IDEmpleado;
end;