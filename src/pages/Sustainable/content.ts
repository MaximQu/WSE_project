import { solarPanelFieldDesktopJPG, solarPanelFieldMobileJPG, solarPanelFieldTabletJPG } from "@/assets/img/jpg";
import { TPNGIcon } from "@/ui/icons/PNGIcon";

export const content = [
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

export const advantages: (
	| {
			desktop: string;
			tablet: string;
			mobile: string;
			alt: string;
	  }
	| {
			title: string;
			text: string;
			icon: TPNGIcon;
	  }
)[] = [
	{
		title: "Global Reach",
		text: "Benefit from our extensive network and gain access to investment opportunities across continents, all from one platform.",
		icon: "globe",
	},
	{
		title: "Global Reach",
		text: "Benefit from our extensive network and gain access to investment opportunities across continents, all from one platform.",
		icon: "globe",
	},
  {
    desktop: solarPanelFieldDesktopJPG,
    tablet: solarPanelFieldTabletJPG,
    mobile: solarPanelFieldMobileJPG,
    alt: 'Solar panel field'
  },
	{
		title: "Global Reach",
		text: "Benefit from our extensive network and gain access to investment opportunities across continents, all from one platform.",
		icon: "globe",
	},
	{
		title: "Global Reach",
		text: "Benefit from our extensive network and gain access to investment opportunities across continents, all from one platform.",
		icon: "globe",
	},
];
