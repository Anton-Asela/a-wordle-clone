import {Component} from "react";
import Letter from './Letter';

function Guess(props) {
  return (
        <tr>
          {props.guess.letters.map(element => <Letter key={element.Id} letter={element}/>)}
        </tr>
  );
}

export default Guess;