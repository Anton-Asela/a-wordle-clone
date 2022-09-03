
import Form from 'react-bootstrap/Form'

function Letter(props) {
  return (
   
    <td>

      <input
        type="text"
        defaultValue=       {props.letter.letter}
        maxLength="1"
      />
    </td>
  );
}

export default Letter;