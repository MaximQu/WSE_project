import { FC } from "react";

type ArrowIconProps = {
	type?: "regular" | "circle";
	direction?: "up" | "down" | "left" | "right";
	className?: string;
};

const directionStyleValue = {
	up: "180deg",
	right: "-90deg",
	down: "0deg",
	left: "90deg",
};

const ArrowIcon: FC<ArrowIconProps> = ({
	type = "regular",
	direction = "down",
	className = "",
}) => {
	const directionStyle = {
		rotate: directionStyleValue[direction],
	};

	const styles = `${className}`;

	return type === "regular" ? (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
			style={directionStyle}
		>
			<path
				d="M16.9997 9.1697a1 1 0 0 0-1.41 0l-3.59 3.54-3.54-3.54a1 1 0 0 0-1.41 0 1.0001 1.0001 0 0 0 0 1.42l4.24 4.24a.9997.9997 0 0 0 1.42 0l4.29-4.24a.9997.9997 0 0 0 0-1.42Z"
				fill="#BBC3CF"
			/>
		</svg>
	) : (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
			style={directionStyle}
		>
			<path
				d="M11.29 15.71c.0951.091.2072.1624.33.21.2435.1.5165.1.76 0a1.0012 1.0012 0 0 0 .33-.21l3-3a1.0041 1.0041 0 1 0-1.42-1.42L13 12.59V9a1.0002 1.0002 0 0 0-1.7071-.7071A1.0002 1.0002 0 0 0 11 9v3.59l-1.29-1.3a1.001 1.001 0 0 0-.71-.2958.9994.9994 0 0 0-.71.2958 1.001 1.001 0 0 0-.2958.71 1.0003 1.0003 0 0 0 .2958.71l3 3ZM12 22a10.0002 10.0002 0 0 0 7.0711-17.071 10.0005 10.0005 0 0 0-10.898-2.1678A10 10 0 0 0 12 22Zm0-18a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
				fill="#BBC3CF"
			/>
		</svg>
	);
};
export default ArrowIcon;
