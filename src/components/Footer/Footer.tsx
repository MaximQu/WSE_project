import { Link } from "react-router-dom";
import LogoIcon from "../../ui/icons/LogoIcon";
import st from "./styles.module.scss";

const Footer = () => {
	return (
		<footer className={`${st.footer} bg-primary`}>
			<Link to="/" className={st.logo}>
				<span hidden>World socket exchange</span>
				<LogoIcon size="big" className={st.icon} />
			</Link>
			<nav className={`${st.nav}`}>
				<Link to="/" className="text-md">Location</Link>
				<Link to="/" className="text-md">Contacts</Link>
				<ul className={`${st.list}`}>
					<li>
						<Link to="/" className="text-sm">Legal Disclaimer</Link>
					</li>
					<li>
						<Link to="/" className="text-sm">Privacy Statement</Link>
					</li>
					<li>
						<Link to="/" className="text-sm">Copyright</Link>
					</li>
				</ul>
			</nav>
			<p className="text-xs">© 2024 WORLD STOCK EXCHANGE. All Rights Reserved.</p>
		</footer>
	);
};
export default Footer;
