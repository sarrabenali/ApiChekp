import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({ user}) => {
  return (
       <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>

        <Button variant="primary">
            <Link to ={`/user/${user.id}`}> My Profile </Link>
             </Button>
         </Card.Body>
</Card>
  </div>
  );
};

export default UserCard;
