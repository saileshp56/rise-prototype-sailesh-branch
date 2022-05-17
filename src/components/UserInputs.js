// Modules
import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import riseLogo from '../styles/assets/spLogo.png';
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import SelfieCamera, { takeSelfie, startRecording, stopRecording } from './SelfieCamera';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import UserInputsErrorModal from './UserInputsErrorModal';


// Add Joseph's code for the image capture.

// - Make the input page look like the figma, left half input form, right half Joseph's image/camera portion.
// Bottom/ footer is the button to add user/ should reroute user to dashboard.

const UserInputs = () => {

     const navigate = useNavigate();

     const cameraRef = useRef ();
     const canvasRef = useRef ();

     const firstNameRef = useRef();
     const lastNameRef = useRef();
     const userAgeRef = useRef();
     const userHeightRef = useRef();
     const userAddressRef = useRef();
     const userOccupationRef = useRef();
     const userSexRef = useRef();
     const userBioRef = useRef();

     const [showImg, setShowImg] = useState(false);
     const [submitError, setSubmitError] = useState(false);


     const handleSubmit = (event) => {
     event.preventDefault();
     // this will be where the backend verifies the user's info
     //  all the input fields should have a ternary/boolean
     const firstName = firstNameRef.current.value;
     const lastName = lastNameRef.current.value;
     const userAge = userAgeRef.current.value;
     const userHeight = userHeightRef.current.value;
     const userAddress = userAddressRef.current.value;
     const userOccupation = userOccupationRef.current.value;
     //const userSex = userSexRef.current.value;
     //const userBio = userBioRef.current.value;
     if(!showImg){
          setSubmitError(true);

          
          return;
     }

     


     console.log('hello');
     navigate("/Dashboard");
     };

     const handleSubmitError = (event) => {
     event.preventDefault();
     setSubmitError(false);
     }
     

     



     const handleSetImgTrue = (canvasRef) => {

          setShowImg(true);
     }
     
return (
     <div className='wrapper'>
          {submitError && <UserInputsErrorModal onConfirm={handleSubmitError}/>}
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
                                   <input type="text" name="firstName" ref={firstNameRef} required/>
                              </div>
                              <div className="nameBox">
                                   <label htmlFor="last name">Last Name: </label>
                                   <input type="text" name="lastName" ref={lastNameRef} required/>
                              </div>
                         </div>
                         <div className="secondBox">
                              <div className="infoBox">
                         {/* Ideally this will be calandar input for users dob. */}
                                   <label htmlFor="age">Age: 
                                   </label>
                                   <input type="text" name="age" ref={userAgeRef} required/>
                              </div>
                              <div className="infoBox">
                                   <label htmlFor="height">Height (cm): </label>
                                   <input type="text" name="height" ref={userHeightRef} required/>
                              </div>
                         </div>
                         <div className="secondBox">
                              <div className="addBox">
                                   <label htmlFor="address">Address: 
                                   </label>
                                   <input type="text" name="address" ref={userAddressRef} required/>     
                              </div>
                              <div className="occBox">
                                   <label htmlFor="occupation">
                                   Occupation: </label>
                                   <input type="text" name="occupation" ref={userOccupationRef} required/>
                         
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
                                   rows="6" ref={userBioRef} required ></textarea>
                              </div>
                         </div>
                         <input className="submitButton" type="submit" value="SUBMIT"
          // JUST FOR TESTING, WASN'T HERE ORIGINALLY
               />    
                    </form>                    
               </div>

               {/* BEGAN working on camera/ selfie integration. Video appears, the still is still not happening. */}


               <div className="josephCamera">
                    <SelfieCamera ref={cameraRef} />

                    {/* add button with onclick takeselfie function */}

                    <button className="selfieButton" 
                    onClick={() => 
                         {
                         handleSetImgTrue(canvasRef);
                         takeSelfie (cameraRef, canvasRef)  
                         
                         }}>
                         <FontAwesomeIcon className="icon camera" icon={faCamera} />
                         Take Selfie</button>

                    


                    
                    {showImg && <canvas ref={canvasRef} />}

                    

               </div>
          </div>
          
          <input className="submitButton" type="submit" value="SUBMIT"
          // onChange={(e) => setUserChoice(e.target.value)} value={userChoice} 
          />    
     </div>

     
)
};

export default UserInputs;
