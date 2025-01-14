import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CarItem = ({ car, onEdit, onDelete }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={car.imageUrl} />
            <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>{car.price}</Card.Text>
                <Button variant="info" onClick={() => onEdit(car)}>Edit</Button>
                <Button variant="danger" onClick={() => onDelete(car.id)} className="ms-2">Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default CarItem;
