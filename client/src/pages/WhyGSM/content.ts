import { ClarificationProps } from "@/components/Clarification/Clarification";
import { TPNGIcon } from "@/ui/icons/PNGIcon";

export const stats = [
	{
		value: "$10 Billion",
		text: "Invested",
	},
	{
		value: "10,000+",
		text: "Registered Investors",
	},
	{
		value: "500+",
		text: "Successful Exits",
	},
	{
		value: "100+",
		text: "Industry Partnerships",
	},
];

export const advantages: {
	title: string;
	text: string;
	icon: TPNGIcon;
}[] = [
	{
		title: "Global Access",
		text: "GSM offers access to diverse private market opportunities worldwide. Whether you're interested in startups, established companies, or real estate, our platform provides curated options to suit your preferences.",
		icon: "globe",
	},
	{
		title: "Innovative Technology",
		text: "GSM utilizes cutting-edge technology for a seamless investment experience. Our user-friendly platform simplifies exploration, research, and investment in private markets, ensuring efficiency and ease.",
		icon: "bulb",
	},
	{
		title: "Expert Guidance",
		text: "Our experienced professionals offer personalized support throughout your investment journey. From selecting opportunities to navigating the process, we're here to help you make informed decisions and maximize returns.",
		icon: "education",
	},
	{
		title: "Transparency and Security",
		text: "At GSM, we prioritize transparency and security. Adhering to strict regulatory standards, we employ robust measures to safeguard your investments and personal information, offering peace of mind as you invest.",
		icon: "security",
	},
];

export const explanations: Pick<ClarificationProps, "subtitle" | "text">[] = [
	{
		subtitle: "Comprehensive Network",
		text: "With a vast and diverse network spanning across various financial sectors, GSM offers unparalleled access to investment opportunities. Our global reach enables investors to explore a wide array of ventures, from traditional stocks to innovative assets.",
	},
	{
		subtitle: "Seasoned Expertise",
		text: "Our team comprises seasoned professionals with extensive experience in the financial industry. From seasoned investors to industry experts, our team provides invaluable guidance and support to help investors make informed decisions and navigate the complexities of the market.",
	},
	{
		subtitle: "Commitment to Integrity",
		text: "Transparency, integrity, and trust are at the core of everything we do at GSM. We adhere to stringent regulatory standards and uphold the highest ethical principles to safeguard investor interests and maintain the integrity of our platform. With GSM, investors can invest with confidence, knowing their assets are protected and their privacy is respected.",
	},
	{
		subtitle: "Cutting-Edge Technology",
		text: "GSM leverages state-of-the-art technology to provide a seamless and intuitive investment experience. Our advanced platform simplifies the investment process, offering user-friendly tools for research, analysis, and execution, ensuring efficiency and convenience for investors.",
	},
];
