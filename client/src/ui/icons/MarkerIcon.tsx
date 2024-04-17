import { FC } from "react";

type MarkerIconProps = {
	className?: string;
};

const MarkerIcon: FC<MarkerIconProps> = ({ className = "" }) => {
	const styles = `${className}`;

	return (
		<svg
			width="26"
			height="31"
			fill="none"
			viewBox="0 0 26 31"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
		>
			<path
				d="M21.7513 4.5345a12.3742 12.3742 0 0 0-21.1243 8.75 12.3743 12.3743 0 0 0 3.6243 8.75l7.6854 7.7a1.458 1.458 0 0 0 1.5963.3192 1.458 1.458 0 0 0 .4746-.3192l7.7437-7.7729a12.3226 12.3226 0 0 0 0-17.427Zm-2.0854 15.3417-6.6646 6.6937-6.6646-6.6937a9.4207 9.4207 0 1 1 13.3292 0ZM8.6263 8.8074a6.3001 6.3001 0 0 0 0 8.8959 6.2852 6.2852 0 0 0 6.8208 1.3798 6.2856 6.2856 0 0 0 3.9126-5.7548 6.185 6.185 0 0 0-1.8375-4.448 6.271 6.271 0 0 0-8.8959-.0729Zm6.8396 6.825a3.3978 3.3978 0 1 1 .9771-2.377 3.3979 3.3979 0 0 1-1.05 2.377h.0729Z"
				fill="#FDFEFF"
			/>
		</svg>
	);
};
export default MarkerIcon;
