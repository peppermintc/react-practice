import React from 'react';
import './app.css';

function App() {
  const name = 'hamin';
  return (
    <>
      <h1>hi</h1>
      {name && <h1>{name}!</h1>}
      {['😀','😁'].map(item => <h1>{item}</h1>)}
    </>
  );
}

export default App;
