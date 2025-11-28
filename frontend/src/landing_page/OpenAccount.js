import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platform adn apps, ₹0investments, and flat ₹20instantly and F&O
          trades.
        </p>
         <Link className='p-2 btn btn-primary fs-5' to="/signup" style={{width:"20%", margin:"0 auto"}}>Signup Now</Link>
      </div>
    </div>
  );
}

export default OpenAccount;
