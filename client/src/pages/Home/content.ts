import { confidenceSVG } from "@/assets/img/svg";
import { ClarificationProps } from "@/components/Clarification/Clarification";
import { TPNGIcon } from "@/ui/icons/PNGIcon";

export const advantages: {
	title: string;
	text: string;
	icon: TPNGIcon;
}[] = [
	{
		title: "Global Reach",
		text: "Benefit from our extensive network and gain access to investment opportunities across continents, all from one platform.",
		icon: "globe",
	},
	{
		title: "Secure and Reliable",
		text: "Rest assured knowing that your investments are protected by robust security measures and stringent regulatory compliance.",
		icon: "security",
	},
	{
		title: "Expert Insights",
		text: "Tap into the expertise of our seasoned financial professionals, who provide valuable market analysis and personalized investment advice.",
		icon: "customer",
	},
	{
		title: "Innovative Technology",
		text: "Harness cutting-edge trading tools and technology, providing you with real-time market data and advanced analytical capabilities for informed decision-making.",
		icon: "bulb",
	},
	{
		title: "Customized Solutions",
		text: "Receive personalized investment strategies tailored to your unique financial goals, risk tolerance, and investment preferences, ensuring a strategy that aligns with your needs.",
		icon: "tools",
	},
	{
		title: "Educational Resources",
		text: "Expand your knowledge and skills with our comprehensive library of educational resources, including webinars, tutorials, and articles, designed to empower you to make informed investment decisions.",
		icon: "education",
	},
];

export const stats: {
	value: string;
	text: string;
}[] = [
	{
		value: "2,000+",
		text: "Issuers",
	},
	{
		value: "$1B",
		text: "Transactions",
	},
	{
		value: "20%",
		text: "Performance Boost",
	},
	{
		value: "99.9%",
		text: "Accuracy",
	},
];

export const confidence: Pick<ClarificationProps, "title" | "text"> & {
	img: {
		src: string;
		alt: string;
	};
} = {
	title: "Invest with Confidence",
	text: "At Global Stock Market, we believe in democratizing access to global financial markets.\n\nWhether you're an individual investor or a corporate entity, our platform offers a diverse array of investment opportunities to help you achieve your financial objectives.",
	img: {
		src: confidenceSVG,
		alt: "Invest with Confidence",
	},
};

export const transformation: Pick<ClarificationProps, "title" | "text"> = {
	title: "Transform your idea into reality",
	text: "Discover the Difference with GSM. Create your account!",
};
