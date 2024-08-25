import React, { useState, useEffect } from 'react';
import carData from '../data/taladrod-cars.min.json'; // Import the car data

export default function HighlightedCars() {
    const [cars, setCars] = useState([]);
    const [highlightedCars, setHighlightedCars] = useState([]);

    // Load car data when the component mounts
    useEffect(() => {
        setCars(carData.Cars || []); // Access the "Cars" array
        const savedHighlightedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
        setHighlightedCars(savedHighlightedCars); // Load highlighted cars from localStorage
    }, []);

    // Function to highlight a car
    const highlightCar = (car) => {
        if (!highlightedCars.find(c => c.Cid === car.Cid)) {
            const newHighlightedCars = [...highlightedCars, car];
            setHighlightedCars(newHighlightedCars);
            localStorage.setItem('highlightedCars', JSON.stringify(newHighlightedCars)); // Save to localStorage
        }
    };

    // Function to unhighlight a car
    const unhighlightCar = (car) => {
        const newHighlightedCars = highlightedCars.filter(c => c.Cid !== car.Cid);
        setHighlightedCars(newHighlightedCars);
        localStorage.setItem('highlightedCars', JSON.stringify(newHighlightedCars)); // Save to localStorage
    };

    if (!Array.isArray(cars) || cars.length === 0) {
        return <p>No cars available or invalid data format.</p>;
    }

    return (
        <div className="container">
            {/* Highlighted Cars Section */}
            <h2 className="mt-5">Highlighted Cars</h2>
            <div className="row">
                {highlightedCars.length > 0 ? (
                    highlightedCars.map(car => (
                        <div key={car.Cid} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={car.Img300} className="card-img-top" alt={car.Model} />
                                <div className="card-body">
                                    <h5 className="card-title">{car.NameMMT}</h5>
                                    <p className="card-text"><strong>Price:</strong> {car.Prc} {car.Currency}</p>
                                    <p className="card-text"><strong>Year:</strong> {car.Yr}</p>
                                    <p className="card-text"><strong>Province:</strong> {car.Province}</p>
                                    <p className="card-text"><strong>Status:</strong> {car.Status}</p>
                                    <button className="btn btn-danger" onClick={() => unhighlightCar(car)}>
                                        Unhighlight
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cars highlighted yet.</p>
                )}
            </div>

            {/* Available Cars Section */}
            <h1>Available Cars</h1>
            <div className="row">
                {cars.map(car => (
                    <div key={car.Cid} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={car.Img300} className="card-img-top" alt={car.Model} />
                            <div className="card-body">
                                <h5 className="card-title">{car.NameMMT}</h5>
                                <p className="card-text"><strong>Price:</strong> {car.Prc} {car.Currency}</p>
                                <p className="card-text"><strong>Year:</strong> {car.Yr}</p>
                                <p className="card-text"><strong>Province:</strong> {car.Province}</p>
                                <p className="card-text"><strong>Status:</strong> {car.Status}</p>
                                <button className="btn btn-primary" onClick={() => highlightCar(car)}>
                                    Highlight
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
