const modelo = require("../model/select");
exports.listarproductos = async (req, res) => {
    const object = await modelo().listproductos();
    res.json({ object });
  };
  
  exports.listarprovedoresname = async (req, res) => {
    const object = await modelo().listprovname();
    res.json(object);
  };
  
  exports.listarcategoriasname = async (req, res) => {
    const object = await modelo().listcatename();
    res.json(object); 
  };
  