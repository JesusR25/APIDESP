create procedure pr_delCliente
	@IDCliente int
as
begin
/*Elimina en la bd en la tabla clientes*/
	DELETE FROM Clientes
	WHERE IDCliente=@IDCliente;
end;
go

create procedure pr_delDetalle
	@IDVenta int
as
begin
/*Elimina en la bd en la tabla detalles*/
	DELETE FROM Detalles
	WHERE IDVenta=@IDVenta;
end;
go
create procedure pr_delEmpleado
	@IDEmpleado int
as
begin
/*Elimina en la bd en la tabla productos*/
	DELETE FROM Empleados
	WHERE IDEmpleado=@IDEmpleado;
end;
go

create procedure pr_delMecanico
	@IDMecanico int
as
begin
/*Elimina en la bd en la tabla productos*/
	DELETE FROM Mecanicos
	WHERE IDMecanico=@IDMecanico;
end;
go
create procedure pr_delProducto
	@IDProducto int
as
begin
/*Elimina en la bd en la tabla productos*/
	DELETE FROM Productos
	WHERE IDProducto=@IDProducto;
end;
go
create procedure pr_delReparacion
	@IDReparacion int
as
begin
/*Elimina en la bd en la tabla detalles*/
	DELETE FROM Reparaciones
	WHERE IDReparacion=@IDReparacion;
end;
go
create procedure pr_delServicio
	@IDServicio int
as
begin
/*Elimina en la bd en la tabla Servicios*/
	DELETE FROM Servicios
	WHERE IDServicio=@IDServicio;
end;
go
create procedure pr_delVehiculo
	@IDVehiculo int
as
begin
/*Elimina en la bd en la tabla vehiculos*/
	DELETE FROM Vehiculos
	WHERE IDVehiculo=@IDVehiculo;
end;
go
create procedure pr_delVenta
	@IDVenta int
as
begin
/*Elimina en la bd en la tabla detalles*/
	DELETE FROM Ventas
	WHERE IDVenta=@IDVenta;
end;
go
create procedure pr_newCliente
@NombreCliente varchar (30),
@ApePatCliente varchar(30),
@ApeMatCliente  varchar(30),
@CorreoCliente varchar(50),
@TelefonoCliente varchar(10),
@Username varchar(35),
@Contraseña varchar(30)
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Clientes (
		NombreCliente,
		ApePatCliente,
		ApeMatCliente,
		CorreoCliente,
		TelefonoCliente,
		Username,
		Contraseña
	) values (
		@NombreCliente,
		@ApePatCliente,
		@ApeMatCliente,
		@CorreoCliente,
		@TelefonoCliente,
		@Username,
		@Contraseña
	);
end;
go
create procedure pr_newDetalle
@IDVenta int,
@IDProducto int,
@CantidadProd int,
@Subtotal money
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Detalles (
		IDVenta,
		IDProducto,
		CantidadProd,
		Subtotal
	) values (
		@IDVenta,
		@IDProducto,
		@CantidadProd,
		@Subtotal
	);
end;
go
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
go
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
go
create procedure pr_newProducto
@NombreProducto varchar (30),
@MarcaProducto varchar(30),
@DescripcionProducto varchar(100),
@PrecioProducto decimal(7,2),
@ExistenciaProducto int
as
begin
/*Inserta en la bd en la tabla Servicios*/
	insert into Productos (
		NombreProducto,
		MarcaProducto,
		DescripcionProducto,
		PrecioProducto,
		ExistenciaProducto
	) values (
		@NombreProducto,
		@MarcaProducto,
		@DescripcionProducto,
		@PrecioProducto,
		@ExistenciaProducto
	);
end;
go
create procedure pr_newReparacion
@IDVenta int,
@Estatus varchar(100),
@IDServicio int,
@IDVehiculo int,
@IDMecanico int
as
begin
/*Inserta en la bd en la tabla ventas*/
	insert into Reparaciones(
		IDVenta,
		Estatus,
		IDServicio,
		IDVehiculo,
		IDMecanico
	) values (
		@IDVenta,
		@Estatus,
		@IDServicio,
		@IDVehiculo,
		@IDMecanico
	);
