import { Theme } from "@/types/global";
import { ButtonHTMLAttributes, FC } from "react";
import { BurgerIcon } from "../icons";
import st from "./styles.module.scss";

type BurgerButtonProps = {
	theme?: Theme;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BurgerButton: FC<BurgerButtonProps> = ({
	theme = "light",
	className = "",
	...props
}) => {
	return (
		<button
			type="button"
			className={`${className} ${st.btn} ${st[theme]}`}
			{...props}
      aria-label="Burger menu button"
		>
			<BurgerIcon theme={theme} />
		</button>
	);
};
export default BurgerButton;
