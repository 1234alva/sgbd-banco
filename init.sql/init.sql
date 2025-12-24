
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE cuentas (
    id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    numero_cuenta VARCHAR(20) UNIQUE NOT NULL,
    tipo VARCHAR(20) CHECK (tipo IN ('Ahorros', 'Corriente')),
    saldo NUMERIC(12,2) DEFAULT 0,
    fecha_apertura TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activa BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

INSERT INTO clientes (nombre, apellido, email, telefono, direccion)
VALUES 
('Juan', 'Pérez', 'juan.perez@example.com', '789456123', 'Av. Principal 123'),
('María', 'Gómez', 'maria.gomez@example.com', '789456124', 'Calle Secundaria 456');

INSERT INTO cuentas (cliente_id, numero_cuenta, tipo, saldo)
VALUES
(1, '1002003001', 'Ahorros', 1500.50),
(2, '1002003002', 'Corriente', 250.00);
