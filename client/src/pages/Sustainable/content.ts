import {
	windFarmDesktopJPG,
	windFarmMobileJPG,
	windFarmTabletJPG,
} from "@/assets/img/jpg";
import { ClarificationProps } from "@/components/Clarification/Clarification";
import { AdaptiveImgProps } from "@/ui/AdaptiveImg/AdaptiveImg";
import { TPNGIcon } from "@/ui/icons/PNGIcon";

export const faq_content = [
	{
		question: "What is sustainable investing?",
		answer:
			"Sustainable investing integrates environmental, social, and governance (ESG) factors into investment decisions to generate long-term value.",
	},
	{
		question: "How can I invest sustainably with World Stock Exchange?",
		answer:
			"World Stock Exchange offers a range of sustainable investment options, including green bonds, socially responsible funds, and ESG-rated companies.",
	},
	{
		question: "What are the benefits of sustainable investing?",
		answer:
			"The benefits of sustainable investing include diversification, resilience to environmental and social risks, and positive impact on society and the environment.",
	},
	{
		question: "Why is sustainability important for investors?",
		answer:
			"Sustainability is important for investors because it helps mitigate risks, enhances long-term returns, and aligns investments with personal values.",
	},
	{
		question:
			"How does World Stock Exchange measure sustainability performance?",
		answer:
			"World Stock Exchange measures sustainability performance using key metrics and indicators, ensuring transparency and accountability.",
	},
];

export const advantages: {
	title: string;
	text: string;
	icon: TPNGIcon;
}[] = [
	{
		title: "Inclusivity",
		text: "Enabling participation of all stakeholders in sustainable initiatives and investments.",
		icon: "leaf",
	},
	{
		title: "Resilience",
		text: "Building resilience to environmental and social risks through sustainable practices.",
		icon: "fingerprint",
	},
	{
		title: "Accountability",
		text: "Maintaining responsibility through transparent reporting and accountability mechanisms.",
		icon: "chart",
	},
	{
		title: "Innovation",
		text: "Driving innovation through sustainable solutions and investment strategies.",
		icon: "bulb",
	},
];

export const sustainable: {
	clarification: Pick<ClarificationProps, "title" | "text">;
	img: Pick<AdaptiveImgProps, "desktop" | "tablet" | "mobile" | "alt">;
} = {
	clarification: {
		title: "Sustainable",
		text: "At World Stock Exchange, we are committed to promoting sustainability in the financial sector.\n\nWe recognize the importance of integrating environmental, social, and governance (ESG) considerations into our business practices and investment decisions",
	},
	img: {
		desktop: windFarmDesktopJPG,
		tablet: windFarmTabletJPG,
		mobile: windFarmMobileJPG,
		alt: "Sustainable",
	},
};
