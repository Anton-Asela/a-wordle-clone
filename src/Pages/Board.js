import Table from 'react-bootstrap/Table';
import Guess from "./Guess";

function Board(){

    return (
        <Table striped bordered hover>
            <tbody>
            <Guess/>
            <Guess/>
            <Guess/>
            <Guess/>
            <Guess/>
            <Guess/>
            </tbody>
        </Table>
        );

}


export default Board;