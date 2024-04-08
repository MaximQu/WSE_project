export const burgerMenuContent = [
	{
		link: "Trade",
		url: "/trade",
	},
	{
		link: "Sustainable",
		url: "/sustainable",
	},
	{
		link: "Market",
		url: "/market",
	},
	{
		link: "Regulation",
		url: "/regulation",
	},
	{
		link: "Affiliation",
		url: "/affiliation",
	},
	{
		link: "Privet markets",
		url: "/private-markets",
	},
	{
		link: "Why WSE?",
		url: "/why-wse",
	},
	{
		link: "About WSE ",
		dropdown: [
			{
				link: "Company profile",
				url: "/about-us/company-profile",
			},
			{
				link: "Investor relations",
				url: "/about-us/investor-relations",
			},
		],
	},
	{
		link: "Contacts",
		url: "/contacts",
	},
];

export type BurgerMenuContent = typeof burgerMenuContent
export type BurgerMenuContentSubItem = {
  link: string,
  url: string
}
export type BurgerMenuContentItem = {
  link: string,
  url?: string,
  dropdown?: BurgerMenuContentSubItem[]
}
