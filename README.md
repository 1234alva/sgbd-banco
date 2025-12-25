Banco Digital API

API RESTful desarrollada con **NestJS**, **TypeORM** y **PostgreSQL** para la gestión de clientes, cuentas y transacciones bancarias.  
Incluye documentación automática con **Swagger** y validaciones con **class-validator**.

---

Tecnologías
- NestJS
- TypeORM
- PostgreSQL
- Docker & Docker Compose
- Swagger

---

Instalación

1. Clonar el repositorio
   ```bash
   git clone https://github.com/usuario/sgbd-banco.git
   cd sgbd-banco/backend

---
instalacion
npm install
--
levantar Docker
docker-compose up -d
--
2. en .env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=banco_db

