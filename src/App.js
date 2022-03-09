import './styles/sass/styles.scss';
import './App.css';
import riseLogo from './styles/assets/spLogo.png';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [submit, setSubmit] = useState(false);
  
  return (
    <div className="App">
        <div className='wrapper'>
          <h1>RISE</h1>
          <h5>by:</h5>
          <div className='logoBox'>
            <img src = {riseLogo} alt='The Rise Logo'/>
          </div>
        
          <div className='introParagraph'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        <button className="button">REGISTER YOUR ACCOUNT</button>
        <Routes>
          <Route path="/" element={<UserInputs propSubmit={submit => setSubmit(submit)} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
