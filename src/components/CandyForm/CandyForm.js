import React, { useState } from 'react';

const CandyForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    if (name && description && price) {
      onAddProduct({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Candy Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button
        onClick={handleAddProduct}
        style={{
          padding: '8px',
          backgroundColor: '#2ecc71',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default CandyForm;