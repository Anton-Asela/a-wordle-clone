import Table from 'react-bootstrap/Table';
import Guess from "./Guess";

function Board(){

    return (
        <Table striped bordered hover>
            <tbody>
            <Guess/>
            </tbody>
        </Table>
        );

}


export default Board;