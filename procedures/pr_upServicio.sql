create procedure pr_upServicio
@IDServicio int,
@TipoServicio varchar(50),
@CostoServicio money
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Servicios
	SET TipoServicio=@TipoServicio,
		CostoServicio=@CostoServicio
	WHERE IDServicio=@IDServicio;
end;
