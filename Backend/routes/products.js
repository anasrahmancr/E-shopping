import express from 'express';
import auth from '../middlewares/auth.js';
import { searchProducts, distinctCategories } from '../controllers/products.js';


const routes = express.Router();
// Product Search Api
routes.get('/search', searchProducts);

routes.get('/distinctCategories', distinctCategories)
export default routes;