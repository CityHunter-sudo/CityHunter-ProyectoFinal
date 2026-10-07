# Documentación de Servicios — City Hunter API

Este archivo documenta cada servicio (endpoint) a medida que se va construyendo,
tal como lo pide la evidencia GA7-220501096-AA5-EV03.

---

## Módulo: Usuarios

### 1. Registro de Usuario

- **Método:** POST
- **URL:** `http://localhost:4000/api/usuarios/registro`
- **Body (JSON):**
  ```json
  {
    "nombreCompleto": "Juan Pérez",
    "correo": "juan@example.com",
    "contrasena": "ClaveSegura123",
    "telefono": "3001234567",
    "tipoDocumento": "CC",
    "numDocumento": "123456789",
    "rol": "Cliente"
  }
  ```
  El campo `rol` es opcional: acepta `"Cliente"` (por defecto) o `"Empresa"`.

- **Respuestas:**
  | Caso | Código | Mensaje |
  |---|---|---|
  | Registro exitoso | `201 Created` | "Registro satisfactorio en City Hunter" |
  | Correo o documento ya registrado | `409 Conflict` | "El usuario ya está registrado" |
  | Faltan campos obligatorios | `400 Bad Request` | "Todos los campos son obligatorios" |
  | Error de servidor | `500 Internal Server Error` | detalle del error |

### 2. Inicio de Sesión

- **Método:** POST
- **URL:** `http://localhost:4000/api/usuarios/login`
- **Body (JSON):**
  ```json
  {
    "correo": "juan@example.com",
    "contrasena": "ClaveSegura123"
  }
  ```

- **Respuestas:**
  | Caso | Código | Mensaje |
  |---|---|---|
  | Credenciales correctas | `200 OK` | "Autenticación satisfactoria" (incluye datos básicos del usuario y su rol) |
  | Correo no existe o contraseña incorrecta | `401 Unauthorized` | "Error en la autenticación" |
  | Faltan campos | `400 Bad Request` | "Correo y contraseña son obligatorios" |

### Notas de implementación

- La contraseña se guarda **hasheada** con `bcryptjs`, nunca en texto plano.
- El registro asigna automáticamente el rol "Cliente" si no se especifica otro,
  buscando el documento correspondiente en la colección `roles` (por eso es
  importante haber corrido el script `scripts/crear_colecciones.js` antes,
  que crea esos roles semilla).

---

## Próximos servicios a documentar aquí

- [ ] Productos (listar, ver detalle, crear)
- [ ] Pedidos
- [ ] Tickets de soporte
- [ ] Envíos
