import React, { useState, useEffect } from 'react';
import carData from '../data/taladrod-cars.min.json'; // Import car data
import { Pie, Bar } from 'react-chartjs-2'; // Import charts
import Table from '../components/Table';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Dashboard() {
    const [modelCounts, setModelCounts] = useState({});
    
    // Process car data when the component mounts
    useEffect(() => {
        const modelData = carData.Cars.reduce((acc, car) => {
            const model = car.Model;
            if (acc[model]) {
                acc[model]++;
            } else {
                acc[model] = 1;
            }
            return acc;
        }, {});

        setModelCounts(modelData);
    }, []);

    // Prepare data for the pie and bar charts
    const chartData = {
        labels: Object.keys(modelCounts),
        datasets: [
            {
                label: 'Number of Cars by Model',
                data: Object.values(modelCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="text-center">Car Data Dashboard</h1>
                    <p className="text-center text-muted">Visualizing car data by model in pie and bar charts.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Pie Chart: Car Types by Model</h5>
                        </div>
                        <div className="card-body">
                            <Pie data={chartData} />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-success text-white">
                            <h5 className="mb-0">Bar Chart: Car Types by Model</h5>
                        </div>
                        <div className="card-body">
                            <Bar data={chartData} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Component */}
            <Table />
        </div>
    );
}
