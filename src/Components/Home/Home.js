import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import Drink from "../card/Drink";
import "./Home.css";

const Home = () => {
  const [drinks, setDrinks] = useState(null);
  const [sea, setSea] = useState("");

  useEffect(() => {
    // Runs once, after mounting
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${sea}`)
      .then((res) => {
        setDrinks(res.data.drinks);
      })
      .catch((err) => console.log(err.response));
  }, [sea]);
  return (
    <>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          onChange={(e) => setSea(e.target.value)}
        />
      </Form>
      <div className="des">
        {drinks ? drinks.map((el) => <Drink el={el} />) : "loading"}
      </div>
    </>
  );
};

export default Home;
