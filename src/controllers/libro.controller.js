import { getConnection, sql, queries } from "../database";

export const getLibros = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllLibros);
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const createNewLibro = async (req, res) => {
    const { nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo } = req.body

    if (nombre == null || descripcion == null || autor == null ||
        fecha_publicacion == null || numero_ejemplares == null || costo == null) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("descripcion", sql.VarChar, descripcion)
            .input("autor", sql.VarChar, autor)
            .input("fecha_publicacion", sql.DateTime, fecha_publicacion)
            .input("numero_ejemplares", sql.Int, numero_ejemplares)
            .input("costo", sql.Float, costo)
            .query(queries.addNewItem)

        res.json({ nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo });
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getLibroById = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", id)
        .query(queries.getLibroById);

    res.send(result.recordset[0])
};

export const deleteLibro = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", id)
        .query(queries.deleteLibro);

    res.sendStatus(204);
};

export const countTotalLibros = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.countTotalLibros);

    res.json(result.recordset[0][''])
}

export const updateLibroById = async (req, res) => {

    const { nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo } = req.body;

    const { id } = req.params;

    if (nombre == null || descripcion == null || autor == null ||
        fecha_publicacion == null || numero_ejemplares == null || costo == null) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }

    const pool = await getConnection();
    await pool.request()
        .input("nombre", sql.VarChar, nombre)
        .input("descripcion", sql.VarChar, descripcion)
        .input("autor", sql.VarChar, autor)
        .input("fecha_publicacion", sql.DateTime, fecha_publicacion)
        .input("numero_ejemplares", sql.Int, numero_ejemplares)
        .input("costo", sql.Float, costo)
        .input("id",sql.Int,id)
        .query(queries.updateLibroById)

    res.json({ nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo })
}