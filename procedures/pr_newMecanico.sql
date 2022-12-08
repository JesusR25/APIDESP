create procedure pr_newMecanico
@NombreMecanico varchar (30),
@ApePatMecanico varchar(30),
@ApeMatMecanico  varchar(30),
@CorreoMecanico varchar(50),
@TelefonoMecanico varchar(10),
@Area varchar(40)
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Mecanicos (
		NombreMecanico,
		ApePatMecanico,
		ApeMatMecanico,
		CorreoMecanico,
		TelefonoMecanico,
		Area
	) values (
		@NombreMecanico,
		@ApePatMecanico,
		@ApeMatMecanico,
		@CorreoMecanico,
		@TelefonoMecanico,
		@Area
	);
end;