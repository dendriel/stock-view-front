import TickerSearch from "../components/ticker/TickerSearch";
import TickerSelected from "../components/ticker/TickerSelected";
import {useState} from "react";
import RadarMultipleChart from "../components/charts/RadarMultipleChart";


export default function Home() {
    let [tickers, setTickers] = useState([])

    const addTicker = (ticker) => {
        if (tickers.includes(ticker)) {
            return
        }

        setTickers(old => {
            return [...old, ticker]
        })
    }

    const removeTicker = (ticker) => {
        setTickers(old => {
            return old.filter(elem => elem !== ticker)
        })
    }

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className="col text-center align-middle paddingTopBottom">
                    <TickerSearch
                        onSelected={addTicker}
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className="col text-center align-middle paddingTopBottom">
                    <TickerSelected
                        selected={tickers}
                        onRemoved={removeTicker}
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className="col text-center align-middle paddingTopBottom">
                    <RadarMultipleChart tickers={tickers} />
                </div>
            </div>
        </div>
    )
}
