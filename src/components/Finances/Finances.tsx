import { FC } from "react";
import st from "./styles.module.scss";

type FinancesProps = {
	data: {
		title: string;
		text: string;
	}[];
	styleType?: "column" | "row";
	theme?: "light" | "dark";
	className?: string;
};

const Finances: FC<FinancesProps> = ({
	data,
	styleType = "column",
	theme = "dark",
	className,
}) => {
	return (
		<div
			className={`${st.finances} ${styleType === "row" ? st.row : ""} ${
				theme === "light" ? st.light : ""
			} ${className}`}
		>
      {
        data.map(item => (
          <div className={st.block}>
            <h3 className={st.title}>{item.title}</h3>
            <p className={st.text}>{item.text}</p>
          </div>
        ))
      }
		</div>
	);
};

export default Finances;
