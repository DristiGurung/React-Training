import { useState } from "react";
import Square from "./Square";
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default function Board(){
  const initialValue = [
    null,null,null,
    null,null,null,
    null,null,null
  ];
  
   

  const[values, setValues]= useState(initialValue);
  const [isOnext,setIsONext] = useState(false);

  function handleClick(i)
  {
    if(calculateWinner(values) || values[i]){
      return;
    }
  
  
    let valuesCopy = values.slice();
    if(isOnext){
      valuesCopy[i] = "O";
      setIsONext(false);
    }
    else{
      valuesCopy[i] = "X";
      setIsONext(true);
    }
    setValues(valuesCopy);
  }

 


    const status ="Next player : " + (isOnext ? "O" : "X" );
    const winner = calculateWinner(values);
    return(
        <div>
        <div className="status">{winner?("Winner is " + winner): status}</div>
        <div className="board-row">
          <Square value={values[0]} onClick={() => {handleClick(0)}} />
          <Square value={values[1]} onClick={() => {handleClick(1)}} />
          <Square value={values[2]} onClick={() => {handleClick(2)}} />
          
        </div>
        <div className="board-row">
        <Square value={values[3]} onClick={() => {handleClick(3)}} />
        <Square value={values[4]} onClick={() => {handleClick(4)}} />
        <Square value={values[5]} onClick={() => {handleClick(5)}} />
        </div>
        <div className="board-row">
        <Square value={values[6]} onClick={() => {handleClick(6)}} />
        <Square value={values[7]} onClick={() => {handleClick(7)}} />
        <Square value={values[8]} onClick={() => {handleClick(8)}} />
        </div>
      </div>

    );
}