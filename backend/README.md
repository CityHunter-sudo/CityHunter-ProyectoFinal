# City Hunter — Backend (Modelos MongoDB / Mongoose)

Modelos de datos del proyecto City Hunter, listos para usarse con Mongoose en
una API construida con Node.js + Express.

## Colecciones (21)

**Usuarios y empresas:** Rol, Usuario, Direccion, Empresa
**Ventas:** Categoria, Producto, Inventario, EstadoPedido, Pedido, DetallePedido, Pago
**Soporte técnico:** EstadoTicket, Ticket, EvidenciaTicket, HistorialTicket
**Empresarial:** Cotizacion, ContratoSLA, Cita
**Logística:** Envio
**Interacción:** MensajeContacto, ArticuloBlog

## Cómo usar los modelos

```javascript
const Usuario = require('./src/models/Usuario');

// Crear
const nuevo = await Usuario.create({
  nombreCompleto: 'Juan Pérez',
  correo: 'juan@example.com',
  contrasena: 'hash...',
  telefono: '3001234567',
  tipoDocumento: 'CC',
  numDocumento: '123456789',
  rolId: idDelRolCliente,
});

// Consultar, trayendo los datos del rol relacionado
const usuarios = await Usuario.find().populate('rolId');
```

## Conectar a MongoDB

1. Copia `.env.example` como `.env` y pega tu cadena de conexión real de MongoDB Atlas.
2. `npm install`
3. En tu `server.js`, antes de levantar Express:
   ```javascript
   require('dotenv').config();
   const conectarDB = require('./config/db');
   conectarDB();
   ```

## Decisiones de diseño a tener en cuenta

- **Empresa es independiente de Usuario**: un usuario con rol "Empresa" inicia
  sesión normalmente, pero sus datos corporativos (NIT, razón social) viven en
  su propio documento `Empresa`, ligado por `usuarioId`.
- **Envio cubre entrega Y recogida** con un solo modelo: el campo `tipo` decide
  si se usa `pedidoId` (entrega de compra) o `ticketId` (recogida para soporte).
- **EstadoPedido y EstadoTicket son catálogos aparte** (no texto libre), igual
  que en el diseño SQL de referencia, para evitar valores inconsistentes
  ("Pendiente" vs "pendiente" vs "PENDIENTE").
- **Pago está separado de Pedido** para poder registrar reintentos o varios
  métodos de pago sin tener que modificar el pedido original.
- Varios modelos usan `{ timestamps: true }`, que agrega automáticamente
  `createdAt` y `updatedAt` — por eso no todos tienen un campo manual de fecha.

## Pendiente para las siguientes evidencias

- Rutas y controladores (API REST) que usen estos modelos.
- Script de "seed" para cargar los datos iniciales de los catálogos (Rol,
  Categoria, EstadoTicket, EstadoPedido) — el mismo contenido que ya tenías
  en tu script de mongosh, pero traducido a `Model.insertMany([...])`.
