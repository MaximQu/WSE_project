import { FC } from "react";
import st from "./styles.module.scss";

type CommentProps = {
	className?: string;
	data: {
		text: string;
		author: string;
		position: string;
	};
};

const Comment: FC<CommentProps> = ({ data, className }) => {
	return (
		<div className={`${st.comment} ${className}`}>
			<p className={st.text}>{data.text}</p>
			<div className={st.wrapper}>
				<span className={st.name}>{data.author}</span>
				<span className={st.position}>{data.position}</span>
			</div>
		</div>
	);
};

export default Comment;
