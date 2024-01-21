// CartPage.js

import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const CartPage = () => {
  // Dummy data for the cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container className="mt-4">
      <h2 className='mb-5 font-design'>Your Shopping Cart <i class="fa-regular fa-heart"></i></h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <Button variant="danger" size="sm">
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-right m-4">
        <h4>Total: ${calculateTotal()}</h4>
        <Button variant="success">Checkout</Button>
      </div>
    </Container>
  );
};

export default CartPage;
