import React, { createRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function addMeta(data) {
  const meta = document.createElement('meta');
  Object.assign(meta, data)
  document.getElementsByTagName('head')[0].appendChild(meta);
}

// https://www.mockapi.io/docs

const App = ()  =>{
  useEffect(() => {
    document.title = 'Proof of Concept | Jojo'

    addMeta({
      name: "Description",
      content: "This is a proof of concept on how react static assets are served on apache server."
    })

    addMeta({
      name: "Keywords",
      content: "react, apache, php, POC"
    })

    addMeta({
      name: "Author",
      content: "Josaphat Tutor"
    })
    
  })

  return (
    <div className="App">
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <h1 className="title">
      Proof of Concept
    </h1>
  )
}

export default App;
