import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Landing from './components/routes/Landing';
import Results from './components/routes/Results';

function App() {
    return (
        <div className="App">
            <Header />
            <Landing />
            <Results />
            <Footer />
        </div>
    );
}

export default App;
