function checkTicTacToeWinner(board, player) {
  //  combinations
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

  // Check  winning combination
    for (const combination of lines) {
        if (
            board[combination[0]] === player &&
            board[combination[1]] === player &&
            board[combination[2]] === player
        ) {
            return `${player} is the winner!`;
        }
    }
        
            //   return `${player} is not the winner.`;
    return "Draw";
        
    }
const board = ["X", "O", "X", "O", "X", "", "O", "X", "O"];
console.log(checkTicTacToeWinner(board, "X")); // Output: X is the winner!
console.log(checkTicTacToeWinner(board, "O")); // Output: O is not the winner.
