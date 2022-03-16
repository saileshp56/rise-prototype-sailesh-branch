// Modules
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

const UserInputs = () => {
    
return (
    <div className='wrapper'>
        <div className='userInputIntro'>
            <h2>RISE Account Setup</h2>
            <p>Please Enter Your Account Information</p>
        </div>
    <div className='forms'>
        <form>
            <label>
                First Name:
                <input type="text" name="firstName" />
            </label>
        </form>
        <form>
            <label>
                Last Name:
                <input type="text" name="lastName" />
            </label>
        </form>
        <form>
            <label>
                Age:
                <input type="text" name="age" />
            </label>
        </form>
        <form>
            <label>
                Height:
                <input type="text" name="height" />
            </label>
        </form>
        <form>
            <label>
                Address:
                <input type="text" name="address" />
            </label>
        </form>
        <form>
            <label>
                Introduction:
                <input type="text" name="intro" />
            </label>
        </form>
    </div>
    <input type="submit" value="Submit" />    
    </div>

    
)
};

export default UserInputs;
