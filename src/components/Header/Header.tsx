import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";

const Header = () => {
	return (
		<header className={st.header}>
			<a href="#"></a>
			<ButtonOrLink className="">My account</ButtonOrLink>
		</header>
	);
};

export default Header;
