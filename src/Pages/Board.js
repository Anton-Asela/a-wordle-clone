import Table from 'react-bootstrap/Table';
import Guess from "./Guess";
import { useRef, useState} from 'react';

function Board(){


    let arr = [];
    for(let i = 1 ; i <= 6 ; i++){
        let letters = [];
        for(let j = 1; j <= 5; j++) {
            letters[j] = {Id: j, color: "Blank", focus: null, letter: "" };
            letters[j]["loc"]= {};
            letters[j]["loc"]["x"] = j;
            letters[j]["loc"]["y"] = i;
            letters[j]["ref"] = null;
        }
        arr[i] = {Id: i, letters: letters};
    }
    let boardEle = useRef();
    const [guesses, setGuesses] = useState(arr);
    const [board,setBoard] = useState(boardEle)
    function letterChange(e,data) {
        const newGuesses1 = guesses.slice();
        newGuesses1[data.y].letters[data.x].letter = e.key;
        setGuesses( newGuesses1);
    }
    function keyUp1(e,data){
        console.log(e)
        console.log(data)
        if (e.keyCode === 8) {
            console.log('empty current cell and back');
            if(data.x >1){
                let idStr = data.x-1+"_"+(data.y)
                // newGuesses[data.y].letters[data.x].letter = "";
                boardEle.current.ownerDocument.getElementById(idStr).focus();
                e.preventDefault();
            }
        }
        if (e.keyCode === 13) {
            console.log('next');
            if(data.x < 5){
                let idStr = data.x+1+"_"+(data.y)
                boardEle.current.ownerDocument.getElementById(idStr).focus()
            }
        }

    }

    return (
        <Table className={"bd"} hover ref={board}>
            <tbody>
            {guesses.map(guess => <Guess
                key={guess.Id}
                guess={guess}
                letterChange={letterChange}
                keyUp={keyUp1}
            />)}
            </tbody>
        </Table>
    );

}


export default Board;