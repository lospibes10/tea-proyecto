import { Router } from "express";
import { verificarJwt } from "../middlewares/validar-jwt.js";
import { login, logout, register, session } from "../controllers/auth.controllers.js";
export const sessionRoutes = Router();

sessionRoutes.post('/login', login );

// Endpoint para validar la sesión
sessionRoutes.get('/session', verificarJwt , session );

// Endpoint de cierre de sesión (logout)
sessionRoutes.post('/logout', logout);

sessionRoutes.post('/register', register)