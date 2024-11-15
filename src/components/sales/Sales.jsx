import React, { useState } from 'react';
import './Sales.css';

const Sales = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    customerName: '',  // Changed from quantity to customer name for sales
    salesDate: '',      // Changed from purchaseDate to salesDate
    totalSaleAmount: '', // Changed from totalAmount to totalSaleAmount
  });
  const [sales, setSales] = useState([]); // Renamed to sales for clarity

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle adding new sale
  const handleAddSale = () => {
    setSales([...sales, formData]);
    setIsModalOpen(false);
    setFormData({
      productName: '',
      customerName: '',
      salesDate: '',
      totalSaleAmount: '',
    });
  };

  return (
    <div className="container">
      <div className="sales-container">
        <h3>Sales</h3>
        <button
          type="button"
          className="sales-add-button"
          onClick={() => setIsModalOpen(true)}
        >
          +Add Sale
        </button>

        <table className="sales-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Customer</th>
              <th>Sales Date</th>
              <th>Total Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            {sales.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>
                  No sales added
                </td>
              </tr>
            ) : (
              sales.map((sale, index) => (
                <tr key={index}>
                  <td>{sale.productName}</td>
                  <td>{sale.customerName}</td>
                  <td>{sale.salesDate}</td>
                  <td>${sale.totalSaleAmount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Sales Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Add New Sale</h4>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Sales Date</label>
                <input
                  type="date"
                  name="salesDate"
                  value={formData.salesDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Total Sale Amount</label>
                <input
                  type="number"
                  name="totalSaleAmount"
                  value={formData.totalSaleAmount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div style={{ float: 'right' }}>
                <button onClick={handleAddSale} className="save-button">
                  Save
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;
