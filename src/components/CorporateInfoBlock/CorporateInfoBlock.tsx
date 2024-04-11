import { FC } from "react";
import st from "./styles.module.scss";

type CorporateInfoBlockProps = {
	data: {
		title: string;
		text: string;
	}[];
};

const CorporateInfoBlock: FC<CorporateInfoBlockProps> = ({ data }) => {
	return (
		<div className={st.wrapper}>
			{data.map((item) => (
				<div key={item.title}>
					<h2 className={st.heading}>{item.title}:</h2>
					<p className={st.text}>{item.text}</p>
				</div>
			))}
		</div>
	);
};

export default CorporateInfoBlock;
