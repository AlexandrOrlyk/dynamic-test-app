import React from 'react';
import Sidebar from './layout'
import Components from './components'
import './App.css';

function App() {
  return (
    <div>
      <div className='row containerqw'>
        <Sidebar />
        <Components />
      </div>
    </div>

  );
}

export default App;
