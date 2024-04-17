import {
	buildingsDesktopJPG,
	buildingsMobileJPG,
	buildingsTabletJPG,
	conversationDesktopJPG,
	conversationMobileJPG,
	conversationTabletJPG,
} from "@/assets/img/jpg";
import { ClarificationProps } from "@/components/Clarification/Clarification";
import { AdaptiveImgProps } from "@/ui/AdaptiveImg/AdaptiveImg";
import { TPNGIcon } from "@/ui/icons/PNGIcon";

export const benefits: {
	title: string;
	text: string;
	icon: TPNGIcon;
}[] = [
	{
		icon: "info",
		title: "Commission Opportunities",
		text: "Earn competitive commissions for referring clients who sign up and trade on our platform.",
	},
	{
		icon: "support",
		title: "Dedicated Support",
		text: "Receive personalized support and guidance from our affiliate management team to optimize your marketing strategies and enhance your performance.",
	},
	{
		icon: "db",
		title: "Access to Resources",
		text: "Gain access to a suite of marketing materials, tools, and resources to support your promotional efforts and maximize your earning potential.",
	},
];

export const hero: Pick<ClarificationProps, "title" | "text"> & {
	img1: Pick<AdaptiveImgProps, "desktop" | "tablet" | "mobile">;
	img2: Pick<AdaptiveImgProps, "desktop" | "tablet" | "mobile">;
} = {
	title: "Welcome to\nWorld Stock Exchange (WSE),",
	text: "where collaboration and partnership are integral to our success. Affiliation plays a crucial role in shaping our interactions within the financial ecosystem, driving innovation, and fostering growth opportunities. At WSE, we believe in the power of strategic relationships to enhance our services, expand our reach, and deliver value to our clients and stakeholders.",
	img1: {
		desktop: conversationDesktopJPG,
		tablet: conversationTabletJPG,
		mobile: conversationMobileJPG,
	},
	img2: {
		desktop: buildingsDesktopJPG,
		tablet: buildingsTabletJPG,
		mobile: buildingsMobileJPG,
	},
};

export const statement = 'At World Stock Exchange (WSE), we understand the value of collaboration in expanding our reach and connecting with traders and investors worldwide.\n\nOur affiliation with marketing affiliates is a key component of our strategy to promote our platform, attract new clients, and drive engagement within the financial community.'