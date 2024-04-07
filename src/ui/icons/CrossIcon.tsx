import { FC } from "react";

type CrossIconProps = {
	className?: string;
};

const CrossIcon: FC<CrossIconProps> = ({ className = "" }) => {
	const styles = `${className}`;

	return (
		<svg
			width="30"
			height="30"
			fill="none"
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
		>
			<path
				d="m16.4158 15.0041 6.3-6.29a1.0041 1.0041 0 1 0-1.42-1.42l-6.29 6.3-6.29-6.3a1.0041 1.0041 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1.001 1.001 0 0 0-.2958.71 1.0003 1.0003 0 0 0 .2958.71 1.001 1.001 0 0 0 .71.2958.9994.9994 0 0 0 .71-.2958l6.29-6.3 6.29 6.3a.9997.9997 0 0 0 1.42 0 .9997.9997 0 0 0 0-1.42l-6.3-6.29Z"
				fill="#BBC3CF"
			/>
		</svg>
	);
};
export default CrossIcon;
