import {
	AdvancedRealTimeChart,
	CopyrightStyles,
	Screener,
	SymbolInfo,
	Ticker,
	TickerTape,
} from "react-ts-tradingview-widgets";

import st from "./styles.module.scss";

const styles: CopyrightStyles = {
	parent: {
		display: "none",
	},
	link: {
		display: "none",
	},
	span: {
		display: "none",
	},
};

export const TickerTapeWidget = ({
	isCompact = false,
	className = "",
}: {
	isCompact?: boolean;
	className?: string;
}) => (
	<div className={`${className} ${st.tickerTape}`}>
		<TickerTape
			copyrightStyles={styles}
			displayMode={isCompact ? "compact" : "regular"}
		/>
	</div>
);
export const TickerWidget = ({ className = "" }: { className?: string }) => {
	const content = [
		{
			proName: "CAPITALCOM:BRKB",
			title: "BRK-B",
			id: 1,
		},
		{
			proName: "NASDAQ:AAPL",
			title: "AAPL",
			id: 2,
		},
		{
			proName: "NYSE:BA	",
			title: "BA (The boeing Company)",
			id: 3,
		},
		{
			proName: "CAPITALCOM:BRKB",
			title: "S&P 500",
			id: 4,
		},
		// {
		// 	proName: "BLACKBULL:DJ30.F",
		// 	title: "S&P 500",
		// 	id: 4,
		// },
	];
	return (
		<div className={`${className} ${st.ticker}`}>
			{content.map((item) => (
				<div key={item.id}>
					<Ticker
						copyrightStyles={styles}
						isTransparent
						colorTheme="dark"
						symbols={[{ proName: item.proName, title: item.title }]}
					/>
				</div>
			))}
		</div>
	);
};
export const RealTimeChartWidget = ({
	className = "",
}: {
	className?: string;
}) => (
	<div className={`${className} ${st.realtime}`}>
		<AdvancedRealTimeChart
			copyrightStyles={styles}
			hide_side_toolbar
			interval="D"
			withdateranges={false}
			// autosize
			width={"100%"}
			height={"100%"}
		/>
	</div>
);
export const SymbolInfoWidget = ({ symbol }: { symbol?: string }) => (
	<SymbolInfo copyrightStyles={styles} symbol={symbol} autosize />
);
export const ScreenerWidget = ({ className = "" }: { className?: string }) => (
	<div className={`${className} ${st.screener}`}>
		<Screener
			copyrightStyles={styles}
			width={"100%"}
			height={"100%"}
			autosize
		/>
	</div>
);
