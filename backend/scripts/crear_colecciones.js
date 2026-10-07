use("CityHunterDB")

// --- 1. Creación de las 21 colecciones ---

// Usuarios y empresas
db.createCollection("roles")
db.createCollection("usuarios")
db.createCollection("direcciones")
db.createCollection("empresas")

// Ventas
db.createCollection("categorias")
db.createCollection("productos")
db.createCollection("inventario")
db.createCollection("estadosPedido")
db.createCollection("pedidos")
db.createCollection("detallePedidos")
db.createCollection("pagos")

// Soporte técnico
db.createCollection("estadosTicket")
db.createCollection("tickets")
db.createCollection("evidenciasTicket")
db.createCollection("historialTicket")

// Empresarial
db.createCollection("cotizaciones")
db.createCollection("contratosSLA")
db.createCollection("citas")

// Logística
db.createCollection("envios")

// Interacción
db.createCollection("mensajesContacto")
db.createCollection("articulosBlog")

// --- 2. Datos semilla de los catálogos ---

db.roles.insertMany([
  { nombre: "Administrador", descripcion: "Acceso total" },
  { nombre: "Tecnico", descripcion: "Gestion tickets" },
  { nombre: "Cliente", descripcion: "Cliente particular" },
  { nombre: "Empresa", descripcion: "Cliente empresarial" }
])

db.categorias.insertMany([
  { nombre: "Consolas" },
  { nombre: "Videojuegos" },
  { nombre: "Componentes PC" },
  { nombre: "Figuras Coleccionables" },
  { nombre: "Accesorios" },
  { nombre: "Servicio Tecnico" }
])

db.estadosTicket.insertMany([
  { nombre: "Abierto" },
  { nombre: "Diagnostico" },
  { nombre: "Reparacion" },
  { nombre: "Esperando Repuesto" },
  { nombre: "Finalizado" },
  { nombre: "Entregado" },
  { nombre: "Cancelado" }
])

db.estadosPedido.insertMany([
  { nombre: "Pendiente" },
  { nombre: "Pagado" },
  { nombre: "En preparacion" },
  { nombre: "Enviado" },
  { nombre: "Entregado" },
  { nombre: "Cancelado" }
])

// --- 3. Índices ---

// Evitan correos y documentos duplicados
db.usuarios.createIndex({ correo: 1 }, { unique: true })
db.usuarios.createIndex({ numDocumento: 1 }, { unique: true })

// Acelera la búsqueda de productos por nombre
db.productos.createIndex({ nombre: 1 })

// Acelera consultas frecuentes: "tickets de este usuario", "tickets en este estado"
db.tickets.createIndex({ usuarioId: 1 })
db.tickets.createIndex({ estadoId: 1 })

// Acelera consultas frecuentes sobre pedidos
db.pedidos.createIndex({ usuarioId: 1 })
db.pedidos.createIndex({ estadoId: 1 })

// Evita NIT duplicados
db.empresas.createIndex({ nit: 1 }, { unique: true })

// El código de trazabilidad de un envío debe ser único
db.envios.createIndex({ codigoTrazabilidad: 1 }, { unique: true })

print("CityHunterDB creada correctamente con 21 colecciones")
