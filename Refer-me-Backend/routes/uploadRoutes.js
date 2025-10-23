// routes/upload.routes.js
import express from 'express';
import upload from '../middlewares/upload.js';
import { uploadSingle, uploadMultiple } from '../controllers/uploadController.js';

const router = express.Router();
router.post('/uploadSingle', upload.single('photo'),uploadSingle);
router.post('/uploadMultiple', upload.array('photos', 5), uploadMultiple);

export default router;
