import {Component} from "react";
import Letter from './Letter';

function Guess(props) {
  return (
        <tr>
          {props.guess.letters.map(element =>
             <Letter key={element.Id}
              letter={element}
              keyUp={props.keyUp}
              handleChange={props.handleChange} />)}
        </tr>
  );
}

export default Guess;