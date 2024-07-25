const router = require("express").Router();
const clientescontroller = require("../controllers/clientescontroller");

// CONSULTAR TODOS LOS productos
router.get("/", clientescontroller.listarclientes);

// CONSULTAR UN producto
router.get("/:id", clientescontroller.listarcliente);

// CONSULTAR UN producto
router.get("/num/:id", clientescontroller.listarclientenum);


// AGREGAR productos
router.post("/", clientescontroller.agregarclientes);

//validar cliente
router.post("/validate", clientescontroller.validarcliente);


module.exports = router;
