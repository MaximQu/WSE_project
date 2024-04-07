import {
	BulbPNG,
	ChartPNG,
	CustomerPNG,
	DBPNG,
	EdicationPNG,
	FingerprintPNG,
	GlobePNG,
	InfoPNG,
	LeafePNG,
	SecurityPNG,
	SupportPNG,
	ToolsPNG,
} from "@/assets/icons/png";
import { FC } from "react";

const pngIconImgSrc = {
	bulb: BulbPNG,
	chart: ChartPNG,
	customer: CustomerPNG,
	db: DBPNG,
	education: EdicationPNG,
	fingerprint: FingerprintPNG,
	globe: GlobePNG,
	info: InfoPNG,
	leafe: LeafePNG,
	security: SecurityPNG,
	support: SupportPNG,
	tools: ToolsPNG,
};

type PNGIconProps = {
	img: keyof typeof pngIconImgSrc;
	className?: string;
};

const BulbIcon: FC<PNGIconProps> = ({ img, className = "" }) => {
	const styles = `${className}`;

	return (
		<img
			src={pngIconImgSrc[img]}
			width={40}
			height={40}
			style={{ width: "40px", height: "40px" }}
			className={styles}
		/>
	);
};
export default BulbIcon;
