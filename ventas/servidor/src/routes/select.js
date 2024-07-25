const router = require("express").Router();
const selectcontroler = require("../controllers/selectcontroler");

router.get("/prov", selectcontroler.listarprovedoresname);

router.get("/cat", selectcontroler.listarcategoriasname);

module.exports = router;