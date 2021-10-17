import {getConnection,sql} from '../database/connection'

export const getLibros = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
    .request()
    .query('SELECT * FROM libro');
    
    res.json(result.recordset)
};

export const createNewLibro = (req,res) => {
    const {nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo} = req.body;
   
    if(nombre == null || descripcion == null || autor == null || fecha_publicacion == null ||
       numero_ejemplares == null || costo == null)
    {
        return res.status(400).json({msg: "Bad Request. Please Fill all fields"});
    }

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("nombre",sql.VarChar, nombre)
    .input("descripcion",sql.VarChar,descripcion)
    .input("autor",sql.VarChar,autor)
    .input("fecha_publicacion",sql.DateTime,fecha_publicacion)
    .input("numero_ejemplares",sql.Int,numero_ejemplares)
    .input("costo",sql.Float,costo)
    .query(
        "INSERT INTO libro (nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo)" 
        +"VALUES (@nombre, @descripcion, @autor, @fecha_publicacion, @numero_ejemplares, @costo)"
    );

    console.log(result);
    
    res.json({nombre,descripcion,autor,fecha_publicacion,numero_ejemplares,costo})
}