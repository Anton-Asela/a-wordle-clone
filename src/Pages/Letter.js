

function Letter(props) {

    // const measuredRef = useCallback(node => {
    //     if (node !== null) {
    //         props.letter.ref = node.focus;
    //     }
    // }, []);

  return (
    <td>
      <input
          id={props.letter.loc.x +"_"+ props.letter.loc.y}
        onKeyUp={(e) => props.keyUp(e,props.letter.loc)}
        onChange={(e) => props.letterChange(e,props.letter.loc)}
        type="text"
        value={props.letter.letter}
        maxLength="1"
      />
    </td>
  );
}

export default Letter;