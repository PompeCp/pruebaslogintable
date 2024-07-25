const router = require("express").Router();
const productoscontroller = require("../controllers/productoscontroller");

// CONSULTAR TODOS LOS productos
router.get("/", productoscontroller.listarproductos);

// CONSULTAR UN producto
router.get("/:id", productoscontroller.listarproducto);

// AGREGAR productos
router.post("/", productoscontroller.agregarproducto);

// CAMBIAR ESTADO DEL productos
router.put("/estado/:id", productoscontroller.estadoproducto);

// MODIFICAR productos
router.put("/:id", productoscontroller.editarproducto);

module.exports = router;
