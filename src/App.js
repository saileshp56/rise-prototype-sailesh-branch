import './styles/sass/styles.scss';
import './App.css';
import riseLogo from './styles/assets/spLogo.png';
import { useState } from 'react';
import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';

const UserInputs = () => {
  return (
    <div>
      <h2>Welcome!!</h2>
      <Outlet />
    </div>
  )
};

function App() {
  
  return (
      <div className="App">
          <div className='wrapper'>
          <Routes>
            <Route path='/' element={<>
            <h1>RISE</h1>
            <h5>by:</h5>
            <div className='logoBox'>
              <img src = {riseLogo} alt='The Rise Logo'/>
            </div>
          
            <div className='introParagraph'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          <Link to="/UserInputs" className='linkToUserInputPage'>REGISTER YOUR ACCOUNT</Link>
            </>} />
            <Route path='/UserInputs' element={<UserInputs />} />
          </Routes>
        </div>
      </div>
    
    );
}

export default App;
