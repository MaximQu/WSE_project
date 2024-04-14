import { WSEDesktopJPG, WSEMobileJPG, WSETabletJPG } from "@/assets/img/jpg";
import { puzzleSVG } from "@/assets/img/svg";
import { ClarificationProps } from "@/components/Clarification/Clarification";
import { AdaptiveImgProps } from "@/ui/AdaptiveImg/AdaptiveImg";
import { TPNGIcon } from "@/ui/icons/PNGIcon";

export const company_values: {
	title: string;
	text: string;
	icon: TPNGIcon;
}[] = [
	{
		icon: "customer",
		title: "Integrity",
		text: "We operate with honesty, transparency, and accountability in all aspects of our business.",
	},
	{
		icon: "bulb",
		title: "Innovation",
		text: "We embrace creativity and seek new ideas to enhance the investment experience for our clients.",
	},
	{
		icon: "support",
		title: "Client-Centricity",
		text: "We prioritize our clients' needs and strive to exceed their expectations with personalized solutions.",
	},
];

export const hero: ClarificationProps & {
	img: string;
} = {
	title:
		"At World Stock Exchange (WSE), our mission is to democratize access to global financial markets and empower investors of all backgrounds to achieve their financial goals",
	subtitle:
		"We are dedicated to providing innovative and transparent financial solutions that enhance the investment experience, foster financial literacy, and drive sustainable growth.",
	text: "With integrity, transparency, and client-centricity at the core of our operations, we strive to be a trusted partner for investors, offering unparalleled access to diverse investment opportunities and delivering value through cutting-edge technology, expert guidance, and unwavering commitment to excellence.\n Our vision is to create a more inclusive and prosperous financial ecosystem, where everyone has the opportunity to thrive and succeed in their investment journey.",
	img: puzzleSVG,
};

export const history: Pick<ClarificationProps, "subtitle" | "text"> & {
	img: Pick<AdaptiveImgProps, "desktop" | "tablet" | "mobile" | "alt">;
} = {
	subtitle:
		"Since our founding in 1965, our stock exchange has played a crucial role in global economic balance, as well as in the protection and control of financial markets on a global scale. Since then, we have been witnesses and key actors in the evolution of financial markets, committed to promoting stability and transparency in the financial world.",
	text: "World Stock Bank was founded in 1965. Its creation was the result of a project conceived by the union of all the Stock Markets worldwide, accompanied by a group of five stockbrokers who subscribed the capital to start the business. The world stock exchange union, the founding countries were Luxembourg, Ireland, Singapore, Switzerland and its founder, Denmark. The central idea of this project was to have a bank that would promote and strengthen the action of stockbrokers around the world, and thereby control, thereby contributing to the development of the capital market worldwide. The importance of this objective meant that it was expressly reflected in its corporate statute, this being a distinctive feature of Banco de Valores among the entities that make up the Global Financial System, thus giving a balance to all the economies of the countries of the world.",
	img: {
		desktop: WSEDesktopJPG,
		tablet: WSETabletJPG,
		mobile: WSEMobileJPG,
		alt: "Mission of WSE",
	},
};
