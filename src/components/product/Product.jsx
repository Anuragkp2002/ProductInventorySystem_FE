import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    variant: '',
    subvariant: '',
    price: '',
    stock: '',
    availability: 'In Stock',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'variant' && value) {
      addTag(value);
    } else if (name === 'subvariant' && value) {
      addTag(value);
    }
  };

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...formData, tags }]);

    setIsModalOpen(false);

    setFormData({
      productName: '',
      variant: '',
      subvariant: '',
      price: '',
      stock: '',
      availability: 'In Stock',
      description: '',
    });
    setTags([]);
  };

  return (
    <div className="container">
      <div className="product-container">
        <h3>Products</h3>
        <button
          type="button"
          className="product-add-button"
          onClick={() => setIsModalOpen(true)}
        >
          +Add Product
        </button>

        <table className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Variant</th>
              <th>Subvariant</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Availability</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  No products added
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.variant}</td>
                  <td>{product.subvariant}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.availability}</td>
                  <td>{product.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Add New Product</h4>
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
                <label>Variant</label>
                <select
                  name="variant"
                  value={formData.variant}
                  onChange={handleInputChange}
                  required
                  style={{ width: '99%' }}
                >
                  <option value="">Select Variant</option>
                  <option value="Variant 1">Variant 1</option>
                  <option value="Variant 2">Variant 2</option>
                  <option value="Variant 3">Variant 3</option>
                </select>
              </div>
              <div className="form-group">
                <label>Subvariant</label>
                <select
                  name="subvariant"
                  value={formData.subvariant}
                  onChange={handleInputChange}
                  required
                  style={{ width: '99%' }}
                >
                  <option value="">Select Subvariant</option>
                  <option value="Subvariant A">Subvariant A</option>
                  <option value="Subvariant B">Subvariant B</option>
                </select>
              </div>

              <div className="form-group">
                <div className="tags-container">
                  {tags.map((tag, index) => (
                    <div className="tag" key={index}>
                      {tag}
                      <button
                        type="button"
                        className="remove-tag"
                        onClick={() => removeTag(tag)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  style={{ width: '99%' }}
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ float: 'right' }}>
                <button onClick={handleAddProduct} className="save-button">
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

export default Product;
