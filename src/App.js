import React from "react";
import Card from './Card';
import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/de';
import "./style.css";

export default function App() {
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3"> NO </button>
    </div>
  )
  return (
    <div className="App">
      <h1>Create Card Component!</h1>
      <p>Start coding to see some magic happen :)</p>

      <Card 
        avater={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        > 
          {buttonsMarkup}
      </Card>
      <Card 
        avater={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        > 
          {buttonsMarkup}
      </Card>
      <Card 
        avater={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        > 
          {buttonsMarkup}
      </Card>
    </div>
  );
}
