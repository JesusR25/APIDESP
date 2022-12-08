create procedure pr_delReparacion
	@IDReparacion int
as
begin
/*Elimina en la bd en la tabla detalles*/
	DELETE FROM Reparaciones
	WHERE IDReparacion=@IDReparacion;
end;

