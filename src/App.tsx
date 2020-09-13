import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Pizza from "./models/Pizza";
import { Cart } from "./pages";
import Home from "./pages/Home";

function App() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
