import LogoIcon from "../../ui/icons/LogoIcon";
import st from "./styles.module.scss";

const Footer = () => {
	return (
		<footer className={`${st.footer} bg-primary`}>
			<a href="#" className={st.logo}>
				<span hidden>World socket exchange</span>
				<LogoIcon size="big" className={st.icon} />
			</a>
			<nav className={`${st.nav}`}>
				<ul className={`${st.list}`}>
					<li>
						<a href="#">location</a>
					</li>
					<li>
						<a href="#">contacts</a>
					</li>
					<li>
						<ul className={`${st.sublist}`}>
							<li>
								<a href="#">Legal Disclaimer</a>
							</li>
							<li>
								<a href="#">Privacy Statement</a>
							</li>
							<li>
								<a href="#">Copyright</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<p>© 2024 WORLD STOCK EXCHANGE. All Rights Reserved.</p>
		</footer>
	);
};
export default Footer;
