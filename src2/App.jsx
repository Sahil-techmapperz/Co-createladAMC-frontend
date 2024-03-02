// App.js
import React, { useState } from 'react';
import AllRoute from './components/Routers';
// import Content from './Content';

const App = () => {
  const [count, setCount] =useState(0)
  return (
    <>
    <AllRoute/>

    </>
  );
};

export default App;
