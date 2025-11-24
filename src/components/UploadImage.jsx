import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UploadImage() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const subirImagen = async () => {
    if (!file) return alert("Selecciona una imagen primero");

    const imageRef = ref(storage, `imagenes/${file.name}`);

    await uploadBytes(imageRef, file);

    const downloadURL = await getDownloadURL(imageRef);
    setUrl(downloadURL);
  };

  return (
    <div className="container mt-4">
      <h2>Subir Imagen</h2>

      <input
        type="file"
        className="form-control"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="btn btn-warning mt-3" onClick={subirImagen}>
        Subir imagen
      </button>

      {url && (
        <div className="mt-3">
          <p>Imagen subida:</p>
          <img src={url} alt="Imagen subida" width="250" />
        </div>
      )}
    </div>
  );
}

export default UploadImage;
