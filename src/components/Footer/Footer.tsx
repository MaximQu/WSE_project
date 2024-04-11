import { Link } from "react-router-dom";
import LogoIcon from "../../ui/icons/LogoIcon";
import st from "./styles.module.scss";
import { ButtonOrLink } from "@/ui";

const Footer = () => {
	return (
		<footer className={`${st.footer} bg-primary`}>
			<Link to="/" className={st.logo}>
				<span hidden>World socket exchange</span>
				<LogoIcon type="big" className={st.icon} />
			</Link>
			<nav className={`${st.nav}`}>
				<Link to="/" className="text-md">
					Location
				</Link>
				<Link to="/contacts" className="text-md">
					Contacts
				</Link>
				<ul className={`${st.list}`}>
					<li>
						<ButtonOrLink
							as="a"
							styleType="dark"
							to="/legal-notice"
							className={st.link}
						>
							Legal Disclaimer
						</ButtonOrLink>
					</li>
					<li>
						<ButtonOrLink
							as="a"
							styleType="dark"
							to="/privacy-statement"
							className={st.link}
						>
							Privacy Statement
						</ButtonOrLink>
					</li>
					<li>
						<ButtonOrLink
							as="a"
							styleType="dark"
							to="/copyright"
							className={st.link}
						>
							Copyright
						</ButtonOrLink>
					</li>
				</ul>
			</nav>
			<p className="text-xs">
				© 2024 WORLD STOCK EXCHANGE. All Rights Reserved.
			</p>
		</footer>
	);
};
export default Footer;
