import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";
import { Link } from "react-router-dom";
import { LogoIcon } from "@/ui/icons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
	return (
		<header className={st.header}>
			<div className={`${st.wrapper} container`}>
        <BurgerMenu/>
				<Link to="#">
					<LogoIcon size="big" />
				</Link>
				<ButtonOrLink className="">My account</ButtonOrLink>
			</div>
		</header>
	);
};

export default Header;
