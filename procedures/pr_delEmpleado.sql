create procedure pr_delEmpleado
	@IDEmpleado int
as
begin
/*Elimina en la bd en la tabla productos*/
	DELETE FROM Empleados
	WHERE IDEmpleado=@IDEmpleado;
end;

select * from Productos