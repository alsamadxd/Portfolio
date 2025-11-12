import { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/Main-Content/About';
import Services from './components/Main-Content/Services';
import Work from './components/Main-Content/Work';


function App() {


  return (
    <div className="bg-[#080808] text-white ">
      <Header />
      <About />
      <div className=" mx-auto  sm:max-w-3/5">
        <Services />
        <Work />
      </div>
      <Footer />
    </div>
  );
}

export default App;
