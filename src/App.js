import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
  <div className="container">
    <Weather defaultCity="New York"/>
    <footer>
      This project was coded by{" "}
      <a href="https://www.linkedin.com/in/napoleon-6b89b756/" 
      target="_blank" 
      rel="noreferrer">
      Ginger Napoleon
      </a>{" "} 
      and is{" "}  
      <a href="https://github.com/gingernapoleon/i-hate-this" 
      target="_blank" 
      rel="noreferrer"> 
      open-sourced on Github
     </a>{" "}
          and{" "}
          <a
            href="https://fervent-shannon-66b4ff.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
    </footer>
    </div>
    </div>
  );
}
