import TickerButton from "./TickerButton";


export default function TickerSelected(props) {
    return (
        <div className={"container-fluid"}>
            <div className={"row marginTopBottom"}>
                <h3 className={"col text-center"}>
                    Selected Stocks
                </h3>
            </div>
            <div className={"row justify-content-center minHeightSmall"} >
                <div className={"col-8 text-center formBorder"}>
                    {props.selected.map(label =>
                        <TickerButton key={label} label={label} onRemove={props.onRemoved} />
                    )}
                </div>
            </div>
        </div>
    )
}
