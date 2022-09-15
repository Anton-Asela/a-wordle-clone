import Table from 'react-bootstrap/Table';
import Guess from "./Guess";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import {useEffect, useRef, useState} from 'react';

function OneBoard(){

    useEffect(() => {
        boardEle.current.focus();
    });

    let arr = [];
    let activeCell = 1;
    const [cell, setCell] = useState(activeCell);
    for(let i = 1 ; i <= 30 ; i++){
        arr[i] = {Id: i, status: "Blank", letter: "" };
        arr[i]["status"] = "graybg";
    }
    const [guesses, setGuesses] = useState(arr);
    let boardEle = useRef();
    const [board,setBoard] = useState(boardEle);
    let answerVal = "ATOMS";
    const [answer,setAnawer] = useState(answerVal);

    let alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let alphaArr = [];
    for (let i = 0; i < alpha.length; i++) {
        alphaArr[i] = {Id: i, status: "Blank", letter: String.fromCharCode(alpha[i])};
        alphaArr[i]["status"] = "lightgraybg";
    }
    const [alphabet,setAlphabet] = useState(alphaArr);

    function backspaced() {
        const newGuesses1 = guesses.slice();
        newGuesses1[cell].letter = "";
        setGuesses(newGuesses1);
        if (cell !== 1) setCell(cell - 1)
    }

    function validword(wordArr) {
        return true;
    }

    function correctGuess(wordArr) {
        return false;
    }

    function colorAlphabet(letter, status) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j].letter === letter)
                alphabet[j].status = status;
        }
    }

    function colorThatRow(wordArr) {

        for (let i = 0; i < wordArr.length; i++) {

        }
        wordArr.forEach(
            (x, i) =>
            {
                let letter = x.letter;
                if(answer.charAt(i) === letter)
                {
                    let status = "greenbg";
                    x.status= status;
                    colorAlphabet(letter, status);
                }
                else if(answer.includes(letter)){
                    let status = "yellobg";
                    x.status= status;
                    colorAlphabet(letter, "graybg");
                }else{
                    let status = "graybg";
                    x.status= status
                    colorAlphabet(letter, status);
                }

            }
    );


    }

    function wordWasGuessed() {
        let wordArr = guesses.slice(cell-4,cell+1);
        if(validword(wordArr)){
            if(correctGuess(wordArr)){
                console.log("yay");
            }else{
                colorThatRow(wordArr);
            }
        }

    }

    function keyUp(e){
        if (e.keyCode === 8 && cell >0) {
            backspaced();
        }else if (cell <31) {
            if(e.key.length !==1 ) return;
            const isLetter = (e.key >= 'a' && e.key <= 'z');
            if(isLetter){
                const newGuesses1 = guesses.slice();
                newGuesses1[cell].letter = e.key.toUpperCase();
                setGuesses( newGuesses1);
                if (cell !== 30 ) setCell(cell+1)
                if(cell % 5 === 0 && cell > 2) {
                    wordWasGuessed();
                }
            }
        }
    }

    return (

    <div className="OneBoard" hover ref={board}  tabIndex="0" onKeyUp={keyUp} autofocus={true}>


        <Stack gap={5}>
            <div className="bg-light border"><div className="grid"  >
                {guesses.map(
                    cell => <div
                        className={'square '+  cell.status}
                        key={cell.Id}
                    >{cell.letter}</div>)
                }
            </div></div>
            <div className="bg-light border"><div className="alphagrid"  >
                {alphabet.map(
                    cell => <div
                        className={'square '+  cell.status}
                        key={cell.Id}
                    >{cell.letter}</div>)
                }
            </div></div>
            <div className="bg-light border">Third item</div>
        </Stack>


        <br></br>

    </div>
    );

}


export default OneBoard;