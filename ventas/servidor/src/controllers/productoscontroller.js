const modelo = require("../model/productos");

exports.listarproductos = async (req, res) => {
  const object = await modelo().listproductos();
  res.json({ object });
};

exports.listarproducto = async (req, res) => {
  const { id } = req.params;
  const object = await modelo().listproducto([id]);
  res.json({ object });
};
exports.agregarproducto = async (req, res) => {
  const { nombre,precio,stock,id_proveedores,id_categorias } = req.body;
  console.log("soy idprov",id_proveedores);
  const datos = [nombre,precio,stock,id_proveedores,id_categorias];
  await modelo().agregarproductos(datos);
  res.json({ msg: "producto agregado" });
};

exports.estadoproducto = async (req, res) => {
  const { id } = req.params;
  await modelo().estadoproductos([id]);
  res.json({ msg: "estado del producto cambiado" });
};

exports.editarproducto = async (req, res) => {
  const { id } = req.params;
  const { nombre,precio,stock,id_proveedores,id_categorias } = req.body;
  const datos = [nombre,precio,stock,id_proveedores,id_categorias, id];
  await modelo().editarproductos(datos);
  res.json({ msg: "producto modificado" });
};


