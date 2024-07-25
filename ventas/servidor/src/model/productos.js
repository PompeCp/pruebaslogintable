const database = require("../database");

module.exports = function () {
  async function listproductos() {
    const query = await database.query(
      "SELECT p.id_productos, p.nombre, p.precio, p.stock,pro.nombre AS proveedor, cat.nombre AS categoria  FROM productos p,proveedores pro ,categorias cat WHERE p.id_proveedores = pro.id_proveedores AND p.id_categorias = cat.id_categorias AND  p.estado = TRUE"
    );
    return query;
  }
  async function listproducto(id) {
    const query = await database.query(
      "SELECT p.nombre, p.precio, p.stock,pro.nombre as proveedor, cat.nombre as categoria  FROM productos p,proveedores pro ,categorias cat WHERE p.id_proveedores = pro.id_proveedores and p.id_categorias = cat.id_categorias and  p.estado = TRUE and p.id_productos = ?",
      id
    );
    return query;
  }
  async function agregarproductos(datos) {
    const query = await database.query(
      "INSERT INTO productos(nombre, precio, stock, id_proveedores, id_categorias, estado) VALUES (?,?,?,?,?,TRUE)",
      datos
    );
    return query;
  }

  async function estadoproductos(id) {
    const resultados = await database.query(
      "SELECT estado FROM productos WHERE id_productos = ?",
      [id]
    );
    if (resultados && [resultados].length > 0) {
      const estadoActual = resultados[0].estado;
      const nuevoEstado = !estadoActual;
      const resultadoUpdate = await database.query(
        "UPDATE productos SET estado = ? WHERE id_productos = ?",
        [nuevoEstado, id]
      );
      return resultadoUpdate;
    } else {
      throw new Error(`No se encontró un habitacion con id ${id}`);
    }
  }

  async function editarproductos(datos) {
    const query = await database.query(
      "UPDATE productos SET nombre = ?, precio = ?,  stock = ?,id_proveedores = ?,id_categorias = ?  WHERE id_productos = ?",
      datos
    );
    return query;
  }



  return {
    listproductos,
    listproducto,
    agregarproductos,
    estadoproductos,
    editarproductos,
  };
};
