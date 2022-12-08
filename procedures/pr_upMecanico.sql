create procedure pr_upMecanico
@IDMecanico int,
@NombreMecanico varchar (30),
@ApePatMecanico varchar(30),
@ApeMatMecanico  varchar(30),
@CorreoMecanico varchar(50),
@TelefonoMecanico varchar(10),
@Area varchar(40)
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Mecanicos
	SET NombreMecanico=@NombreMecanico,
		ApePatMecanico=@ApePatMecanico,
		ApeMatMecanico=@ApeMatMecanico,
		CorreoMecanico=@CorreoMecanico,
		TelefonoMecanico=@TelefonoMecanico,
		Area=@Area
	WHERE IDMecanico=@IDMecanico;
end;