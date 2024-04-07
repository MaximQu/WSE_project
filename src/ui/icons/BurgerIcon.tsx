import { FC } from "react";

type BurgerIconProps = {
	className?: string;
	theme?: "dark" | "light";
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
			width="50"
			height="50"
			fill="none"
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
		>
			<path
				d="M6.25 14.584h37.5M6.25 25h37.5M6.25 35.416h37.5"
				stroke={colorScheme[theme]}
				stroke-width="3.6"
				stroke-linecap="round"
			/>
		</svg>
	);
};
export default BurgerIcon;
