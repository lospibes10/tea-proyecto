// backend/routes/imageRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const imageController = require('../controllers/imageControllers');

// Configuración de Multer para manejar archivos en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rutas para actualizar y obtener imágenes de usuario
router.post('/upload/:id/:type', upload.single('image'), imageController.updateUserImage);
router.get('/:id/:type', imageController.getUserImage);

module.exports = router;