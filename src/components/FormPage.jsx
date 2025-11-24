import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function FormPage() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [mensajeOK, setMensajeOK] = useState("");
  const validator = useRef(new SimpleReactValidator({ autoForceUpdate: this }));

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      try {
        await addDoc(collection(db, "form_data"), {
          ...form,
          fecha: serverTimestamp()
        });
        setMensajeOK("Formulario enviado correctamente ✔");
        setForm({ nombre: "", correo: "", mensaje: "" });
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      validator.current.showMessages();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Formulario de Contacto</h2>

      {mensajeOK && (
        <div className="alert alert-success">{mensajeOK}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <span className="text-danger">
            {validator.current.message("nombre", form.nombre, "required")}
          </span>
        </div>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
          <span className="text-danger">
            {validator.current.message("correo", form.correo, "required|email")}
          </span>
        </div>

        <div className="mb-3">
          <label>Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          ></textarea>
          <span className="text-danger">
            {validator.current.message("mensaje", form.mensaje, "required")}
          </span>
        </div>

        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default FormPage;
