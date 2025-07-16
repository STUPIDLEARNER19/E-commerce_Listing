import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../redux/slices/cartSlice";

function Cart() {
  const cartProducts = useSelector((store) => store.cartReducer.cartProducts);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(action.addToCart(product));
  };

  const handleRemove = (product) => {
    dispatch(action.deleteFromCart(product));
  };

  const total = cartProducts.reduce(
    (acc, item) => acc + item.indQuantity * item.price,
    0
  );

  return (
    <div className="cart">
      <h1>🛒 Your Cart</h1>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartProducts.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="cart-image"
              />
              <div className="cart-details">
                <h3>{product.title}</h3>
                <p>Price: ₹{product.price}</p>
                <p>Quantity: {product.indQuantity}</p>
                <p>Subtotal: ₹{product.indQuantity * product.price}</p>
                <div className="cart-actions">
                  <button onClick={() => handleAdd(product)}>➕</button>
                  <button onClick={() => handleRemove(product)}>➖</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Total: ₹{total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
