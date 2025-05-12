# Primer Entrega - Proyecto Backend

Proyecto backend desarrollado con Node.js utilizando Express, MongoDB y el motor de plantillas Pug.

## Tecnologías

- Node.js
- Express
- MongoDB
- Pug (Motor de plantillas)
- Docker (para contenedor MongoDB)
- Zod (para validación de variables de entorno)

## Prerrequisitos

- Node.js (Se recomienda la última versión LTS)
- Docker y Docker Compose
- Git

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo de entorno:
   - Copiar `.env-example` a `.env`
   - Ajustar las variables si es necesario

```bash
copy .env-example .env
```

## Ejecutar MongoDB

El proyecto utiliza MongoDB en un contenedor Docker. Para iniciar la base de datos:

```bash
docker-compose up -d
```

## Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El servidor se iniciará en el puerto configurado (por defecto: 3050) con recarga automática habilitada.

## Estructura del Proyecto

```plaintext
.
├── src/
│   ├── app.js          # Punto de entrada de la aplicación
│   ├── config/         # Archivos de configuración
│   ├── controllers/    # Controladores de rutas
│   ├── models/         # Modelos de base de datos
│   ├── routes/         # Rutas de la aplicación
│   ├── services/       # Lógica de negocio
│   ├── utils/          # Funciones de utilidad
│   └── views/          # Plantillas Pug
├── .env               # Variables de entorno
├── .env-example       # Ejemplo de variables de entorno
├── docker-compose.yml # Configuración de Docker
└── package.json       # Dependencias del proyecto
```

## Variables de Entorno

- `PORT`: Puerto del servidor (por defecto: 3050)
- `MONGO_URL`: Cadena de conexión de MongoDB
- `NODE_ENV`: Modo de entorno (dev/test/production)

## Endpoints Disponibles

- `GET /`: Renderiza una página de prueba con datos de ejemplo

## Licencia

ISC
