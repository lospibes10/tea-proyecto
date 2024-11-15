import { connection } from '../database/database.js';

export async function updateUserImage(req, res) {
    const userId = req.params.id; // ID del usuario
    const imageType = req.params.type; // 'profile' para perfil, 'cover' para portada
    const imageData = req.file.buffer; // El archivo cargado estará en req.file.buffer

    if (!imageData) {
        return res.status(400).json({ message: "No se ha enviado ninguna imagen" });
    }

    // Selecciona el campo a actualizar en función del tipo de imagen
    const column = imageType === 'profile' ? 'photo' : 'front_page';
    const query = `UPDATE users SET ${column} = ? WHERE id = ?`;

    const conexion = await connection();

    conexion.query(query, [imageData, userId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error al actualizar la imagen" });
        }
        res.status(200).json({ message: "Imagen actualizada correctamente" });
        console.log("imagen cargada correctamente");
    });
}


// Controlador para obtener la imagen de perfil en formato base64 con MIME
export async function getUserProfilePhoto(req, res) {
    const userId = req.params.id;
    const query = `SELECT photo FROM users WHERE id = ? LIMIT 1`;
    const conexion = await connection();

    try {
        console.log(`Solicitando imagen de perfil del usuario ${userId}`);

        const [results] = await conexion.query(query, [userId]);
        console.log("Resultado de la consulta:", results);

        if (results.length > 0 && results[0].photo) {
            const image = Buffer.from(results[0].photo).toString('base64');
            console.log("Imagen de perfil encontrada, enviando en formato base64");

            // Evita el almacenamiento en caché de la imagen y agrega tipo MIME
            res.setHeader('Cache-Control', 'no-store');
            res.status(200).json({ data: `data:image/jpeg;base64,${image}` }); // Agrega MIME
        } else {
            console.log("No se encontró imagen de perfil para el usuario.");
            res.status(404).json({ message: "No tiene imagen aún." });
        }
    } catch (error) {
        console.error("Error en la consulta de la base de datos:", error);
        res.status(500).json({ message: "Error al obtener la imagen" });
    } finally {
        await conexion.end(); // Cierra la conexión
    }
}

// Controlador para obtener la imagen de portada en formato base64 con MIME
export async function getUserCoverPhoto(req, res) {
    const userId = req.params.id;
    const query = `SELECT front_page FROM users WHERE id = ? LIMIT 1`;
    const conexion = await connection();

    try {
        console.log(`Solicitando imagen de portada del usuario ${userId}`);

        const [results] = await conexion.query(query, [userId]);
        console.log("Resultado de la consulta:", results);

        if (results.length > 0 && results[0].front_page) {
            const image = Buffer.from(results[0].front_page).toString('base64');
            console.log("Imagen de portada encontrada, enviando en formato base64");

            // Evita el almacenamiento en caché de la imagen y agrega tipo MIME
            res.setHeader('Cache-Control', 'no-store');
            res.status(200).json({ data: `data:image/jpeg;base64,${image}` }); // Agrega MIME
        } else {
            console.log("No se encontró imagen de portada para el usuario.");
            res.status(404).json({ message: "No tiene imagen aún." });
        }
    } catch (error) {
        console.error("Error en la consulta de la base de datos:", error);
        res.status(500).json({ message: "Error al obtener la imagen" });
    } finally {
        await conexion.end(); // Cierra la conexión
    }
}
