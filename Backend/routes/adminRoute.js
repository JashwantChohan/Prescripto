import express from 'express';
import { addDoctor, adminLogin, allDoctors } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import auhtAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor', auhtAdmin, upload.single('image'), addDoctor)
adminRouter.post('/login', adminLogin)
adminRouter.post('/all-doctors', auhtAdmin, allDoctors)

export default adminRouter;
