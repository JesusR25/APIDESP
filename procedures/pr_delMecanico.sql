create procedure pr_delMecanico
	@IDMecanico int
as
begin
/*Elimina en la bd en la tabla productos*/
	DELETE FROM Mecanicos
	WHERE IDMecanico=@IDMecanico;
end;

