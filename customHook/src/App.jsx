// MyComponent.js

import React from 'react';
import useStorage from './component/UseStorage';
import './App.css'

const MyComponent = () => {
  const [inputValue, setInputValue] = useStorage('content', '');

  return (
    <div className='inputDiv'>
      <label>
        Type something:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>

      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default MyComponent;
