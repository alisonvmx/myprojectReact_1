//import { useCallback, useEffect, useState } from "react";
//importe dos componentes
//import game from "./components/screen_game";
//import result from "./components/screen_result";


//importe dos dados mocados
import { wordsList } from './components/data/words';

//importe do css
import { useState } from 'react';
import './App.css';
//import screenMain from './components/screenMain';

const stages =[
  {id: 1, name:"main"},
  {id: 2, name:"game"},
  {id: 3, name:"result"}

]

function App() {
  const [gameStage,setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  console.log(words);

  return (
    <div className="App">

    </div>
  );
}

export default App;
