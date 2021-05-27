import React, { useState } from "react";
import "./App.css";
import Paypal from './Component/Paypal';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [checkOut, setCheckOut] = useState(false);
  return (
    <div className="App">
      <h1>Payment Gateway</h1>

      {checkOut ? (
        <Paypal />
      ) : (
        <button type="button" className="btn btn-dark"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          CHECKOUT
        </button>
      )}
      
    </div>
  );
}

export default App;