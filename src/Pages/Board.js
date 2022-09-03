import Table from 'react-bootstrap/Table';
import Guess from "./Guess";
import { useState } from 'react';

function Board(){


    let arr = [];
    for(let i = 1 ; i <= 6 ; i++){
        let letters = [];
        for(let j = 1; j <= 5; j++) {
            letters[j] = {Id: j, color: "Blank", letter: "x (" + i + "," + j  + ")"}
        }
        arr[i] = {Id: i, letters: letters}
    }
    const [guesses, setGuesses] = useState(arr);
    

    return (

        <Table striped bordered hover>
            <tbody>
            {guesses.map(guess => <Guess key={guess.Id} guess={guess}/>)}
            </tbody>
        </Table>
    );

}


export default Board;