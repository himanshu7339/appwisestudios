import express from 'express';
import { createComment, getComments } from '../controllers/comment.controller.js';


const router = express.Router();

// Route to create a comment
router.post('/create', createComment);

// Route to get all comments
router.get('/', getComments);



export default router;
