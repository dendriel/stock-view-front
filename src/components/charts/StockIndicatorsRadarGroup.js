import {useEffect, useState} from "react";
import stockService from "../../services/stock.service";
import RadarMultipleChart from "./RadarMultipleChart";
import {clearIndicators} from "../../storage/indicatorsStorage";


export default function StockIndicatorsRadarGroup(props) {
    const [tickers, setTickers] = useState([])

    useEffect(() => {
        clearIndicators()
    }, [])

    useEffect(() => {
        if (!props.tickers || props.tickers.length === 0) {
            setTickers([])
            return
        }

        setTickers([])
        props.tickers
            .forEach(loadIndicator)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.tickers])

    const loadIndicator = (ticker) => {
        stockService.getIndicators(ticker)
            .then(response => {
                if (response && response.data) {
                    setTickers(old => [...old, response.data.ticker])
                }
            })
            .catch(error => {
                console.log(`Failed to retrieve indicators for ticker ${ticker}. Error: ${error}`)
            })
    }

    const formatPriceData = (indicators) => {
        return [
            indicators.p_l.toFixed(2),
            indicators.p_vp.toFixed(2),
            indicators.dy,
            indicators.p_ebit.toFixed(2)
        ]
    }

    const formatEfficiencyData = (indicators) => {
        return [
            indicators.margembruta,
            indicators.margeliquida,
            indicators.margemebit,
            indicators.margemebitda
        ]
    }

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className="col-4 text-center align-middle paddingTopBottom">
                    <RadarMultipleChart
                        tickers={tickers}
                        title={'Price Indicators'}
                        categories={['P/L', 'P/VP', 'DY (%)', 'P/EVIT']}
                        formatter={formatPriceData}
                    />
                </div>
                <div className="col-4 text-center align-middle paddingTopBottom">
                    <RadarMultipleChart
                        tickers={tickers}
                        title={'Efficiency Indicators'}
                        categories={['M. Bruta (%)', 'M. Líquida (%)', 'M. EBIT (%)', 'M. EBITDA (%)']}
                        formatter={formatEfficiencyData}
                    />
                </div>
            </div>
        </div>
    )
}
