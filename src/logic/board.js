import { WIN_CONDITIONS } from "../utils/constants";

export const checkWinner = (boardToCheck) => {
  for (const win of WIN_CONDITIONS) {
    const [a, b, c] = win;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};