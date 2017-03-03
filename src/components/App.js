import React from 'react';


const App = ({name, setUser}) => {

  return (
    <div>
      <h1> Hello World  {name}</h1>
      <input onChange={(e) => setUser(e.target.value)} />
    </div>
  );
}

export default App;
