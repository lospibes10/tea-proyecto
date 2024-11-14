import { connection } from "../database/database.js";
import { generarJwt } from "../helpers/generar-jwt.js";

export async function login(req, res) {
  const { username, password } = req.body;
  
  try {
    // Conexión a la base de datos
    const conexion = await connection();
    
    // Consulta a la base de datos
    const [usuario] = await conexion.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    const user = usuario[0]; // Tomamos el primer usuario encontrado

    // Validación de usuario
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Generar token JWT de forma asíncrona
    const token = await generarJwt(usuario[0].id);

    // Almacenar el token en la sesión del servidor
    console.log(req.session)
    req.session.token = token;

    // Almacenar el token en una cookie segura
    res.cookie('authToken', token, {
      httpOnly: false, // Cambia a false para poder acceder a ella
      secure: false, // Cambia a true si estás usando HTTPS
      sameSite: 'Lax', // Para asegurar que funcione en localhost
      path: '/' // Asegura que esté disponible en todas las rutas
  });
  
  

    return res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
}

export async function register(req, res) {
  const { name, surname, username, password, phone, email } = req.body;
  const conexion = await connection();
  
  try {
    // Verificar si el usuario o el email ya existen
    const [existingUser] = await conexion.query("SELECT * FROM users WHERE username = ? OR email = ?", [username, email]);
    
    if (existingUser.length > 0) {
      return res.status(400).json({ msg: "El username o email ya están en uso" });
    }
    
    // Insertar el nuevo usuario si no existe duplicado
    const [nuevoUsuario] = await conexion.query("INSERT INTO users (name, surname, username, password, phone, email) VALUES (?, ?, ?, ?, ?, ?)", [name, surname, username, password, phone, email]);
    
    if (!nuevoUsuario) {
      res.json({ msg: "Error al crear el usuario" });
    } else {
      res.json({ msg: "Usuario creado exitosamente", nuevoUsuario });
    }
  } catch (error) {
    console.log("Error al crear el nuevo usuario", error);
    res.status(500).json({ msg: "Error interno del servidor" });
  } finally {
    conexion.end(); // Cerrar la conexión después de completar la operación
  }
}


export function session(req, res) {
  console.log(req.user);
  return res.json({
    message: "Acceso permitido a área protegida",
    user: req.user,
  });
}

export function logout(req, res) {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error al cerrar sesión" });
      }

      res.clearCookie("authToken");
      return res.json({ message: "Cierre de sesión exitoso" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
}