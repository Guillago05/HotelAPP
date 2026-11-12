# HotelApp

Aplicación web full-stack de reserva de hoteles (Trabajo de Fin de Grado). Permite buscar hoteles por ciudad, fechas y número de personas, consultar sus habitaciones disponibles y reservar, tanto como usuario registrado como sin cuenta. Los usuarios registrados acumulan puntos con cada reserva y pueden canjearlos como descuento.

## Características

- Búsqueda de hoteles disponibles por ciudad, fecha de llegada, fecha de salida y nº de personas.
- Ficha de hotel con galería de imágenes y listado de habitaciones libres para las fechas elegidas.
- Reserva de habitación con usuario registrado o como invitado (nombre, apellidos, DNI, email y teléfono).
- Registro e inicio de sesión con **JWT** (autenticación stateless).
- Perfil de usuario: editar datos y eliminar la cuenta.
- Historial de reservas del usuario y cancelación de reservas.
- **Sistema de puntos**: cada reserva suma `ceil(precio_total / 10)` puntos; en la reserva se pueden aplicar los puntos acumulados, que vuelven a 0 al usarlos.
- Rutas privadas en el frontend (`/perfil/edit`, `/reservas`).

## Tecnologías

| Capa | Stack |
|------|-------|
| Backend | Java 17, Spring Boot 3.4.4, Spring Web, Spring Data JPA (Hibernate), Spring Security, Validation, Actuator, JJWT 0.12.6 |
| Base de datos | MySQL 8 |
| Frontend | React 18, Vite 6, React Router 7, Axios, SweetAlert2 |

## Estructura del proyecto

```
HotelAPP/
├── backend_hotelapp/                 # API REST (Spring Boot, Maven)
│   └── src/main/
│       ├── java/.../backend_hotelapp/
│       │   ├── auth/                 # Spring Security, filtros JWT (login y validación), CORS
│       │   ├── controllers/          # Hotel, Habitación, Imagen, Reserva, Usuario
│       │   ├── models/               # entities, dto, mapper, requests
│       │   ├── repositories/         # Spring Data JPA
│       │   └── services/             # lógica de negocio + JpaUserDetailsService
│       └── resources/
│           ├── application.properties
│           └── import.sql            # datos iniciales (roles, hoteles, habitaciones, imágenes)
└── frontend_hotelapp/                # SPA (React + Vite)
    ├── public/images/                # imágenes de hoteles
    └── src/
        ├── auth/                     # login, registro, reducer, hook useAuth
        ├── components/               # NavBar, BarraBusqueda, HotelContainer, ReservaContainer, PrivateRoute...
        ├── pages/                    # Home, ListHotels, Hotel, BookHabitacion, Reservas, EditarPerfil
        └── services/                 # llamadas Axios a la API
```

## Modelo de datos

Entidades JPA: `Rol`, `Login` (email, contraseña cifrada y rol), `Usuario` (nombre, apellidos, teléfono, DNI, puntos), `Hotel`, `Habitacion` (número, personas, precio por noche), `Imagen` y `Reserva` (fechas, personas, precio de la estancia y, para invitados, los datos `*_no_reg`).

Roles: `ROLE_USER` y `ROLE_HOTEL`.

## API REST

Base URL: `http://localhost:8080`

| Método | Endpoint | Acceso | Descripción |
|--------|----------|--------|-------------|
| POST | `/login` | Público | Autenticación; devuelve el token JWT |
| POST | `/usuarios` | Público | Registro de usuario |
| GET | `/hoteles/disponibles?ciudad&fecha_llegada&fecha_salida&personas` | Público | Hoteles con disponibilidad |
| GET | `/habitaciones/disponibles?nombreHotel&fecha_llegada&fecha_salida&personas` | Público | Habitaciones libres de un hotel |
| GET | `/imagenes?id` | Público | Imágenes de un hotel |
| POST | `/reservas` | Autenticado | Crear reserva |
| GET | `/reservas?email` | Autenticado | Reservas de un usuario |
| DELETE | `/reservas/{id}` | Autenticado | Cancelar reserva |
| GET | `/usuarios` | Autenticado | Consultar usuario |
| PUT | `/usuarios/{email}` | Autenticado | Modificar datos |
| PUT | `/usuarios/puntos/{id}` | Autenticado | Poner puntos a 0 (tras canjearlos) |
| DELETE | `/usuarios/{email}` | Autenticado | Eliminar cuenta |

Las rutas autenticadas requieren la cabecera `Authorization: Bearer <token>`.

## Puesta en marcha

### Requisitos

- JDK 17+
- Node.js 18+ y npm
- MySQL 8 en `localhost:3306`

### 1. Base de datos

Crear una base de datos vacía:

```sql
CREATE DATABASE db_hotelapp CHARACTER SET utf8mb4;
```

### 2. Backend

Revisa `backend_hotelapp/src/main/resources/application.properties` y ajusta `spring.datasource.username` / `spring.datasource.password` a tu instalación de MySQL. Después:

```bash
cd backend_hotelapp
./mvnw spring-boot:run        # en Windows: mvnw.cmd spring-boot:run
```

La API queda en `http://localhost:8080`. Al arrancar, Hibernate recrea el esquema (`ddl-auto=create`) y `import.sql` carga roles, hoteles, habitaciones e imágenes de ejemplo.

### 3. Frontend

```bash
cd frontend_hotelapp
npm install
npm run dev
```

La aplicación queda en `http://localhost:5173` (origen permitido por la configuración CORS del backend).

Para generar la versión de producción: `npm run build`.

## Notas y limitaciones conocidas

- `spring.jpa.hibernate.ddl-auto=create` **borra y recrea** las tablas en cada arranque; cámbialo a `update` o `validate` si quieres conservar datos.
- La clave de firma del JWT se genera aleatoriamente al arrancar (`TokenJwtConfig`), por lo que los tokens dejan de ser válidos al reiniciar el backend.
- La URL de la API (`http://localhost:8080`) está escrita directamente en los servicios del frontend (`src/services`, `src/auth/services`).
- Las credenciales de MySQL están en `application.properties`; para desplegar conviene moverlas a variables de entorno.
- Los usuarios de ejemplo de hoteles en `import.sql` usan contraseñas de prueba en texto plano; son solo datos de demostración.
- Hay un solo test (`BackendHotelappApplicationTests`, de carga de contexto).
