import React from 'react';
import data from '../data/taladrod-cars.min.json'; // Adjust path to match your project structure
 
const Table = () => {
  const cars = data.Cars;
 
  return (
    <div className="mt-5">
      <h2>Cars Table</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Image</th>
            <th>Model</th>
            <th>Name</th>
            <th>Price</th>
            <th>Year</th>
            <th>Page Views</th>
            <th>Province</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.Cid}>
              <td>
                <img src={car.Img100} alt={car.Model} width="100" />
              </td>
              <td>{car.Model}</td>
              <td>{car.NameMMT}</td>
              <td>฿{car.Prc}</td> {/* Add Baht sign here */}
              <td>{car.Yr}</td>
              <td>{car.PageViews}</td>
              <td>{car.Province}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Table;
