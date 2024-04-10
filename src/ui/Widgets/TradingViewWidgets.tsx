import {
	CopyrightStyles,
	Ticker,
	TickerTape,
	AdvancedRealTimeChart,
	SymbolInfo,
	Screener,
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
			proName: "FOREXCOM:SPXUSD",
			title: "S&P 500",
			id: 1,
		},
		{
			proName: "FOREXCOM:SPXUSD",
			title: "S&P 500",
			id: 2,
		},
		{
			proName: "FOREXCOM:SPXUSD",
			title: "S&P 500",
			id: 3,
		},
		{
			proName: "FOREXCOM:SPXUSD",
			title: "S&P 500",
			id: 4,
		},
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
export const RealTimeChartWidget = ({className = ''}: {className?: string}) => (
	<div className={`${className} ${st.realtime}`}>
		<AdvancedRealTimeChart
			copyrightStyles={styles}
			hide_side_toolbar
			interval="D"
			withdateranges={false}
			// autosize
      width={'100%'}
      height={'100%'}
		/>
	</div>
);
export const SymbolInfoWidget = () => <SymbolInfo copyrightStyles={styles} />;
export const ScreenerWidget = () => <Screener copyrightStyles={styles} />;
