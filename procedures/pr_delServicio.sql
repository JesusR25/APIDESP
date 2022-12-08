create procedure pr_delServicio
	@IDServicio int
as
begin
/*Elimina en la bd en la tabla Servicios*/
	DELETE FROM Servicios
	WHERE IDServicio=@IDServicio;
end;