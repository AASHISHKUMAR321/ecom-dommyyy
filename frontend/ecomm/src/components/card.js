import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import First from '../images/pic5.jpg';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Cards() {
  const [allproducts, setallproducts] = useState([]);
  const [alladdproducts, setalladdproducts] = useState({
    name: "",
    price: 0,
    quantity: 0,
    category: "",
    image: "",
    rating: 0,
    comments: [],
  });

  const addproducts = async () => {
    try {
      const resp = await axios.post('http://localhost:4000/addProduct', alladdproducts);
      console.log(resp.data)
      getAllproducts();
      setalladdproducts({
        name: "",
        price: 0,
        quantity: 0,
        category: "",
        image: "",
        rating: 0,
        comments: [],
      });

    } catch (error) {
      console.log(error)
    }
  };

  const editProduct = async (productId, updatedProduct) => {
    try {
      await axios.put(`http://localhost:4000/editProductById/${productId}`, updatedProduct);
      getAllproducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/deleteProductById/${productId}`);
      getAllproducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllproducts = async () => {
    try {
      const GetProducts = await axios.get('http://localhost:4000/getAllproducts');
      setallproducts(GetProducts.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  return (
    <>
      <div>
        <h2>Add a New Product</h2>
        <form>
          <label>Name:</label>
          <input type='text' value={alladdproducts.name} onChange={(e) => setalladdproducts({ ...alladdproducts, name: e.target.value })} />

          <label>Price:</label>
          <input type='number' value={alladdproducts.price} onChange={(e) => setalladdproducts({ ...alladdproducts, price: e.target.value })} />

          <label>Quantity:</label>
          <input type='number' value={alladdproducts.quantity} onChange={(e) => setalladdproducts({ ...alladdproducts, quantity: e.target.value })} />

          <Button onClick={addproducts}>Add Product</Button>
        </form>
      </div>
      <CardGroup className='container'>
        {allproducts &&
          allproducts.map((product, index) => (
            <div key={index} className='col-lg-4 col-md-4 col-sm-6'>
              <Card className='card'>
                <Card.Img className='card-img' variant='top' src={First} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Card.Title>{product.price}</Card.Title>
                  <Button className='btn btn-primary ' variant='primary'>
                    <FontAwesomeIcon className='cart' icon={faCartShopping} /> Add to cart
                  </Button>
                  <Button className='btn btn-success' onClick={() => editProduct(product._id, updatedProduct)}>
                    Edit
                  </Button>
                  <Button className='btn btn-danger' onClick={() => deleteProduct(product._id)}>
                    Delete
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
          ))}
      </CardGroup>
    </>
  );
}

export default Cards;
