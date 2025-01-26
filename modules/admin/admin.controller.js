import express from 'express';
import { addDoctor } from './admin.service.js';
import upload from '../../middlewares/uploadMiddleware.js';
const adminRouter = express.Router();


adminRouter.post('/add-doctor',upload.single('image') , addDoctor);

export default adminRouter;