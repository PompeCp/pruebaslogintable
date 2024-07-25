import DefaultLayout from "../layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { validacliente } from "../servicios";
import { useAuth } from "./Authprovider";



export default function Login() {
  const [form, setForm] = useState({
    username: "",
    pass: "",
  });
  const {isAuthenticated, loginU } = useAuth();
  const changeForm = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const sendForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await validacliente(form);
    if (response?.data.data) {
      console.log(response.data.token)
      loginU(response.data.token)
    } else {
      console.log(response?.data.msg);
    }
  };

  return (
    <DefaultLayout>
      <form className="form" onSubmit={sendForm}>
        <h1>Login</h1>
        <label>username</label>
        <input
          type="text"
          onChange={(event) => {
            changeForm("username", event.target.value);
          }}
          required
          autoComplete="off"
        />
        <label>password</label>
        <input
          type="password"
          onChange={(event) => {
            changeForm("pass", event.target.value);
          }}
          required
          autoComplete="off"
        />
        <button>Login</button>
      </form>
    </DefaultLayout>
  );
}
