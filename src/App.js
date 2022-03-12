import './styles/sass/styles.scss';
import './App.css';
import riseLogo from './styles/assets/spLogo.png';
import { useState } from 'react';
import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom';
import UserInputs from './components/UserInputs.js';

function App() {
  
  return (
    <div className="App">
      <div className='wrapper'>
          <Routes>
            <Route path='/' element={<>
            <h1>RISE</h1>     
          
            <div className='introParagraph'>
              <p>RISE is the most secure messaging app in the market. Based on Web 3.0 peer to peer protocols. RISE has no central server to compromise, and it also obfuscates metadata, so no third party can ascertain who is corresponding with who. </p>
              <p> RISE will include an open, censorship resistant, decentralized marketplace. We will not list our token on any other exchanges. This is because we want our token traded for goods and services rather than being traded by speculators. </p>
              <p> We are also in the process of developing a cryptocurrency based Universal Basic Income, and open marketplace, in an attempt to create a stable borderless economy without out capital gatekeepers. </p>
            </div>
            
          <Link to="/UserInputs.js" className='linkToUserInputPage'>REGISTER YOUR ACCOUNT</Link>
            </>} />
            <Route path='/UserInputs.js' element={<UserInputs/>} />
          </Routes>
      </div>
    </div>
    
    );
}

export default App;
