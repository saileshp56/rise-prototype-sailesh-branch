import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import nirvana from '../../styles/assets/nirvana.png';

const MarketPlaceInputs = () => {

     return (
     <div className="mpmain">
          <h3>Add New MarketPlace</h3>
          <div className="addNew">
               <form className="MPForm">
               <label className="sr-only" htmlFor="category">
               Category
               </label>
               <select
               className="MPDropDown"
               id="category"
               name="category"
               // onChange={(e) => setUserChoice(e.target.value)}
               // value={userChoice}
               >
               <option value="category">Category</option>
               <option value="vehicles">Vehicles</option>
               <option value="property rental">Property Rental</option>
               <option value="apparel">Apparel</option>
               <option value="classifieds">Classifieds</option>
               <option value="electronics">Electronics</option>
               <option value="entertainment">Entertainment</option>
               <option value="family">Family</option>
               <option value="free stuff">Free Stuff</option>
               <option value="garden/outdoors">Garden & Outdoors</option>
               <option value="other">Other</option>
               </select>
               <div className="price">
               <label htmlFor="price"> 
               </label>
               <img src={nirvana}/>
               <input
                    type="text"
                    name="price"
                    placeholder= "Enter Amount"
                    required
               />
               </div>
               </form>
          </div>
          <button>Share With</button>
     </div>
     );
}

export default MarketPlaceInputs;