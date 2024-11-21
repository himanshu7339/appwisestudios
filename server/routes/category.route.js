import express from 'express';
import { createCategory, getCategories } from '../controllers/category.controller.js';


const router = express.Router();

// Route to create a category
router.post('/create', createCategory);

// Route to get all categories
router.get('/', getCategories);

export default router;
