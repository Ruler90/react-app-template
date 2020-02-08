import React from 'react';
import './scss/App.css';
import ExampleH1 from './components/ExampleSFComponent';
import ExampleP from './components/ExampleClassComponent';

const App = () => {
  const spanText = 'This is App template';

  return (
    <div className="App">
      <ExampleH1 />
      <ExampleP />
      <span>{spanText}</span>
    </div>
  );
};

export default App;
