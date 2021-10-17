export const queries = {
    getAllLibros: 'SELECT * FROM libro',
    addNewItem:
        'INSERT INTO libro (nombre, descripcion, autor, fecha_publicacion, numero_ejemplares, costo)' +
        'VALUES (@nombre, @descripcion, @autor, @fecha_publicacion, @numero_ejemplares, @costo)',
    getLibroById: 'SELECT * FROM libro WHERE id = @id',
    deleteLibro: 'DELETE FROM libro WHERE id = @id',
    countTotalLibros: 'SELECT COUNT(*) FROM libro',
    updateLibroById: 'UPDATE libro SET nombre = @nombre, descripcion = @descripcion, autor = @autor,'+
    'fecha_publicacion = @fecha_publicacion, numero_ejemplares = @numero_ejemplares, costo = @costo '+
    'WHERE id = @id'
}