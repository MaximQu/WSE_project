import { glassesDesktopJPG, glassesMobileJPG, glassesTabletJPG } from "@/assets/img/jpg";
import { ClarificationProps } from "@/components/Clarification/Clarification";
import { AdaptiveImgProps } from "@/ui/AdaptiveImg/AdaptiveImg";

export const wseDescription: {
	navigating: Pick<ClarificationProps, "title" | "subtitle" | "text">;
	exploring: Pick<ClarificationProps, "title" | "subtitle" | "text">;
  img: Pick<AdaptiveImgProps, 'desktop' | 'tablet' | 'mobile' | 'alt'>
} = {
	navigating: {
		title: `Navigating the Exchange:\nOn-Market Trading Explained`,
		subtitle:
			"Unlocking transparency, liquidity, and price efficiency in financial markets.",
		text: "On-market trading refers to the buying and selling of financial instruments, such as stocks or ETFs, through a centralized exchange platform. In this type of trading, transactions are executed directly on the exchange, and prices are determined by supply and demand dynamics in real-time.\n\nOn-market trading offers transparency, liquidity, and price efficiency, as orders are matched electronically based on prevailing market prices. Traders can access a wide range of investment opportunities and benefit from competitive pricing and immediate execution of trades.",
	},
	exploring: {
		title: "Exploring Beyond the\nExchange: Off-Market Trading Unveiled",
		subtitle:
			"Discovering flexibility, customization, and niche market opportunities.",
		text: "Off-market trading, also known as over-the-counter (OTC) trading, occurs directly between parties outside of a centralized exchange. In this type of trading, buyers and sellers negotiate prices and terms privately, often facilitated by brokers or dealers. Off-market trading offers flexibility and customization, as transactions can involve unique or specialized financial instruments that may not be available on traditional exchanges.\n\nWhile off-market trading may lack the transparency and liquidity of on-market trading, it provides opportunities for tailored solutions and access to niche markets. It is commonly used for trading securities that are not listed on formal exchanges, such as bonds, derivatives, and certain types of equities.",
	},
  img: {
    desktop: glassesDesktopJPG,
    tablet: glassesTabletJPG,
    mobile: glassesMobileJPG,
    alt: "Sign up to your account"
  }
};
