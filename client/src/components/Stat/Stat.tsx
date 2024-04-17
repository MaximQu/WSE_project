import { FC } from "react";
import st from "./styles.module.scss";

type StatProps = {
	data: {
		value: string;
		text: string;
	};
	theme?: "light" | "dark";
};

const Stat: FC<StatProps> = ({ data, theme = "light" }) => {
	return (
		<>
			<div
				key={data.text}
				className={`${st.stat} ${theme === "dark" ? st.dark : ""}`}
			>
				<span className={st.value}>{data.value}</span>
				<span className={st.text}>{data.text}</span>
			</div>
		</>
	);
};

export default Stat;
