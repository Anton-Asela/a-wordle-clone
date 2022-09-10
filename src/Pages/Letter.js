
import Form from 'react-bootstrap/Form'

function Letter(props) {
  return (
    <td>
      <input
        id={props.letter.location.letter +"_"+ props.letter.location.guess}
        type="text"
        defaultValue={props.letter.letter}
        maxLength="1"
        onChange={e => props.handleChange(e.nativeEvent, props.letter.location)}
        onKeyUp={e => props.keyUp(e, props.letter.location)}
      />
    </td>
  );
}

export default Letter;