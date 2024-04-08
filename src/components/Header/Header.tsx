import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";
import { Link } from "react-router-dom";
import { LogoIcon } from "@/ui/icons";
import { BurgerMenu } from "@/components";
import { FC, useState } from "react";
import { Theme } from "@/types/global";
import BurgerButton from "@/ui/BurgerButton/BurgerButton";
import { getOppositeTheme } from "@/utils/getOppositeTheme";
import { animated, useTransition } from "react-spring";

type HeaderProps = {
	theme: Theme;
};

const Header: FC<HeaderProps> = ({ theme }) => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const handleOpenBurgerMenu = () => {
		setIsBurgerOpen(true);
	};
	const handleCloseBurgerMenu = () => {
		setIsBurgerOpen(false);
	};

	const transition = useTransition(isBurgerOpen, {
		from: { x: "-100vw", easing: "ease-in" },
		enter: { x: "0vw", easing: "linear" },
		leave: { x: "-100vw", easing: "ease-in-out" },
		config: { duration: 400 },
	});

	return (
		<header className={`${st.header} ${theme === "dark" ? st.dark : ""}`}>
			<div className="container">
				{transition((style, item) =>
					item ? (
						<animated.div style={style}>
							<BurgerMenu handleCloseBurgerMenu={handleCloseBurgerMenu} />
						</animated.div>
					) : (
						""
					),
				)}
				<div className={`${st.wrapper}`}>
					<BurgerButton
						className={st.burgerBtn}
						theme={getOppositeTheme(theme)}
						onClick={handleOpenBurgerMenu}
					/>

					<Link to="#" className={st.logo}>
						<LogoIcon type="big" theme={getOppositeTheme(theme)} />
					</Link>
					<ButtonOrLink className={st.btn}>My account</ButtonOrLink>
				</div>
			</div>
		</header>
	);
};

export default Header;
