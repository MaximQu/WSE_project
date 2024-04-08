import { FC } from "react";
import st from "./styles.module.scss";

type StatProps = {
	data: {
		value: string;
		text: string;
	}[];
	theme?: "light" | "dark";
};

const Stat: FC<StatProps> = ({ data, theme = 'light' }) => {
	return (
		<>
			{data.map((stat) => (
				<div
					key={stat.text}
					className={`${st.stat} ${theme === "dark" ? st.dark : ""}`}
				>
					<span className={st.value}>{stat.value}</span>
					<span className={st.text}>{stat.text}</span>
				</div>
			))}
		</>
	);
};

export default Stat;
