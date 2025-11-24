import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [user, setUser] = useState(null);

  const registrar = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      setMensaje("Registro exitoso ✔");
    } catch (error) {
      setMensaje(error.message);
    }
  };

  const iniciarSesion = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      setMensaje("Inicio de sesión exitoso ✔");
    } catch (error) {
      setMensaje(error.message);
    }
  };

  const cerrarSesion = async () => {
    await signOut(auth);
    setUser(null);
    setMensaje("Sesión cerrada ✔");
  };

  return (
    <div className="container mt-4">
      <h2>Autenticación</h2>

      {mensaje && <div className="alert alert-info">{mensaje}</div>}

      {!user ? (
        <>
          <div className="mb-3">
            <label>Correo</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary me-2" onClick={registrar}>
            Registrar
          </button>

          <button className="btn btn-success" onClick={iniciarSesion}>
            Iniciar sesión
          </button>
        </>
      ) : (
        <div>
          <p>Usuario actual: {user.email}</p>
          <button className="btn btn-danger" onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
