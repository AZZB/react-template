import React from 'react';
import logo from '../assets/images/logo-react.jpg';
import css from '../assets/styles/app.css';

const App = ({name, setUser}) => {

  return (
    <div>
      <h1 className={css.title}> Hello World  {name}</h1>
      <img src={logo} /><br/>
      <input onChange={(e) => setUser(e.target.value)} /><br/>
      <p>
        hi every one
      </p>
    </div>
  );
}

export default App;
