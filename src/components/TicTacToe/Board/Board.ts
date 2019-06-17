enum isNext {
  X = 1,
  O = 0
}

/*
So we need a hard line between the component and the controller
so the component will have an array for its state and the controller 
Which I might refactor to the name BoardLogic that way this controller
will pass only the string winner and an array for the board state which 
will be placed in the component state.
*/
class BoardLogic{
  private board: string[];

  constructor() {
    this.board = Array(9).fill('');
  }

  public getBoardState(): string[]{
    return [...this.board];
  }

  public selectSquare(square: number) {
    if (this.board.squares[square] === '' && !this.calculateWinner(this.board.squares)) {
      const squares = this.board.squares.splice(0)
      squares[square] = this.board.nextPlayer ? 'X' : 'O';
      this.board = {
        squares: squares,
        nextPlayer: this.board.nextPlayer ? isNext.O : isNext.X
      };
    }
  }

  public calculateWinner(squares: string[]) {
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
}

export default BoardLogic;
