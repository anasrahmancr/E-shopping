import express from 'express';
import auth from '../middlewares/auth.js';
import { searchProducts } from '../controllers/products.js';


const routes = express.Router();

routes.get('/search', auth, searchProducts);

export default routes;