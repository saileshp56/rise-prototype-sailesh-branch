import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const MarketPlaceInputs = () => {

     return (

          <div className="wrapper">
               <h1>Add New MarketPlace</h1>
               <form className="MPForm">
                    <label htmlFor="category">
                         Category
                    </label>
                    <select className="MPDropDown" id="category" name="category"
                    // onChange={(e) => setUserChoice(e.target.value)}
                              // value={userChoice}
                              >
                         <option vlaue="placeholder" disabled> Please select a category
                         </option>
                         <option value="vehicles">
                              Vehicles
                         </option>
                         <option value="property rental">
                              Property Rental
                         </option>
                         <option value="apparel">
                              Apparel
                         </option>
                         <option value="classifieds">
                              Classifieds
                         </option>
                         <option value="electronics">
                              Electronics
                         </option>
                         <option value="entertainment">
                              Entertainment
                         </option>
                         <option value="family">
                              Family
                         </option>
                         <option value="free stuff">
                              Free Stuff
                         </option>
                         <option value="garden/outdoors">
                              Garden & Outdoors
                         </option>
                         <option value="other">
                              Other
                         </option>
                    </select>
                    <label htmlFor="price">
                         Price:
                    </label>
                    <input type="text" name="price" placeholder="Enter Amount" required/>
               </form>
               <button>
                    Share With
               </button>
          </div>
     )
}

export default MarketPlaceInputs;