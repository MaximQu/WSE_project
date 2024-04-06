import { ButtonOrLink } from "@/ui";
import { LogoIcon } from "@/ui/icons";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import st from "./styles.module.scss";

const BurgerMenu = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isActiveDropDown, setIsActiveDropDown] = useState<boolean>(false);

	const burgerRef = useRef<ElementRef<"div">>(null);

	const transition = useTransition(isActive, {
		from: { y: -400, opacity: 0, easing: "ease-in" },
		enter: { y: 0, opacity: 1, easing: "linear" },
		leave: { y: -400, opacity: 0, easing: "ease-in-out" },
		config: { duration: 200 },
	});

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (burgerRef.current && !burgerRef.current.contains(e.target as Node)) {
				setIsActive(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div>
			<button
				type="button"
				onClick={() => setIsActive(true)}
				className={st.burgerMenu}
			>
				<div className={st.burgerInner}></div>
			</button>
			{transition((style, item) =>
				item ? (
					<animated.div
						ref={burgerRef}
						className={`${st.wrapper}`}
						style={style}
					>
						<div className={st.heading}>
							<Link to="/">
								<LogoIcon className={st.logo} theme="light" />
							</Link>
							<button
								type="button"
								onClick={() => setIsActive(false)}
								className={st.closeBtn}
							>
								x
							</button>
						</div>
						<nav>
							<ul className={st.navList}>
								<li>
									<Link to="/trade" className={st.navLink}>
										Trade
									</Link>
								</li>
								<li>
									<Link to="/sustainable" className={st.navLink}>
										Sustainable
									</Link>
								</li>
								<li>
									<Link to="/market" className={st.navLink}>
										Market
									</Link>
								</li>
								<li>
									<Link to="/regulation" className={st.navLink}>
										Regulation
									</Link>
								</li>
								<li>
									<Link to="/affiliation" className={st.navLink}>
										Affiliation
									</Link>
								</li>
								<li>
									<Link to="/private-markets" className={st.navLink}>
										Private markets
									</Link>
								</li>
								<li>
									<Link to="/why-wse" className={st.navLink}>
										Why WSE?
									</Link>
								</li>
								<li>
									<button
										type="button"
										onClick={() => setIsActiveDropDown((prev) => !prev)}
										className={st.navLink}
									>
										<span>About WSE</span>
									</button>
									<div
										className={`${st.dropDown} ${
											isActiveDropDown && st.active
										}`}
									>
										<div>
											<Link className={st.navLink} to="/company-profile">
												Company profile
											</Link>
											<Link className={st.navLink} to="/investor-relations">
												Investor relations
											</Link>
										</div>
									</div>
								</li>
								<li>
									<Link to="/contacts" className={st.navLink}>
										Contacts
									</Link>
								</li>
							</ul>
						</nav>
						<ButtonOrLink className={st.btn} as="a" to="/auth/sign-up">
							Sign Up
						</ButtonOrLink>
					</animated.div>
				) : (
					""
				),
			)}
		</div>
	);
};

export default BurgerMenu;
