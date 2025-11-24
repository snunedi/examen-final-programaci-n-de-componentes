function Cart({ items }) {
  return (
    <div>
      <h3>Carrito de compras</h3>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
