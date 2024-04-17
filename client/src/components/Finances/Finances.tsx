import { FC } from "react";
import st from "./styles.module.scss";

type FinancesProps = {
	data: {
		title: string;
		text: string;
	}[];
	grid?: "three"
	className?: string;
};


const Finances: FC<FinancesProps> = ({ data, grid, className }) => {
	const styles = `${st.finances} ${grid === 'three' ? st.threeEl : ''} ${className}`;
	return (
		<div className={styles}>
			{data.map((item) => (
				<div key={item.title} className={st.block}>
					<h3 className={st.title}>{item.title}</h3>
					<p className={st.text}>{item.text}</p>
				</div>
			))}
		</div>
	);
};

export default Finances;
