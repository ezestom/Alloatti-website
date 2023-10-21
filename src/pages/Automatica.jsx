import { Base } from "../components/Base";
import { useTheme } from "../context/ThemeContext";

export function Automatica() {
   const { isDarkTheme } = useTheme();
	return (
		<>
			<Base />

		</>
	);
}
