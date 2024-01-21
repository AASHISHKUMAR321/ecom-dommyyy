import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import First from '../images/pic5.jpg';
import Third from '../images/pic3.jpg';
import Forth from '../images/pic4.jpg';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function Cards() {

  const [lgShow, setLgShow] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const [allproducts, setallproducts] = useState(null);
  const getAllproducts = async () => {
    try {
      const GetProducts = await axios.get('http://localhost:4000/getAllproducts', allproducts);
      console.log(GetProducts.data);
      setallproducts(GetProducts.data);

    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  getAllproducts()
}, [])

  return (
    <>
      <CardGroup className='container'>
        {
          allproducts && (
            allproducts.map((product) => {
              return (
                <Card  className='card' onClick={() => setLgShow(true)}>
                  <Card.Img className='card-img' variant="top" src={First} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Card.Title>{product.price}</Card.Title>

                    <Button className='btn btn-primary ' variant="primary" onClick={() => addToCart}> <FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              )

            })
          )
        }
      </CardGroup>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='row m-3'>
          <div className='col-md-6 '>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={First} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Third} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Forth} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='col-md-6 row p-2 '>
            <Card.Title>Card title</Card.Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button className='btn btn-primary ' variant="primary" onClick={() => addToCart}> <FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>

          </div>
        </div></Modal.Body>
      </Modal>
    </>
  );
}

export default Cards;



// If the item is not in the cart, add it with quantity 1
// If the item is not in the cart, add it with quantity 1
// If the item is not in the cart, add it with quantity 1// If the item is not in the cart, add it with quantity 1
// If the item is not in the cart, add it with quantity 1