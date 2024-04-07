import { CorporateInfoBlock } from "@/components";

const data = [
	{
		title: "Information gathering:",
		text: "We are committed to protecting your privacy and respecting your personal data. We collect and use the information provided by you solely for the purpose of improving our services and providing you with a more personalized experience on this website. We will not share your personal data with third parties without your explicit consent.",
	},
	{
		title: "Cookies",
		text: "This website uses cookies to improve user experience. By using this site, you agree to the use of cookies in accordance with our cookie policy. You can manage your cookie preferences through your browser settings.",
	},
	{
		title: "Security",
		text: "We implement security measures to protect your personal data against unauthorized access, disclosure or alteration.",
	},
];

const PrivacyStatement = () => {
	return (
		<section className="container">
			<CorporateInfoBlock data={data} title="Privacy Statement" />;
		</section>
	);
};

export default PrivacyStatement;
