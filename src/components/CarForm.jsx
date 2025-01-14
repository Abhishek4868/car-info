import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const CarForm = ({ car, onSave }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (car) {
            setName(car.name);
            setPrice(car.price);
            setImageUrl(car.imageUrl);
        }
    }, [car]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = { id: car ? car.id : null, name, price, imageUrl };
        onSave(newCar);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Car Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter car name"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter car price"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter car image URL"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    );
};

export default CarForm;
