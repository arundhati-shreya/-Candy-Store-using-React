import React from 'react';
import CandyForm from './components/CandyForm/CandyForm';
import CandyList from './components/CandyList/CandyList';
import Cart from './components/Cart/Cart';
import { CandyProvider, useCandyContext } from './Store/CandyContext';

function App() {
  return (
    <CandyProvider>
      <AppContent />
    </CandyProvider>
  );
}

function AppContent() {
  const {
    candies,
    cart,
    showCart,
    handleAddProduct,
    handleBuy,
    handleIncrement,
    handleDecrement,
    setShowCart,
  } = useCandyContext();

  return (
    <div style={{ position: 'relative', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#3498db' }}>Candy Store</h1>
      <CandyForm onAddProduct={handleAddProduct} />
      <CandyList candies={candies} onBuy={handleBuy} />
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button
          onClick={() => setShowCart((prevShowCart) => !prevShowCart)}
          style={{ padding: '8px', backgroundColor: '#3498db', color: '#fff', border: 'none', cursor: 'pointer', marginBottom: '20px' }}
        >
          Show Cart  ({cart.length})
        </button>
        {showCart && (
          <Cart
            cart={cart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )}
      </div>
    </div>
  );
}

export default App;
