import BaseController from './base.controller.js';
import { Supplier } from '../models/supplier.js';

/**
 * Controlador para gestionar proveedores
 * @extends BaseController
 */
class SupplierController extends BaseController {
  constructor() {
    super(Supplier);
  }

  /**
   * Obtiene proveedores por categoría
   * @param {Request} req - Objeto de solicitud Express
   * @param {Response} res - Objeto de respuesta Express
   * @param {Object} req.params - Parámetros de ruta
   * @param {string} req.params.category - Categoría del proveedor
   * @returns {Promise<Response>} Lista de proveedores de la categoría especificada
   */
  async getByCategory(req, res) {
    try {
      const suppliers = await this.model.find({
        category: req.params.category,
      });
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * Obtiene proveedores activos
   * @param {Request} req - Objeto de solicitud Express
   * @param {Response} res - Objeto de respuesta Express
   * @returns {Promise<Response>} Lista de proveedores activos
   */
  async getActiveSuppliers(req, res) {
    try {
      const suppliers = await this.model.find({ status: 'activo' });
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new SupplierController();
