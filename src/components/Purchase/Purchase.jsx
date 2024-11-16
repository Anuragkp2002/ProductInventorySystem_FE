import React, { useState } from 'react';
import './Purchase.css';

const Purchase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',  
    purchaseDate: '',  
    totalAmount: '', 
  });
  const [purchases, setPurchases] = useState([]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPurchase = () => {
    setPurchases([...purchases, formData]);
    setIsModalOpen(false);
    setFormData({
      productName: '',
      quantity: '',
      purchaseDate: '',
      totalAmount: '',
    });
  };

  return (
    <div className="container">
      <div className="purchase-container">
        <h3>Purchase</h3>
        <button
          type="button"
          className="purchase-add-button"
          onClick={() => setIsModalOpen(true)}
        >
          +Add Purchase
        </button>

        <table className="purchase-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {purchases.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>
                  No purchases added
                </td>
              </tr>
            ) : (
              purchases.map((purchase, index) => (
                <tr key={index}>
                  <td>{purchase.productName}</td>
                  <td>{purchase.quantity}</td>
                  <td>{purchase.purchaseDate}</td>
                  <td>${purchase.totalAmount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Add New Purchase</h4>
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
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Purchase Date</label>
                <input
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Total Amount</label>
                <input
                  type="number"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div style={{ float: 'right' }}>
                <button onClick={handleAddPurchase} className="save-button">
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

export default Purchase;
