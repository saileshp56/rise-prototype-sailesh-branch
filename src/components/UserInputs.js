// Modules
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import riseLogo from '../styles/assets/spLogo.png';



// Add Joseph's code for the image capture.

// - Make the input page look like the figma, left half input form, right half Joseph's image/camera portion.
// Bottom/ footer is the button to add user/ should reroute user to dashboard.

const UserInputs = () => {

     const navigate = useNavigate();

     const handleSubmit = (event) => {
     event.preventDefault();
     // this will be where the backend verifies the user's info
     //  all the input fields should have a ternary/boolean
     console.log(`hello`);
     navigate("/Dashboard");
};
     
return (
     <div className='wrapper'>
          <div className='userInputIntro'>
               <h2>RISE Account Setup</h2>
               <p>Please Enter Your Account Information</p>
          </div>
          <div className='forms'>
               <div className="logo">
                    <img src={riseLogo}></img>
               </div>
               <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
                    <div className="nameBox">
                         <label htmlFor="first name">First Name: </label>
                              <input type="text" name="firstName" required/>
                    </div>
                    <div className="nameBox">
                         <label htmlFor="last name">Last Name: </label>
                         <input type="text" name="lastName" required/>
                    </div>
                    <div className="infoBox">
                         {/* Ideally this will be calandar input for users dob. */}
                         <label htmlFor="age">Age: 
                         </label>
                         <input type="text" name="age" required/>
                    </div>
                    <div className="infoBox">
                         <label htmlFor="height">Height (cm): </label>
                         <input type="text" name="height" required/>
                    </div>
                    <div className="infoBox">
                         <label htmlFor="sex">Sex: 
                         </label>
                         <select className="dropDown"
                              id="sex"
                              name="sex"
                              // onChange={(e) => setUserChoice(e.target.value)}
                              // value={userChoice}
                         >
                         <option value="placeholder" disabled> Please select your sex</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                         </select>
                    </div>
                    <div className="addBox">
                         <label htmlFor="address">Address: 
                         </label>
                         <input type="text" name="address" required/>     
                    </div>
                    <div className="occBox">
                         <label htmlFor="occupation">
                              Occupation: </label>
                         <input type="text" name="occupation" required/>
                         
                    </div>
                    <div className="bioBox">
                         <label htmlFor="bio">
                              Bio: </label>
                              <textarea id="message" className="message" placeholder="Your Message" name="message" cols="30"
                         rows="10" required ></textarea>
                    </div>
               </form>                    
          </div>
          <input className="submitButton" type="submit" value="SUBMIT" 
          // onChange={(e) => setUserChoice(e.target.value)} value={userChoice} 
          />    
     </div>

     
)
};

export default UserInputs;
