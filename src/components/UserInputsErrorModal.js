import React from 'react';


import classes from './UserInputsErrorModal.module.css';



const UserInputsErrorModal = (props) => {
  return (
    <div onClick={props.onConfirm}>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2> <br/>Please take a selfie <br/> <br/></h2>
        </header>
       
        <footer className={classes.actions}>
          <button>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default UserInputsErrorModal;
