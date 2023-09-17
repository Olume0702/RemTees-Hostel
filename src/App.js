import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import WhatsAppIcon from "./components/WhatsAppIcon";
import Finale from './components/Finale';


const App = () => {
  return (
    <div className='bg-slate-200 scroll-auto font-roboto'>
      <Navbar />
      <Home />
      <About/>
      <Testimonials/>
      <ContactForm/>
      <Contact/>
      <WhatsAppIcon/>
      <Finale/>
    
    
    </div>
  );
};

export default App;
