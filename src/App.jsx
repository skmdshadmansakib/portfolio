import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Education = lazy(() => import('./pages/Education'));
const Publication = lazy(() => import('./pages/Publication'));
const App = () => {
  return (
    <main className='bg-slate-300/20 min-h-screen'>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/publication' element={<Publication />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
