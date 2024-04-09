import { ArrowIcon } from "@/ui/icons";
import { FC, useState } from "react";
import st from "./styles.module.scss";

type DropDownProps = {
	data?: {
		question: string;
		answer: string;
	};
};

const DropDown: FC<DropDownProps> = ({ data }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<div className={st.dropDown}>
			<div className={st.heading} onClick={() => setIsActive((prev) => !prev)}>
				<h2 className={st.question}>{data?.question}</h2>
				<ArrowIcon type="circle" direction={isActive ? "up" : "down"} />
			</div>
			<div className={`${st.wrapper} ${isActive ? st.active : ""}`}>
				<div>
					<p className={st.answer}>{data?.answer}</p>
				</div>
			</div>
		</div>
	);
};

export default DropDown;
