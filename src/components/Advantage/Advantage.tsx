import { FC } from "react";
import st from "./styles.module.scss";
import PNGIcon, { TPNGIcon } from "@/ui/icons/PNGIcon";

type AdvantageProps = {
	data: {
		icon: TPNGIcon;
		title: string;
		text: string;
	};
	styleType?: "column" | "row";
	theme?: "light" | "dark";
};

const Advantage: FC<AdvantageProps> = ({
	data,
	styleType = "column",
	theme = "dark",
}) => {
	return (
		<>
			{styleType === "column" ? (
				<div className={`${st.advantage} ${theme === "light" ? st.light : ""}`}>
					<div className={st.icon}>
						<PNGIcon img={data.icon} />
					</div>
					<h3 className={st.title}>{data.title}</h3>
					<p className={st.text}>{data.text}</p>
				</div>
			) : (
				<div
					className={`${st.advantage} ${st.row} ${
						theme === "light" ? st.light : ""
					}`}
				>
					<div className={st.icon}>
						<PNGIcon img={data.icon} />
					</div>
					<div className="">
						<h3 className={st.title}>{data.title}</h3>
						<p className={st.text}>{data.text}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Advantage;
