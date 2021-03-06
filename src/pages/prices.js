import StockPriceMovementChart from "../components/charts/StockPriceMovementChart";
import {useParams} from "react-router";


export default function Prices() {
    let { ticker } = useParams();

    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className="col text-center align-middle paddingTopBottom">
                    <StockPriceMovementChart
                        ticker={ticker}
                    />
                </div>
            </div>
        </div>
    )
}
