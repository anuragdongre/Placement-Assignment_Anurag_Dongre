import React from 'react'; 

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    };
  }

  handleClick(index) {
    if (this.state.board[index] || this.state.winner) {
      return;
    }

    const newBoard = [...this.state.board];
    newBoard[index] = this.state.currentPlayer;
    const newPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';

    this.setState({
      board: newBoard,
      currentPlayer: newPlayer
    });

    this.checkWinner(newBoard);
  }

  

  checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: board[a]
        });
        break;
      }
    }
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    });
  }

  renderSquare(index) {
    return (
      <button className="square" onClick={() => this.handleClick(index)}>
        {this.state.board[index]}
      </button>
    );
  }

  render() {
    let status;
  if (this.state.winner) {
    status = 'Winner: ' + this.state.winner;
  } else if (this.state.board.every(square => square !== null)) {
    status = 'It\'s a draw!';
  } else {
    status = 'Next player: ' + this.state.currentPlayer;
  }

    return (
      <div className="tic-tac-toe-container"> {/* Add a wrapper container */}
        <div className="status">{status}</div>
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className='reset-button'>
        <button  onClick={() => this.resetGame()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
