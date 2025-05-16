import { env } from './config/env.js';
import path from 'path';
import route from './routes/routes.js';
import express from 'express';
import { connectDB } from './config/mongo.config.js';
import { fileURLToPath } from 'url';

// Establecer conexión a la base de datos de MongoDb
connectDB(env.MONGO_URL);

const app = express();

// Configurar Pug como motor de plantillas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares para manejar datos JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setear las rutas
app.use('/api', route);

// Iniciar el servidor
app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
