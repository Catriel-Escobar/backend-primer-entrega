import express from 'express';
import productRoutes from './product.routes.js';
import saleRoutes from './sale.routes.js';
import supplierRoutes from './supplier.routes.js';
import { Product } from '../models/product.js';

const router = express.Router();

// Montar las rutas
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/catalogo', (req, res) => {
  Product.find()
    .then((products) => {
      res.render('catalog', { products });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error al obtener los productos');
    });
});

export default router;
