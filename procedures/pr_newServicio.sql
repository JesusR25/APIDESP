create procedure pr_newServicio
@TipoServicio varchar(50),
@CostoServicio money
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Servicios (
		TipoServicio,
		CostoServicio
	) values (
		@TipoServicio,
		@CostoServicio
	);
end;

