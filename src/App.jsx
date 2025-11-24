import ProductsPage from "./components/ProductsPage";
import FormPage from "./components/FormPage";
import AuthPage from "./components/AuthPage";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <div className="container mt-4">
      <h1>Examen Final - Programación de Componentes</h1>

      <ProductsPage />
      <hr />

      <FormPage />
      <hr />

      <AuthPage />
      <hr />

      <UploadImage />
    </div>
  );
}

export default App;
