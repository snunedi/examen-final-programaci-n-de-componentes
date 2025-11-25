Proyecto Final: Examen de Programación de Componentes

Asignatura:Programación de Componentes.

Integrantes:Damian Zambrano-Stephanie Nuñez

Objetivos del Proyecto

Este proyecto cumple con los siguientes objetivos de aprendizaje: Construir una aplicación web con librería de React según requerimientos específicos. Implementar servicios cloud en aplicación web React según requerimientos específicos y estándares de la industria. Obtener desplegables de aplicación para entornos web y mobile según estándares de la industria.


Contenidos Implementados

Esta aplicación demuestra la aplicación de los siguientes conceptos abordados: JSX , Componentes (funcionales, de clase) , Props y State , Métodos del ciclo de vida , Eventos , Comunicación entre componentes (padre-hijo e hijo-padre) , Formularios y validaciones , Enrutamiento (react-router) , y Temas avanzados como Firebase (auth, database) y Bootstrap.


Estructura de Componentes 

La aplicación está organizada en varios componentes.

Listado de Productos y Carrito. El componente ProductsPage.jsx es el Componente Padre, que actúa como la lista de productos y maneja el estado del carrito. Implementa map() para listar los productos y maneja la comunicación hijo-padre usando callbacks. El componente ProductItem.jsx es el Componente Hijo que renderiza el producto y su botón. Este maneja la comunicación padre-hijo usando props. El componente Cart.jsx muestra el estado del carrito, el cual es actualizado con state y this.setState({}).

Formulario, Validación y Firestore. El componente FormPage.jsx es el componente del formulario. Configura react-simple-validator para las validaciones y guarda los datos del formulario en Firestore Database. El archivo firebaseConfig.js contiene la configuración necesaria para conectar la aplicación a Firebase.

Estilos, Autenticación, Storage y Versión Mobile. El componente AuthPage.jsx maneja la autenticación e implementa Firebase Auth. El componente UploadImage.jsx permite subir archivos e implementa Firebase Storage. La estilización general utiliza Bootstrap para el formulario y otros componentes. Para la exportación a versión móvil, se configuró Android Studio, Gradle y Cordova, se exportó el proyecto a APK, se firmó el APK y se probó en un dispositivo.
