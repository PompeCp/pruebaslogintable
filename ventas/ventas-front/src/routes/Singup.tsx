import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "./Authprovider";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { getClientes, addClientes } from "../servicios/index";

export default function Singup() {
  const [phones, setPhones] = useState<string[]>([]);
  const [currentPhone, setCurrentPhone] = useState<string>("");
  const [form, setForm] = useState({
    rut: "",
    nombre: "",
    username: "",
    pass: "",
    direccion: "",
    phone: phones
  });
  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const addForm = async (event: any) => {
    await addClientes(form);

  };

  const auth = useAuth();
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  const addPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPhone.trim() !== "") {
      phones.push(currentPhone.trim())
      setCurrentPhone("");
      
    }
  };

  const removePhone = (index: number) => {
    setPhones(phones.filter((_, i) => i !== index));
  };
  return (
    <>
      <DefaultLayout>
        <form className="form" onSubmit={addForm}>
          <h1>Register</h1>
          <label>RUT</label>
          <input
            type="numeric"
            onChange={(event) => {
              changeForm("rut", event.target.value);
            }}
            required
            autoComplete="off"
          />
          <label>Nombre</label>
          <input
            type="text"
            onChange={(event) => {
              changeForm("nombre", event.target.value);
            }}
            required
            autoComplete="off"
          />
          <label>Nombre de usuario</label>
          <input
            type="text"
            onChange={(event) => {
              changeForm("username", event.target.value);
            }}
            required
            autoComplete="off"
          />
          <label>Contraseña</label>
          <input
            type="password"
            onChange={(event) => {
              changeForm("pass", event.target.value);
            }}
            required
            autoComplete="off"
          />
          <label>direccion</label>
          <input
            type="text"
            onChange={(event) => {
              changeForm("direccion", event.target.value);
            }}
            required
            autoComplete="off"
          />
          <div>
            <label>Teléfonos</label>
            <div>
              <input
                type="text"
                value={currentPhone}
                onChange={(e) => setCurrentPhone(e.target.value)}
                placeholder="Digite sus numeros"
              />
              <button onClick={addPhone}>Agregar Teléfono</button>
            </div>
            <ul>
              {phones.map((phone, index) => (
                <li key={index}>
                  {phone}
                  <button type="button" onClick={() => removePhone(index)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button>Register</button>
        </form>
      </DefaultLayout>
    </>
  );
}
