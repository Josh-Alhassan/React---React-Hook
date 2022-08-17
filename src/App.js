import React from "react";
import Card from './Card';
import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/de';
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Create Card Component!</h1>
      <p>Start coding to see some magic happen :)</p>

      <Card 
        avater={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()} />
      <Card 
        avater={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()} />
      
      <Card 
        avater={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()} />
    </div>
  );
}
