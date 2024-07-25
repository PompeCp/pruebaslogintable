const modelo = require("../model/clientes");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey="?!5ad15asd684_"

exports.listarclientes = async (req, res) => {
  const object = await modelo().listclientes();
  res.json({ object });
};

exports.listarcliente = async (req, res) => {
  const { id } = req.params;
  const object = await modelo().listcliente([id]);
  res.json({ object });
};

exports.listarclientenum = async (req, res) => {
    const { id } = req.params;
    const object = await modelo().listclientenum([id]);
    res.json({ object });
  };
exports.agregarclientes = async (req, res) => {
  const { rut, nombre, username, pass, direccion,phone } = req.body;
  let passhash = await bcrypt.hash(pass,8);
  const datos = [rut, nombre, username, passhash, direccion,phone];
  const datos2 = [rut,phone]
  await modelo().addclientes(datos);
  await modelo().addtelefono(datos2);
  res.json({ msg: "producto agregado" });
};

exports.validarcliente = async (req, res) => {
  try {
    const { username, pass } = req.body;
    const password = await modelo().listcliente([username]);
    
    if (!password || password.length === 0) {
      return res.json({ msg: "Usuario no encontrado", data: false });
    }

    const compare = await bcrypt.compare(pass, password[0].pass);
    
    if (compare) {
      const user = await modelo().dataClient(username);
      const token = jwt.sign({ user: user[0] }, secretKey, { expiresIn: '1h' });
      return res.json({ msg: "Validado correctamente", data: true, token: token });
    } else {
      return res.json({ msg: "Contraseña o usuario incorrectos", data: false });
    }
  } catch (error) {
    console.error("Error en validarcliente:", error);
    return res.status(500).json({ msg: "Error interno del servidor", data: false });
  }
};