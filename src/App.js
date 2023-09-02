import React, { ueState, useState } from "react";
import data from "./data";
import List from "./List";
import Heading from "./Heading";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <Heading />
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
