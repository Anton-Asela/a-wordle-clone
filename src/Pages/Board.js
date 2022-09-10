import Table from 'react-bootstrap/Table';
import Guess from "./Guess";
import { useState, useRef } from 'react';


function Board(){

    const wordOfTheDay = "apple"
    const validWords = ['apple']

    let arr = [];
    for(let i = 1 ; i <= 6 ; i++){
        let letters = [];
        for(let j = 1; j <= 5; j++) {
            letters[j] = {
                Id: j, 
                color: "Blank", 
                letter: "",
                location: {
                    guess:i,
                    letter:j,
                }
                
            }
        }
        arr[i] = {Id: i, letters: letters}
    }

    let boardEle = useRef();
    const [guesses, setGuesses] = useState(arr);
    const [board,setBoard] = useState(boardEle)
    
    function handleChange(event, data) {
        const newGuesses = guesses.slice();
        newGuesses[data.guess].letters[data.letter].letter = event.data;
        setGuesses(newGuesses); 

        if(data.letter == 5) {
           processWord(data);
        }
        console.log(data);
    }

    function processWord(data) {
        const guessWord = guesses[data.guess].letters.map((letter) => `${letter.letter}`).join('');
        console.log(guessWord);
        if (wordOfTheDay == guessWord) {
            console.log("guess is correct");
        } else if (!validWords.includes(guessWord)) {
            console.log(guessWord + " is not valid word");
        } else {
        }
    }

    function keyUp(e,data){
        console.log(data)
        if (e.keyCode === 8) {
            console.log('empty current cell and back');
            if(data.letter >1){     
                let idStr = (data.letter - 1) +"_"+(data.guess);
                console.log(idStr);
                // newGuesses[data.y].letters[data.x].letter = "";
                boardEle.current.ownerDocument.getElementById(idStr).focus();
                e.preventDefault();
            
            }
        } else {
            console.log('next');
            if(data.letter < 5){
                let idStr = (data.letter + 1 ) +"_"+ (data.guess);
                console.log(idStr);
                boardEle.current.ownerDocument.getElementById(idStr).focus();
            } else {
                processWord(data);
            }
        }
        

    }
    return (

        <Table striped bordered hover ref={board}>
            <tbody>
            {guesses.map(guess => <Guess 
            key={guess.Id} 
            guess={guess} 
            handleChange={handleChange} 
            keyUp = {keyUp}
            />)}
            </tbody>
        </Table>
    );

}


export default Board;