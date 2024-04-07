import { FC } from "react";
import st from "./styles.module.scss";

type CorporateInfoBlockProps = {
	title: string;
	data: {
		title: string;
		text: string;
	}[];
};

const CorporateInfoBlock: FC<CorporateInfoBlockProps> = ({ data, title }) => {
	return (
    <>
			<h1 className={st.title}>{title}</h1>
			<div className={st.wrapper}>
				{data.map((item) => (
					<div>
						<h2 className={st.heading}>{item.title}:</h2>
						<p className={st.text}>{item.text}</p>
					</div>
				))}
			</div>
    </>
	);
};

export default CorporateInfoBlock;
