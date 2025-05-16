import express from 'express';
import productRoutes from './product.routes.js';
import saleRoutes from './sale.routes.js';
import supplierRoutes from './supplier.routes.js';

const router = express.Router();

// Montar las rutas
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);
router.use('/suppliers', supplierRoutes);

export default router;
