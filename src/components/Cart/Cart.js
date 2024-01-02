import React from 'react';

const Cart = ({ cart, onIncrement, onDecrement }) => (
  <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
    <h2>Shopping Cart</h2>
    {cart.map((item, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Quantity:</strong> {item.quantity}
          <button onClick={() => onIncrement(index)} style={{ marginLeft: '5px' }}>+</button>
          <button onClick={() => onDecrement(index)} style={{ marginLeft: '5px' }}>-</button>
        </p>
        <p>
          <strong>Total Price:</strong> {item.price * item.quantity}
        </p>
      </div>
    ))}
    {cart.length > 0 && (
      <p style={{ fontWeight: 'bold' }}>
        Grand Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
    )}
  </div>
);

export default Cart;
