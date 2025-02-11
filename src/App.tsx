import React from 'react';

// styles
import './App.css'

// components
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'

const App: React.FC = () => {
  return (
    <div className='container'>
		<Sidebar />
		<MainContent />
    </div>
  );
}

export default App;