import RadarMultipleChart from "../components/charts/RadarMultipleChart";
import {useParams} from "react-router";

export default function Radar() {
    let { ticker } = useParams();

    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className="col text-center align-middle paddingTopBottom">
                    <RadarMultipleChart
                        ticker={[ticker]}
                    />
                </div>
            </div>
        </div>
    )
}
