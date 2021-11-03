import StockPriceMovementChart from "../components/charts/StockPriceMovementChart";
import {useParams} from "react-router";


export default function Prices() {

    let { ticker } = useParams();



    return(
        <div>
            <StockPriceMovementChart
                ticker={ticker}
            />
        </div>
    )
}
