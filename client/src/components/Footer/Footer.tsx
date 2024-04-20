import { ButtonOrLink } from "@/ui";
import { Link } from "react-router-dom";
import LogoIcon from "../../ui/icons/LogoIcon";
import st from "./styles.module.scss";

const Footer = () => {
	return (
		<footer className={`${st.footer} bg-primary`}>
			<Link to="/" className={st.logo} aria-label="World socket exchange">
				<LogoIcon type="big" className={st.icon} />
			</Link>
			<nav className={`${st.nav}`}>
				<ButtonOrLink as="a" to="/contacts" styleType="dark" className="text-md">
					Location
				</ButtonOrLink>
				<ButtonOrLink as="a" to="/contacts" styleType="dark" className="text-md">
					Contacts
				</ButtonOrLink>
				<div className={`${st.list}`}>
					<ButtonOrLink
						as="a"
						styleType="dark"
						to="/legal-notice"
						className={st.link}
					>
						Legal Disclaimer
					</ButtonOrLink>
					<ButtonOrLink
						as="a"
						styleType="dark"
						to="/privacy-statement"
						className={st.link}
					>
						Privacy Statement
					</ButtonOrLink>
					<ButtonOrLink
						as="a"
						styleType="dark"
						to="/copyright"
						className={st.link}
					>
						Copyright
					</ButtonOrLink>
				</div>
			</nav>
			<p className="text-copyright">
				© 2024 GLOBAL STOCK MARKET. All Rights Reserved.
			</p>
		</footer>
	);
};
export default Footer;
