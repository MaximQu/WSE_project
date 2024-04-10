import { ArrowIcon } from "@/ui/icons";
import { FC, useState } from "react";
import st from "./styles.module.scss";

type DropdownProps = {
	data?: {
		question: string;
		answer: string;
	};
};

const Dropdown: FC<DropdownProps> = ({ data }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<div className={st.dropdown}>
			<button className={st.trigger} onClick={() => setIsActive((prev) => !prev)}>
				<span className={st.question}>{data?.question}</span>
				<ArrowIcon type="circle" direction={isActive ? "up" : "down"} />
			</button>
			<div className={`${st.wrapper} ${isActive ? st.active : ""}`}>
				<div>
					<p className={st.answer}>{data?.answer}</p>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
