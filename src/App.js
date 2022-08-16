import React from "react";
import Card from './Card'
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Create Card Component!</h1>
      <p>Start coding to see some magic happen :)</p>

      <Card name="Joshua Abel"/>
      <Card />
      <Card />
    </div>
  );
}
