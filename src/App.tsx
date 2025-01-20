import React from 'react';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutCompany from './components/AboutCompany';
import FormFeedback from './components/Form';


function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <AboutCompany />
        <FormFeedback />
        <Routes>
          <Route></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
