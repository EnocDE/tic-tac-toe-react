import confetti from "canvas-confetti";
import { useState } from "react";
import "./App.css";
import resetImage from "./assets/reset.png";
import Board from "./components/Board";
import TurnMenu from "./components/TurnMenu";
import WinnerModal from "./components/WinnerModal";
import { checkEndGame, checkWinner } from "./logic/board";
import { resetGameToStorage, saveGameToStorage } from "./logic/storage";
import { TURNS } from "./utils/constants";

function App() {
	const [board, setBoard] = useState(() => {
		const boardLocalStorage = localStorage.getItem("board");
		return boardLocalStorage
			? JSON.parse(boardLocalStorage)
			: Array(9).fill(null);
	});
	const [turn, setTurn] = useState(() => {
		const turnLocalStorage = localStorage.getItem("turn");
		return turnLocalStorage ?? TURNS.X;
	});
	const [winner, setWinner] = useState(null);

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURNS.X);
		setWinner(null);

		resetGameToStorage()
	};

	const updateBoard = (index) => {
		if (board[index] || winner) return;

		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		setTurn(newTurn);

    saveGameToStorage({board: newBoard, turn: newTurn})

		const newWinner = checkWinner(newBoard);
		if (newWinner) {
			confetti();
			setWinner(newWinner);
      console.log(newWinner);
			resetGameToStorage()
		} else if (checkEndGame(newBoard)) {
			setWinner(false);
		}
	};

	return (
		<main className="board">
			<h1>Tic tac toe</h1>

			<Board board={board} updateBoard={updateBoard} />

			<TurnMenu turn={turn} resetGame={resetGame} />

			<WinnerModal winner={winner} resetGame={resetGame} />

			<button className="restart-button-board" onClick={resetGame}>
				<img src={resetImage} alt="imagen de reiniciar" />
			</button>
		</main>
	);
}

export default App;
