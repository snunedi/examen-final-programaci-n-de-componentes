function ProductItem({ product, addToCart }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3">
        <h4>{product.name}</h4>
        <p>Precio: ${product.price}</p>
        <button 
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
