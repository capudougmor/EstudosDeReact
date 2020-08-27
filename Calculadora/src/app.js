import React from 'react';

import GlobalStyles from './global'
import Calculator from './main/Calculator.jsx'
// import Routes from './routes'


function App() {
  return (
    <div>
      <GlobalStyles />
      <h2>Calculadora</h2>
      <Calculator />
    </div>
  );
}

export default App;