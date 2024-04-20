import {
	papersDesktopJPG,
	papersMobileJPG,
	papersTabletJPG,
	signatureDesktopJPG,
	signatureMobileJPG,
	signatureTabletJPG,
} from "@/assets/img/jpg";
import { ClarificationProps } from "@/components/Clarification/Clarification";
import { AdaptiveImgProps } from "@/ui/AdaptiveImg/AdaptiveImg";

export const clarification_content = [
	{
		title: "Regulatory Authority:",
		text: "The Global Stock Market will be subject to the supervision and regulation of a competent authority designated by an international consensus. This authority will be responsible for establishing and enforcing the rules and regulations that govern activities on the exchange, guaranteeing the integrity, transparency and stability of the global market.",
	},
	{
		title: "Listing Regulations:",
		text: "Regulations and requirements will be established so that companies can list their shares on the Global Stock Market. These requirements will include financial, disclosure and corporate governance criteria, ensuring that listed companies meet appropriate international standards.",
	},
	{
		title: "Market Supervision:",
		text: "The regulatory authority will monitor the functioning of the global market to prevent fraudulent practices, price manipulation and any other activity that may be detrimental to investors and the integrity of the global market.",
	},
	{
		title: "Investor Protection:",
		text: "Measures will be implemented to protect the interests of investors in the Global Stock Market, including adequate disclosure of information, fair execution of transactions and equitable market access for all participants.",
	},
	{
		title: "Negotiation Rules:",
		text: "Rules will be established for trading securities on the Global Stock Market, including trading hours, order types and settlement procedures, with the aim of promoting a fair, transparent and efficient market.",
	},
	{
		title: "Listing Rules:",
		text: "Rules and procedures will be defined for the admission and maintenance of listing of securities on the Global Stock Market, ensuring that listed companies comply with continuous disclosure requirements and other international standards.",
	},
	{
		title: "Rules of conduct:",
		text: "Ethical and conduct standards will be established for participants in the global market, including brokers, financial intermediaries and listed companies, in order to promote integrity and trust in the Global Stock Market.",
	},
	{
		title: "Disclosure Rules:",
		text: "Companies listed on the Global Stock Market will be required to disclose financial and operational information in a timely and accurate manner, in accordance with regulations established by the international regulatory authority.",
	},
];

export const comments = [
	{
		text: "Global Stock Market provided exceptional support throughout our listing process. Their team demonstrated professionalism, expertise, and commitment.",
		author: "John Smith",
		position: "Small business owner",
	},
	{
		text: "I've been trading on Global Stock Market for years, and I've always been impressed by the platform's reliability and ease of use.",
		author: "Emily Johnson",
		position: "Individual Investor",
	},
	{
		text: "Partnering with GSM has been instrumental in accessing global capital markets. Their dedication to compliance and investor protection sets them apart.",
		author: "David Brown",
		position: "CFO",
	},
	{
		text: "I appreciate Global Stock Market's commitment to transparency and investor education. Their informative resources have been invaluable.",
		author: "Sarah Lee",
		position: "Investment Analyst",
	},
	{
		text: "The team at Global Stock Market is responsive, knowledgeable, and proactive. Their personalized service and attention to detail have made them a trusted partner.",
		author: "Michael Taylor",
		position: "Individual Investor",
	},
	{
		text: "Global Stock Market has exceeded our expectations. Their platform offers seamless trading experiences, and their team is always available to assist.",
		author: "Jennifer Martinez",
		position: "Portfolio Manager",
	},
];

export const regulations: {
	framework1: Pick<ClarificationProps, "title" | "text">;
	framework2: Pick<ClarificationProps, "title" | "text">;
	ourMission: Pick<ClarificationProps, "title" | "text">;
	ourPurpose: Pick<ClarificationProps, "title" | "text">;
	papersImg: Pick<AdaptiveImgProps, "desktop" | "tablet" | "mobile" | "alt">;
	signatureImg: Pick<AdaptiveImgProps, "desktop" | "tablet" | "mobile" | "alt">;
} = {
	framework1: {
		title: "Regulatory Framework",
		text: "Global Stock Market is authorized by the Guernsey Financial Services Commission to operate as an investment exchange in compliance with the Protection of Investors (Bailiwick of Guernsey)Law, 2020.",
	},
	framework2: {
		title: "Regulatory Framework",
		text: "At Global Stock Market, we oversee the listing of securities and supervise our exchange members. We establish, enforce, and monitor compliance with our Listing Rules and Membership Rules, including Trading and Settlement Rules.\n\nThese regulations govern the behavior of issuers and members, ensuring integrity and transparency in our marketplace.",
	},
	ourPurpose: {
		title: "Our Purpose",
		text: "At Global Stock Market, our purpose is to facilitate global access to capital markets, empowering businesses to raise funds, investors to diversify their portfolios, and economies to thrive. We are committed to fostering transparency, integrity, and innovation in the financial industry, driving sustainable growth and creating value for all stakeholders.",
	},
	ourMission: {
		title: "Our Mission",
		text: "Our mission at Global Stock Market is to provide a robust and efficient platform for companies to list their securities, investors to trade with confidence, and stakeholders to engage with transparency.\n\nWe strive to cultivate a dynamic marketplace that fosters liquidity, fair pricing, and responsible investment practices, contributing to the long-term prosperity of businesses and communities worldwide.",
	},
	signatureImg: {
		desktop: signatureDesktopJPG,
		tablet: signatureTabletJPG,
		mobile: signatureMobileJPG,
		alt: "Sign up to your account",
	},
	papersImg: {
		desktop: papersDesktopJPG,
		tablet: papersTabletJPG,
		mobile: papersMobileJPG,
		alt: "Sign up to your account",
	},
};

export const explanations: {
	complaints: Pick<ClarificationProps, "title" | "text">;
	howToSubmit: Pick<ClarificationProps, "title" | "subtitle">;
} = {
	complaints: {
		title: "Complaints",
		text: "At Global Stock Market (GSM), we take all complaints seriously and conduct thorough investigations in accordance with our regulations.\nIf you have a complaint, please clearly indicate this in your correspondence and provide detailed information to assist our investigation process.",
	},
	howToSubmit: {
		title: "How to Submit a Complaint",
		subtitle: "To file a complaint regarding GSM, please follow these steps:",
	},
};
