import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";
import { Link } from "react-router-dom";
import { LogoIcon } from "@/ui/icons";
import { BurgerMenu } from "@/components";
import { FC, useState } from "react";
import { Theme } from "@/types/global";
import BurgerButton from "@/ui/BurgerButton/BurgerButton";
import { getOppositeTheme } from "@/utils/getOppositeTheme";
import useAnimatedMounting from "@/hooks/useAnimatedMounting";

type HeaderProps = {
	theme: Theme;
};

const Header: FC<HeaderProps> = ({ theme }) => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const [shouldRender, styles] = useAnimatedMounting(isBurgerOpen, 800, {
		onMount: "slideInBurgerMenu",
		onUnMount: "slideOutBurgerMenu",
	});
	const handleOpenBurgerMenu = () => {
		setIsBurgerOpen(true);
	};
	const handleCloseBurgerMenu = () => {
		setIsBurgerOpen(false);
	};

	return (
		<header className={`${st.header} ${theme === "dark" ? st.dark : ""}`}>
			<div className={`${st.wrapper} container`}>
				<BurgerButton
					className={st.burgerBtn}
					theme={getOppositeTheme(theme)}
					onClick={handleOpenBurgerMenu}
				/>
				<>
					{isBurgerOpen ? (
						<div
							className={st.burgerMenuBackdrop}
							onClick={handleCloseBurgerMenu}
						/>
					) : null}
					{shouldRender ? (
						<BurgerMenu
							handleCloseBurgerMenu={handleCloseBurgerMenu}
							styles={styles}
						/>
					) : null}
				</>
				<Link
					to="#"
					className={st.logo}
					aria-label="Logo icon button which leads to main page"
				>
					<LogoIcon type="big" theme={getOppositeTheme(theme)} />
				</Link>
				<ButtonOrLink className={st.btn}>My account</ButtonOrLink>
			</div>
		</header>
	);
};

export default Header;
