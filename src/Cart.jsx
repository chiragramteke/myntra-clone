import { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
            }}
          >
            <img src={item.image} alt={item.title} width="100" />
            <div>
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
