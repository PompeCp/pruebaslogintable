import { useAuth } from "./Authprovider";
import {
  getProductos,
  addProductos,
  editProductos,
  deleteProductos,
  getselectcat,
  getselectprov,
} from "../servicios/index";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Dashboard = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const datos = await getProductos();
    if (datos?.status === 200) {
      setProductos(datos.data.object);
    }
  };
  useEffect(() => {
    fetchProductos();
  }, []);

  const [proveedores, setProveedores] = useState([]);

  const fetchProveedores = async () => {
    const datos = await getselectprov();
    if (datos?.status === 200) {
      setProveedores(datos.data);
    }
  };
  useEffect(() => {
    fetchProveedores();
  }, []);

  const [categorias, setCategorias] = useState([]);

  const fetchCategorias = async () => {
    const datos = await getselectcat();
    if (datos?.status === 200) {
      setCategorias(datos.data);
    }
  };
  useEffect(() => {
    fetchCategorias();
  }, []);

  

  const { logout, user } = useAuth();
  const handleLogout = () => {
    logout();
  };

  const formde = {
    nombre: "",
    precio: "",
    stock: "",
    id_proveedores: "",
    id_categorias: "",
    tipoModal: "",
    id: "",
  };

  const [modal1, setModal1] = useState(false);
  const openModal = async () => {
    setModal1(!modal1);
    setForm(formde);
  };
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
    id_proveedores: "",
    id_categorias: "",
    tipoModal: "",
    id: "",
  });
  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
  };
  const addForm = async (event: any) => {
    event.preventDefault();
    await addProductos(form);
    setModal1(!modal1);
    await fetchProductos();
  };

  const selecProducto = (productoSeleccionado: any) => {
    const {
      nombre,
      precio,
      stock,
      id_proveedores,
      id_categorias,
      id_productos,
    } = productoSeleccionado;
    setForm({
      nombre,
      precio,
      stock,
      id_proveedores,
      id_categorias,
      tipoModal: "editar",
      id: id_productos,
    });
    setModal1(true);
  };

  const editarHotel = async (event: any) => {
    event.preventDefault();
    await editProductos(form.id, form);
    setModal1(!modal1);
    await fetchProductos();
  };

  const deshabilitarstate = async (item: any) => {
    const opcion = window.confirm(
      `Estás Seguro que deseas cambiar el estado del producto ${item.id_productos}`
    );
    if (opcion) {
      try {
        await deleteProductos(item.id_productos);
        await fetchProductos();
      } catch (error) {
        console.log("Error al deshabilitar el producto:", error);
      }
    }
  };
  return (
    <>
     Bienvenido  {user?.nombre}
      <button type="button" onClick={handleLogout}>
        Logout
      </button>

      <div className="container__ContenedorBotones">
        <button
          className="container__ContenedorBotones__Botonmodal"
          onClick={() => openModal()}
        >
          crear Producto
        </button>
      </div>
      <Modal
        State={modal1}
        setModal1={setModal1}
        titulo={form.tipoModal === "editar" ? "Editar Hotel" : "Crear Producto"}
        showHeader={true}
        showOverlay={true}
      >
        <div className="container__Contenidomodal">
          <form
            className="container__Contenidomodal__Formulariomodal"
            onSubmit={form.tipoModal === "editar" ? editarHotel : addForm}
          >
            <span>Nombre</span>
            <input
              className="input-n"
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              name="nombre"
              onChange={(event) => {
                changeForm("nombre", event.target.value);
              }}
              required
              autoComplete="off"
            />
            <span>precio</span>
            <input
              className="input-n"
              type="text"
              placeholder="precio"
              value={form.precio}
              name="precio"
              onChange={(event) => {
                changeForm("precio", event.target.value);
              }}
              required
              autoComplete="off"
            />

            <span>stock</span>
            <input
              className="input-n"
              type="text"
              placeholder="stock"
              value={form.stock}
              name="stock"
              onChange={(event) => {
                changeForm("stock", event.target.value);
              }}
              required
              autoComplete="off"
            />
            <span>proveedor</span>
            <select
              name="proveedor"
              id="proveedor"
             className="inputsel"
              onChange={(event) => {
                changeForm("id_proveedores", event.target.value);
              }}
              required
            >
              <option value="" disabled selected>
                slecciona un proveedor
              </option>
              {proveedores && proveedores.length > 0 ? (
                proveedores.map((item: any) => (
                  <option key={item.id_proveedores} value={item.id_proveedores}>
                    {item.nombre}
                  </option>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No hay productos disponibles</td>
                </tr>
              )}
            </select>
            <span>categoria</span>
            <select
            className="inputsel"
              name="id_categorias"
              id="id_categorias"
              onChange={(event) => {
                changeForm("id_categorias", event.target.value);
              }}
              required
            >
              <option value="" disabled selected>
                slecciona una categoria
              </option>
              {categorias && categorias.length > 0 ? (
                categorias.map((item: any) => (
                  <option key={item.id_categorias} value={item.id_categorias}>
                    {item.nombre}
                  </option>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No hay productos disponibles</td>
                </tr>
              )}
            </select>
            <div>
              <button type="submit">
                {form.tipoModal === "editar" ? "Guardar cambios" : "Crear"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <table border={1}>
        <thead>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Proveedor</th>
          <th>Categoria</th>
          <th>acciones</th>
        </thead>
        <tbody>
          {productos && productos.length > 0 ? (
            productos.map((item: any) => (
              <tr key={item.id_cliente}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.stock}</td>
                <td>{item.proveedor}</td>
                <td>{item.categoria}</td>
                <td>
                  <button onClick={() => selecProducto(item)}>Editar</button>
                  <button onClick={() => deshabilitarstate(item)}>
                    Estado
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No hay productos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
