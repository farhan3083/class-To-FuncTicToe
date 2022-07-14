import Square from "./SquareComponent";
import CalculateWinner from "./CalculateWinner";

function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = React.useState(true);
  
    function renderSquare(i) {
      return (
        <Square
          value={squares[i]}
          onClick={() => {
            const nextSquares = squares.slice();
            nextSquares[i] = xIsNext ? "X" : "O";
            setSquares(nextSquares);
            setxIsNext(!xIsNext);
          }}
        />
      );
    }
    const winner = CalculateWinner(squares); //CalculateWinner fxn used 
  
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
    
  }
  export default Board;