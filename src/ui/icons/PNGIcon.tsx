import {
	BulbPNG,
	ChartPNG,
	CustomerPNG,
	DBPNG,
	EducationPNG,
	FingerprintPNG,
	GlobePNG,
	InfoPNG,
	LeafPNG,
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
	education: EducationPNG,
	fingerprint: FingerprintPNG,
	globe: GlobePNG,
	info: InfoPNG,
	leaf: LeafPNG,
	security: SecurityPNG,
	support: SupportPNG,
	tools: ToolsPNG,
};
export type TPNGIcon = keyof typeof pngIconImgSrc;

type PNGIconProps = {
	img: TPNGIcon;
	className?: string;
};

const PNGIcon: FC<PNGIconProps> = ({ img, className = "" }) => {
	const styles = `${className}`;

	return (
		<img
			src={pngIconImgSrc[img]}
			width={40}
			height={40}
			style={{ width: "40px", height: "40px" }}
			className={styles}
      alt="Icon"
		/>
	);
};
export default PNGIcon;
