import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import Upload from './Components/Upload';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader ? (
        <div className='min-h-screen min-w-screen flex justify-center items-center' style={{ background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }}>
          <div >
            <Loading />
          </div>
        </div>
      ) : (
        <div className='selection:bg-black selection:text-white bg-cover h-full bg-no-repeat bg-center ' style={{ background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path='/upload' element={<Upload />} />
          </Routes>
        </div>)
      }</div>
  );
}

export default App;
