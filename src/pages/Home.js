import TickerSearch from "../components/ticker/TickerSearch";


export default function Home() {

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className="col text-center align-middle paddingTopBottom">
                    <TickerSearch />
                </div>
            </div>
        </div>
    )
}
