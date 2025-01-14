import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CarList from './components/CarList';

const App = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="car-section" className="py-5">
            <h2 className="text-center">Our Cars</h2>
            <CarList />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;