end;
go
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
go
create procedure pr_newVehiculo
@MarcaVehiculo varchar(50),
@NombreVehiculo varchar (50),
@ModeloVehiculo char(4),
@IDCliente int
as
begin
/*Inserta en la bd en la tabla vehiculos*/
	insert into Vehiculos (
		MarcaVehiculo,
		NombreVehiculo,
		ModeloVehiculo,
		IDCliente
	) values (
		@MarcaVehiculo,
		@NombreVehiculo,
		@ModeloVehiculo,
		@IDCliente
	);
end;
go
create procedure pr_newVenta
@FechaVenta varchar(10),
@IDCliente int,
@IDEmpleado int
as
begin
/*Inserta en la bd en la tabla ventas*/
	insert into Ventas (
		FechaVenta,
		IDCliente,
		IDEmpleado
	) values (
		@FechaVenta,
		@IDCliente,
		@IDEmpleado
	);
end;
go
create procedure pr_upCliente
@IDCliente int,
@NombreCliente varchar (30),
@ApePatCliente varchar(30),
@ApeMatCliente  varchar(30),
@CorreoCliente varchar(50),
@TelefonoCliente varchar(10),
@Username varchar(35),
@Contraseña varchar(30)
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Clientes
	SET NombreCliente=@NombreCliente,
		ApePatCliente=@ApePatCliente,
		ApeMatCliente=@ApeMatCliente,
		CorreoCliente=@CorreoCliente,
		TelefonoCliente=@TelefonoCliente,
		Username=@Username,
		Contraseña=@Contraseña
	WHERE IDCliente=@IDCliente;
end;
go
create procedure pr_upDetalle
@IDVenta int,
@IDProducto int,
@CantidadProd int,
@Subtotal money
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Detalles
	SET IDProducto=@IDProducto,
		CantidadProd=@CantidadProd,
		Subtotal=@Subtotal
	WHERE IDVenta=@IDVenta;
end;
go
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
go
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
go
create procedure pr_upProducto
@IDProducto int,
@NombreProducto varchar (30),
@MarcaProducto varchar(30),
@DescripcionProducto varchar(100),
@PrecioProducto decimal(7,2),
@ExistenciaProducto int
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Productos
	SET NombreProducto=@NombreProducto,
		MarcaProducto=@MarcaProducto,
		DescripcionProducto=@DescripcionProducto,
		PrecioProducto=@PrecioProducto,
		ExistenciaProducto=@ExistenciaProducto
	WHERE IDProducto=@IDProducto;
end;
go

create procedure pr_upReparacion
@IDReparacion int,
@IDVenta int,
@Estatus varchar(100),
@IDServicio int,
@IDVehiculo int,
@IDMecanico int
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Reparaciones
	SET IDVenta=@IDVenta,
		Estatus=@Estatus,
		IDServicio=@IDServicio,
		IDVehiculo=@IDVehiculo,
		IDMecanico=@IDMecanico
	WHERE IDReparacion=@IDReparacion;
end;
go
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
go
create procedure pr_upVehiculo
@IDVehiculo int,
@MarcaVehiculo varchar(50),
@NombreVehiculo varchar (50),
@ModeloVehiculo char(4),
@IDCliente int
as
begin
/*actualiza en la bd en la tabla Vehiculos*/
	UPDATE Vehiculos
	SET MarcaVehiculo=@MarcaVehiculo,
		NombreVehiculo=@NombreVehiculo,
		ModeloVehiculo=@ModeloVehiculo,
		IDCliente=@IDCliente
	WHERE IDVehiculo=@IDVehiculo;
end;
go
create procedure pr_upVenta
@IDVenta int,
@FechaVenta varchar(10),
@IDCliente int,
@IDEmpleado int
as
begin
/*actualiza en la bd en la tabla Servicios*/
	UPDATE Ventas
	SET FechaVenta=@FechaVenta,
		IDCliente=@IDCliente,
		IDEmpleado=@IDEmpleado
	WHERE IDVenta=@IDVenta;
end;