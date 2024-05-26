import { Square } from "./Square";

export default function WinnerModal({ winner, resetGame }) {
	if (winner === null) return null;

	const winnerText = winner === false ? "Empate!" : "Ganó:";

	return (
		<section className="winner">
			<div className="menu">
				<h2>{winnerText}</h2>

        {
          winner && <header className="win">{winner && <Square>{winner}</Square>}</header>
        }
				
				<footer>
					<button className="restart-button" onClick={resetGame}>
						Volver a jugar
					</button>
				</footer>
			</div>
		</section>
	);
}
