import { FC } from "react";

type CrossIconProps = {
	className?: string;
};

const CrossIcon: FC<CrossIconProps> = ({ className = "" }) => {
	const styles = `${className}`;

	return (
		<svg
			width="16"
			height="16"
			fill="none"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
		>
			<path
				d="m9.4158 8.004 6.3-6.29a1.0041 1.0041 0 1 0-1.42-1.42l-6.29 6.3-6.29-6.3a1.0041 1.0041 0 0 0-1.42 1.42l6.3 6.29-6.3 6.2901a1.001 1.001 0 0 0-.2958.71 1.0003 1.0003 0 0 0 .2958.71 1.001 1.001 0 0 0 .71.2958.9994.9994 0 0 0 .71-.2958l6.29-6.3 6.29 6.3a.9997.9997 0 0 0 1.42 0 .9997.9997 0 0 0 0-1.42l-6.3-6.29Z"
				fill="#BBC3CF"
			/>
		</svg>
	);
};
export default CrossIcon;
