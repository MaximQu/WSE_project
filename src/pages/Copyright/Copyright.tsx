import { CorporateInfoBlock } from "@/components";

const data = [
	{
		title: "Property rights",
		text: "All copyright and other intellectual property rights in the content of this website are the property of World Stock Exchange or third-party licensors. These rights are protected by copyright laws and international treaties. Reproduction, distribution or modification of any part of the content is prohibited without the express written consent of World Stock Exchange.",
	},
	{
		title: "Permitted Use",
		text: "Downloading, copying and/or printing individual pages of this website is permitted for personal, non-commercial use only. Any other use of the content, including reproduction, distribution or modification, is strictly prohibited without prior written permission.",
	},
	{
		title: "Trademarks",
		text: "All trademarks, logos and trade names used on this website are the property of their respective owners and are protected by applicable trademark laws. Unauthorized use is strictly prohibited.",
	},
];

const Copyright = () => {
	return (
		<section className="container">
			<CorporateInfoBlock data={data} title="Copyright" />;
		</section>
	);
};

export default Copyright;
