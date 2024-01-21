import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const ID = JSON.parse(localStorage.getItem('user')).id
  console.log(ID);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/profile/${ID}`); // Replace '123' with the actual user ID
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <Container className="m-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">User Profile</Card.Title>
              {userData && (
                <>
                  <div className="mb-3">
                    <strong>Name:</strong> {userData.name}
                  </div>
                  <div className="mb-3">
                    <strong>Email:</strong> {userData.email}
                  </div>
                  <div className="mb-3">
                    <strong>Username:</strong> {userData.username}
                  </div>
                  <div className="mb-3">
                    <strong>Address:</strong> {userData.address}
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
