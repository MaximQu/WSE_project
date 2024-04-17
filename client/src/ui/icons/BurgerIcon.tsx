import { Theme } from "@/types/global";
import { FC } from "react";

type BurgerIconProps = {
	className?: string;
	theme?: Theme;
};
const colorScheme = {
	light: "#FDFEFF",
	dark: "#2A3342",
};
const BurgerIcon: FC<BurgerIconProps> = ({
	className = "",
	theme = "light",
}) => {
	const styles = `${className}`;

	return (
		<svg
			width="38"
			height="22"
			viewBox="0 0 42 26"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
		>
			<path
				d="M2.25 2.584h37.5M2.25 13h37.5M2.25 23.416h37.5"
				stroke={colorScheme[theme]}
				strokeWidth="3.6"
				strokeLinecap="round"
			/>
		</svg>
	);
};
export default BurgerIcon;
