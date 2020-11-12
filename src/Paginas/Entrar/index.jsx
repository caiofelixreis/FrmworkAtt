import React, { useState } from "react";
import authenticate from "../../services/authenticate";
import styles from "./style.module.scss";
import { useHistory } from "react-router-dom";

const Entrar = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const status = authenticate(form);
    if (!status.success) {
      return setError(status.message);
    }
    setError(null);
    setSuccess(status.message);
    setTimeout(() => history.push("/"), 1000);
  }

  return (
    <div className={styles.container}>
      <h1>Faça login</h1>
      <form onSubmit={handleSubmit}>
        {error && <span className={styles.error}>{error}</span>}
        {success && <span className={styles.success}>{success}</span>}
        <input
          type="text"
          value={form.email}
          label="Email"
          onChange={({ target }) => setForm({ ...form, email: target.value })}
        />
        <input
          type="password"
          value={form.password}
          label="Senha"
          onChange={({ target }) =>
            setForm({ ...form, password: target.value })
          }
        />
        <button type="submit">Entrar</button>
      </form>
      <p className={styles.tip}>
        Tente entrar com <b>example1@example.com</b> e senha <b>password</b>
      </p>
    </div>
  );
};

export default Entrar;
