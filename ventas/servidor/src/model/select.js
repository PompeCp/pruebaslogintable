const database = require("../database");

module.exports = function () {
async function listprovname() {
    const query = await database.query(
      "SELECT pro.id_proveedores,pro.nombre FROM proveedores pro WHERE pro.estado = TRUE"
    );
    return query;
  }
  
  async function listcatename() {
    const query = await database.query(
      "SELECT cat.id_categorias,cat.nombre FROM categorias cat WHERE cat.estado = TRUE"
    );
    return query;
  }

  return {
    listcatename,
    listprovname,

  };
};
