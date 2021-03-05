import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = ({ match, history }) => {
  const { id } = match.params;
  const [drink, setDrink] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setDrink(res.data.drinks[0]))
      .catch((err) => console.log(err.response));
  }, [id]);
 

  return (
    <div>
      {drink ? (
        ((<p>Inst: {drink.strInstructions}</p>),
        (<img src={drink.strDrinkThumb} />))
      ) : (
        <img
          src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          alt="spinner"
        />
      )}
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};
export default Details;
