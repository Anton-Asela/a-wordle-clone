import {Component} from "react";
import Letter from './Letter';

function Guess(props) {
  return (
        <tr>
          {props.guess.letters.map(element => <Letter
              key={element.Id}
              letter={element}
              letterChange={props.letterChange}
              keyUp={props.keyUp}
          />)}
        </tr>
  );
}

export default Guess;