const database = require("../database");

module.exports = function () {
  async function listclientes() {
    const query = await database.query(
      "SELECT c.rut, c.nombre,c.username, c.pass, c.direccion  FROM clientes c WHERE  c.estado = TRUE"
    );
    return query;
  }
  async function dataClient(username) {
    console.log(username);
    const query = await database.query(
      `SELECT 
    c.rut, 
    c.nombre, 
    c.username, 
    c.direccion, 
    CONCAT('[', GROUP_CONCAT(JSON_OBJECT('numero', t.numero)), ']') AS numeros 
FROM 
    clientes c
JOIN 
    telefonos t 
ON 
    c.id_cliente = t.id_clientes 
WHERE 
    c.estado = TRUE 
    AND c.username = ?
GROUP BY 
    c.rut, c.nombre, c.username, c.pass, c.direccion;
`,[username]
    );
    return query;
  }
  async function listcliente(username) {
    const query = await database.query(
      "SELECT c.pass  FROM clientes c WHERE  c.estado = TRUE and  c.username = ?",
      [username]
    );
    return query;
  }
  async function listclientenum(id) {
    const query = await database.query(
      "SELECT t.numero FROM clientes c, telefonos t WHERE c.id_cliente= ? AND c.id_cliente=t.id_clientes AND c.estado = TRUE",
      id
    );
    return query;
  }

  async function addclientes(datos) {
    const query = await database.query(
      "INSERT INTO clientes(rut, nombre, username, pass, direccion, estado) VALUES (?,?,?,?,?,TRUE)",
      datos
    );
    return query;
  }
  async function addtelefono(datos2) {
    const rut = datos2[0];
    const phone = datos2[1];
    const resul = await database.query(
      "SELECT id_cliente FROM clientes WHERE rut = ?",
      rut
    );
    const id = resul[0].id_cliente;
    for (let a = 0; a < phone.length; a++) {
      const query = await database.query(
        "INSERT INTO telefonos(id_clientes, numero,estado) VALUES (?,?,TRUE)",
        [id, phone[a]]
      );
      console.log(phone.length);
    }
    return "añadido telefonos y cliente";
  }
  return {
    listclientes,
    listcliente,
    listclientenum,
    addclientes,
    addtelefono,
    dataClient,
  };
};
