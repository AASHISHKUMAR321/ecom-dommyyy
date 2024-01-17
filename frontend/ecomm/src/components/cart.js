import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Retrieve cart from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const renderCartItems = () => {
    return cart.map((cartItem) => (
      <div className="product" key={cartItem.id}>
        <div className="p-img">
          <img src={cartItem.img} alt={cartItem.name} />
        </div>
        <div>
          <div className="content">
            <p className="title">{cartItem.name}</p>
            <p className="price m-0">${cartItem.price}</p>
            <div className="quantity-selector d-flex">
              <button
                className="qty qty-minus btn"
                onClick={() =>
                  handleQuantityChange(cartItem.id, cartItem.quantity - 1)
                }
              >
                -
              </button>
              <input
                type="text"
                className="form-control mx-3"
                readOnly
                value={cartItem.quantity}
              />
              <button
                className="qty qty-plus btn"
                onClick={() =>
                  handleQuantityChange(cartItem.id, cartItem.quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="remove-wrapper">
            <button
              className="remove"
              onClick={() => handleRemoveItem(cartItem.id)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="cart-wrapper">{renderCartItems()}</div>

      {/* Other components and JSX for the rest of your cart page go here */}
    </div>
  );
};

export default CartPage;
