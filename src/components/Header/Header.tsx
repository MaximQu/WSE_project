import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";
import { Link } from "react-router-dom";
import { LogoIcon } from "@/ui/icons";

const Header = () => {
	return (
		<header className={st.header}>
			<div className={`${st.wrapper} container`}>
				<Link to="#">
					<LogoIcon size="big" />
				</Link>
				<ButtonOrLink className="">My account</ButtonOrLink>
			</div>
		</header>
	);
};

export default Header;
