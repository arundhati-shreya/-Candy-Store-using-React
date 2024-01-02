import React from 'react';

const CandyList = ({ candies, onBuy }) => (
  <div>
    {candies.map((candy, index) => (
      <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
        <p>
          <strong>Name:</strong> {candy.name}
        </p>
        <p>
          <strong>Description:</strong> {candy.description}
        </p>
        <p>
          <strong>Price:</strong> {candy.price}
        </p>
        <button
          onClick={() => onBuy(index, 1)}
          style={{ padding: '8px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer', marginRight: '5px' }}
        >
          Buy1
        </button>
        <button
          onClick={() => onBuy(index, 2)}
          style={{ padding: '8px', backgroundColor: '#e67e22', color: '#fff', border: 'none', cursor: 'pointer', marginRight: '5px' }}
        >
          Buy2
        </button>
        <button
          onClick={() => onBuy(index, 3)}
          style={{ padding: '8px', backgroundColor: '#f39c12', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Buy3
        </button>
      </div>
    ))}
  </div>
);

export default CandyList;
