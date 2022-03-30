import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// Nirvana/Payment Pages will live here.


const Nirvana = () => {

// Return & JSX - My game plan here to make any of the submenus collapsable using the CSS/SASS partial. Note from Kevin W: To anyone reading this note please ensure to have the SASS/SCSS pre-processor installed and that you have WATCH SASS active on VS code for the CSS to be rendered correctly. Please reach out to me on sykpe if you need a hand with this. 
  return (
    <div className="wrapper">
      <nav className="nirvanaNav">
        <ul>
          <li>Payment</li>
          <ul className="paymentNav">
            <li>Request Payment</li>
            <li>Make Payment</li>
          </ul>
          <li>Transaction</li>
          <ul className="transactionNav">
            <li>Complete Transaction</li>
            <li>Cancel Transaction</li>
          </ul>
          {/* As per Figma, no submenu options for Notification */}
          <li>Notification</li>
          {/* As per Figma, no submenu options for Fullfilled Payments */}
          <li>Fullfilled Payments</li>
        </ul>
      </nav>
      <div className="nirvanaLanding">
        {/* This is where the nav links for Nirvana info, wallet and transactions will live */}

        <h2>Wallet and Payments</h2>
        <h3>Your Nirvana Balance is: 500</h3>
      </div>
    </div>
  );

}



export default Nirvana;