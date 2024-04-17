import { FC, ReactNode } from "react";
import st from "./styles.module.scss";
import { Theme } from "@/types/global";

type UniversalSectionProps = {
	className?: string;
	title?: string;
	subtitle?: string;
	children?: ReactNode;
	theme?: Theme;
};

const UniversalSection: FC<UniversalSectionProps> = ({
	className = "",
	title = "",
	subtitle = "",
	theme = "dark",
	children,
}) => {
	const styles = `${className} ${st.section} ${
		theme === "dark" ? st.dark : ""
	}`;
	return (
		<section className={styles}>
			<div className="container">
				{title || subtitle ? (
					<header className={st.header}>
						<h2 className={st.title}>{title}</h2>
						{subtitle ? <p className={st.subtitle}>{subtitle}</p> : null}
					</header>
				) : null}
				{children}
			</div>
		</section>
	);
};
export default UniversalSection;
