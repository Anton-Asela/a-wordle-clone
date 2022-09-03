import Table from 'react-bootstrap/Table';
import Guess from "./Guess";
import { useState } from 'react';

function Board(){

    const [guesses, setGuesses] = useState([{
        Id: "1"
    }, {
        Id: "2"
    }, {
        Id:"3"
    }, {
        Id:"4"
    }, {
        Id:"5"
    }, {
        Id:"6"
    }]);

    return (

        <Table striped bordered hover>
            <tbody>
            <div> {
            this.state.guesses.map(function (guess) {
               return  (<Guess key={guess.Id}></Guess>)
            })
            }
        </div>
            </tbody>
        </Table>
        );

}


export default Board;