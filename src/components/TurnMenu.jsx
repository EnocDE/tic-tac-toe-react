import { TURNS } from "../utils/constants";
import { Square } from "./Square";

export default function TurnMenu({ turn, resetGame }) {
	return (
		<section className="turn">
			<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
			<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
		</section>
	);
}
