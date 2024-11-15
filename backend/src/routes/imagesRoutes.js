import { Router } from 'express';
import multer, { memoryStorage } from 'multer';
import { updateUserImage, getUserProfilePhoto, getUserCoverPhoto } from '../controllers/imageControllers.js';

export const imageRouter = Router();

// Configuración de Multer para manejar archivos en memoria
const storage = memoryStorage();
const upload = multer({ storage: storage });

// Rutas para actualizar y obtener imágenes de usuario
imageRouter.post('/images/upload/:id/:type', upload.single('image'), updateUserImage);
imageRouter.get('/images/:id/photo', getUserProfilePhoto);
imageRouter.get('/images/:id/front_page', getUserCoverPhoto);
