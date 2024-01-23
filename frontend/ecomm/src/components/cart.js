import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch orders data from the server when the component mounts
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getAllOrders');
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container className="mt-4">
      <h2 className='mb-5 font-design'>Your Shopping Cart <i className="fa-regular fa-heart"></i></h2>
      <Table className='striped bordered hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.image}</td>
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
