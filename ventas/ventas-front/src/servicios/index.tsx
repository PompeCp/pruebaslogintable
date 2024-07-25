import axios from "axios";
export const api = `http://localhost:4000/`;

//Hotel---------------------------------
//GET-----------------------------------
export async function getProductos() {
  try {
    const response = await axios({
      url: api + `productos`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//GETonce-------------------------------
export async function getProducto(id:any,) {
  try {
    const response = await axios({
      url: api + `productos/${id}`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//POST--------------------------
export async function addProductos(form: any) {
  try {
    const response = await axios({
      url: api + `productos`,
      method: "POST",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
// validar
export async function validacliente(form: any) {
  try {
    const response = await axios({
      url: api + `clientes/validate`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUT--------------------------
export async function editProductos(id:any, form: any) {
  try {
    const response = await axios({
      url: api + `productos/${id}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUTstate--------------------------
export async function deleteProductos(id: any) {
  try {
    const response = await axios({
      url: api + `productos/estado/${id}`,
      method: "PUT",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//GET-----------------------------------
export async function getClientes() {
  try {
    const response = await axios({
      url: api + `clientes`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//GET-----------------------------------
export async function getselectprov() {
  try {
    const response = await axios({
      url: api + `select/prov`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function getselectcat() {
  try {
    const response = await axios({
      url: api + `select/cat`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}


//GETonce-------------------------------
export async function getCliente(id:any,) {
  try {
    const response = await axios({
      url: api + `cliente/${id}`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//GEToncenum-------------------------------
export async function getClientenum(id:any,) {
  try {
    const response = await axios({
      url: api + `clientes/num/${id}`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//POST--------------------------
export async function addClientes(form: any) {
  try {
    const response = await axios({
      url: api + `clientes`,
      method: "POST",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
  
}
