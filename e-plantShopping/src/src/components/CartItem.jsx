import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costString) => {
    return parseFloat(costString.replace('$', '')) || 0;
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + parseCost(item.cost) * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for trying out Paradise Nursery.');
  };

  const calculateSubtotal = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      <div className="cart-summary">
        <h3>Total Plants in Cart: {calculateTotalQuantity()}</h3>
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      </div>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', margin: '40px 0' }}>Your cart is currently empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item-card" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Unit Price: {item.cost}</p>
              <p>Subtotal: ${calculateSubtotal(item)}</p>
            </div>
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              <button className="delete-btn" onClick={() => handleRemove(item.name)}>Delete</button>
            </div>
          </div>
        ))
      )}

      <div className="cart-action-buttons">
        <button className="continue-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;