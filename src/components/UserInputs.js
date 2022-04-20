// Modules
import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import riseLogo from '../styles/assets/spLogo.png';
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import SelfieCamera, { takeSelfie, startRecording, stopRecording } from './SelfieCamera';



// Add Joseph's code for the image capture.

// - Make the input page look like the figma, left half input form, right half Joseph's image/camera portion.
// Bottom/ footer is the button to add user/ should reroute user to dashboard.

const UserInputs = () => {

     const navigate = useNavigate();

     const cameraRef = useRef ();
     const canvasRef = useRef ();

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
               <h2>RISE </h2>
               <h3>Account Setup</h3>
               <div className="logo">
                    <img src={riseLogo}></img>
               </div>
               <p>Please Enter Your Account Information</p>
          </div>
          <div className="bossbox">
               <div className='forms'>
               
                    <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
                         <div className="secondBox">
                              <div className="nameBox">
                                   <label htmlFor="first name">First Name: </label>
                                   <input type="text" name="firstName" required/>
                              </div>
                              <div className="nameBox">
                                   <label htmlFor="last name">Last Name: </label>
                                   <input type="text" name="lastName" required/>
                              </div>
                         </div>
                         <div className="secondBox">
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
                         </div>
                         <div className="secondBox">
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
                         </div>
                         <div className="secondBox">
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
                              <div className="bioBox">
                                   <label htmlFor="bio">
                                   Bio: </label>
                                   <textarea id="message" className="message" placeholder="Your Message" name="message" cols="20"
                                   rows="6" required ></textarea>
                              </div>
                         </div>
                    </form>                    
               </div>

               {/* BEGAN working on camera/ selfie integration. Video appears, the still is still not happening. */}


               <div className="josephCamera">
                    <SelfieCamera ref={cameraRef} />

                    {/* add button with onclick takeselfie function */}

                    <button className="selfieButton" onClick={()=>takeSelfie (cameraRef, canvasRef)}>Take Selfie</button>

                    <canvas ref={canvasRef} />

               </div>
          </div>
          
          <input className="submitButton" type="submit" value="SUBMIT" 
          // onChange={(e) => setUserChoice(e.target.value)} value={userChoice} 
          />    
     </div>

     
)
};

export default UserInputs;
