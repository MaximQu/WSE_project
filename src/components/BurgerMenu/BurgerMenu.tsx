import { ButtonOrLink } from "@/ui";
import { ArrowIcon, CrossIcon, LogoIcon } from "@/ui/icons";
import { ElementRef, FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import st from "./styles.module.scss";
import {
	BurgerMenuContentItem,
	BurgerMenuContentSubItem,
	burgerMenuContent,
} from "./burgerMenuContent";

type BurgerMenuProps = {
	handleCloseBurgerMenu: () => void;
};

const NavList = () => {
	const [isDroppedDown, setIsDroppedDown] = useState(false);

	const handleToggleDropdown = () => {
		setIsDroppedDown((prev) => !prev);
	};
	return (
		<ul className={st.navList}>
			{burgerMenuContent.map((menu: BurgerMenuContentItem) => {
				if (menu.url)
					return (
						<li key={menu.link}>
							<ButtonOrLink
								className={st.navLink}
                as="a"
								to={menu.url}
								styleType="dark"
							>
								{menu.link}
							</ButtonOrLink>
						</li>
					);
				return (
					<li key={menu.link}>
						<ButtonOrLink
							className={`${st.navLink} ${st.dropdownTrigger}`}
							styleType="dark"
							onClick={handleToggleDropdown}
						>
							{menu.link}{" "}
							<ArrowIcon direction={isDroppedDown ? "up" : "down"} />
						</ButtonOrLink>
						<div
							className={`${st.dropdown} ${isDroppedDown ? st.dropped : ""}`}
						>
							<ul>
								{menu.dropdown?.map((submenu: BurgerMenuContentSubItem) => (
									<li key={submenu.link}>
										<ButtonOrLink
											className={st.navLink}
                      as="a"
											to={submenu.url}
											styleType="dark"
										>
											{submenu.link}
										</ButtonOrLink>
									</li>
								))}
							</ul>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

const BurgerMenu: FC<BurgerMenuProps> = ({ handleCloseBurgerMenu }) => {
	const burgerRef = useRef<ElementRef<"nav">>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
      e.stopImmediatePropagation()
			if (burgerRef.current && !burgerRef.current.contains(e.target as Node)) {
				handleCloseBurgerMenu();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleCloseBurgerMenu]);

	return (
		<nav className={st.menu} ref={burgerRef}>
			<header className={st.header}>
				<Link to="/" className={st.logo}>
					<LogoIcon theme="light" className={st.icon} />
				</Link>
				<button
					className={st.closeBtn}
					type="button"
					onClick={handleCloseBurgerMenu}
				>
					<CrossIcon className={st.cross} />
				</button>
			</header>
			<NavList />
			<ButtonOrLink as="a" className={st.signUp} to="/">
				Sign up
			</ButtonOrLink>
		</nav>
	);
};

export default BurgerMenu;
