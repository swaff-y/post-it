'use client';

import './account.css';
import { Card, Image, ListGroup } from "react-bootstrap";

const Account = () => {
  return (
    <div>
      <Card
        bg="dark"
        text="light"
        className='account-card'
      >
        <Card.Header>
          <Card.Img 
            as={Image as any}
            src='avatar.png'
            roundedCircle
            className='account-avatar'
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            kyle.swaffield@nib.com.au
          </Card.Title>
          <ListGroup 
            className="ac-list-group"
          >
            <ListGroup.Item
              className='ac-list-item'
            >
              <strong>First Name:</strong> Kyle
            </ListGroup.Item>
            <ListGroup.Item
              className='ac-list-item'
            >
              <strong>Last Name:</strong> Swaffield
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Account;