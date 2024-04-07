import { FC } from "react";

type QuoteIconProps = {
	type?: "open" | "close";
	className?: string;
};

const quoteTypeStyleValue = {
	open: "180deg",
	close: "0",
};

const QuoteIcon: FC<QuoteIconProps> = ({ type = "open", className = "" }) => {
	const styles = `${className}`;

	return (
		<svg
			width="88"
			height="61"
			fill="none"
      viewBox="0 0 88 61"
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
			style={{
				rotate: quoteTypeStyleValue[type],
			}}
		>
			<defs>
				<linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stop-color="#FDFEFF" stop-opacity="0" />
					<stop offset="100%" stop-color="#FDFEFF" />
				</linearGradient>
			</defs>
			<path
				opacity=".7"
				d="M38.4225 23.4352c0 6.3674-.9915 11.8368-2.9746 16.4082-1.9831 4.7347-4.5446 8.5714-7.6845 11.5102-3.1399 3.102-6.693 5.3061-10.6592 6.6122-4.1314 1.4694-8.1803 2.2041-12.1465 2.2041v-8.5714c4.2968 0 8.3456-1.4694 12.1465-4.4082 3.6357-2.7755 5.7841-6.6122 6.4451-11.5102-.4958.1633-1.0742.3265-1.7352.4898-.4958.1633-1.0742.3265-1.7352.4898-.8263.1633-1.7352.2449-2.7268.2449-4.9577 0-9.0892-1.8775-12.3944-5.6327C1.6526 27.6801 0 23.4352 0 18.5373c0-4.898 1.7352-9.2245 5.2057-12.9796C8.5107 1.9658 12.9728.1699 18.5915.1699c6.2798 0 11.1549 2.2857 14.6253 6.8572 3.4704 4.7346 5.2056 10.204 5.2056 16.4081Zm49.5775 0c0 6.3674-.9915 11.8368-2.9746 16.4082-1.9831 4.7347-4.5446 8.5714-7.6846 11.5102-3.1399 3.102-6.6929 5.3061-10.6591 6.6122-4.1315 1.4694-8.1803 2.2041-12.1465 2.2041v-8.5714c4.2967 0 8.3456-1.4694 12.1465-4.4082 3.6357-2.7755 5.784-6.6122 6.4451-11.5102-.4958.1633-1.0742.3265-1.7352.4898-.4958.1633-1.0742.3265-1.7353.4898-.8263.1633-1.7352.2449-2.7267.2449-4.9578 0-9.0892-1.8775-12.3944-5.6326-3.3052-3.5919-4.9577-7.8368-4.9577-12.7347 0-4.898 1.7352-9.2245 5.2056-12.9796C58.0883 1.9658 62.5502.1699 68.169.1699c6.2798 0 11.1549 2.2857 14.6254 6.8572C86.2648 11.7618 88 17.231 88 23.4352Z"
				fill="url(#Gradient1)"
			/>
		</svg>
	);
};
export default QuoteIcon;