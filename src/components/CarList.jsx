import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import CarItem from './CarItem';
import CarForm from './CarForm';

const CarList = () => {
    // Load cars from local storage when the component mounts
    const loadCarsFromLocalStorage = () => {
        const savedCars = JSON.parse(localStorage.getItem('cars')) || [];
        return savedCars;
    };

    // Save cars to local storage
    const saveCarsToLocalStorage = (cars) => {
        localStorage.setItem('cars', JSON.stringify(cars));
    };

    const [cars, setCars] = useState(loadCarsFromLocalStorage());
    const [showModal, setShowModal] = useState(false);
    const [editingCar, setEditingCar] = useState(null);

    // Update local storage whenever cars state changes
    useEffect(() => {
        saveCarsToLocalStorage(cars);
    }, [cars]);

    const handleAddCar = () => {
        setEditingCar(null);
        setShowModal(true);
    };

    const handleEditCar = (car) => {
        setEditingCar(car);
        setShowModal(true);
    };

    const handleDeleteCar = (id) => {
        setCars(cars.filter(car => car.id !== id));
    };

    const handleSaveCar = (car) => {
        if (editingCar) {
            setCars(cars.map(c => (c.id === car.id ? car : c)));
        } else {
            setCars([...cars, { ...car, id: Date.now() }]);
        }
        setShowModal(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleAddCar}>
                <FaPlus /> Add Car
            </Button>
            <Row className="mt-3">
                {cars.map(car => (
                    <Col key={car.id} sm={12} md={6} lg={3} className="mb-4">
                        <CarItem car={car} onEdit={handleEditCar} onDelete={handleDeleteCar} />
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingCar ? 'Edit Car' : 'Add New Car'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarForm car={editingCar} onSave={handleSaveCar} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CarList;
