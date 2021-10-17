USE webstore

CREATE TABLE libro(
	id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	nombre VARCHAR(150) UNIQUE NOT NULL,
	descripcion VARCHAR(300) NOT NULL,
	autor VARCHAR(150) NOT NULL,
	fecha_publicacion DATETIME NOT NULL,
	numero_ejemplares INT NOT NULL,
	costo FLOAT NOT NULL
)

SELECT * FROM libro

INSERT INTO libro (nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo) 
VALUES			  ('Harry Potter 1', 'Historia lalala', 'J.K Rowling', '10-15-2020', 6, 25.90);