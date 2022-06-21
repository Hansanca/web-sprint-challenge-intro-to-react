import React, { useState, useEffect } from "react";
import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  function fetchData() {
    fetch("https://swapi.dev/api/people/")
      .then((resStream) => {
        return resStream.json();
      })
      .then((characterFromApi) => {
        console.log(characterFromApi);
        // update the array above
        setCharacters(characterFromApi);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {characters.map((character)=>{
        return <div>{character}</div>
      })} */}
      {characters.map((character) => {
        return <Character key={character.name} name={character.name} />;
      })}
    </div>
  );
};

export default App;
