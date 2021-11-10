import {Button} from "react-bootstrap";
import {BsXCircleFill} from "react-icons/all";


export default function TickerButton(props) {
    return (
        <Button key={props.label} className={"marginLeftRight marginTopBottomSmall"} variant="secondary" onClick={() => props.onRemove(props.label)}>
            {props.label}
            <BsXCircleFill className={"buttonIcon marginLeft"}/>
        </Button>
    )
}
