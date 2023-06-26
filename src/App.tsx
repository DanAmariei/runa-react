import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation';
import RunaImage from './components/RunaImage';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>

      <Navigation />


      <div className='container'>
        page content here
        <RunaImage runaNumber={36789251} />
      </div>
    </>
  )
}

export default App
