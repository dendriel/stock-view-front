import {Button, ListGroup} from "react-bootstrap";
import {BsCurrencyDollar} from "react-icons/all";


export default function TickerList(props) {
    const tableHeader = ["Name", "Ticker", "Price", ""]

    return (
        <div className={"container-fluid marginTopBottom"}>
            <div className={"row"}>
                <div className={"col"}>
                    <ListGroup>
                        <ListGroup.Item>
                            <div className="container">
                                <div className="row">
                                    {tableHeader.map(item => {
                                        return (
                                            <div className={`col text-center`} key={item}>
                                                <b>{item}</b>
                                            </div >
                                        )
                                    })}
                                </div>
                            </div>
                        </ListGroup.Item>

                        {props.rows.map(row => (
                            <ListGroup.Item key={row.id}>
                                <div className="container">
                                    <div className="row">
                                        <div className={"col text-center"}>
                                            {row.name}
                                        </div>
                                        <div className={"col text-center"}>
                                            {row.code}
                                        </div>
                                        <div className={"col text-center"}>
                                            {row.price}
                                        </div>
                                        <div className={"col text-center"}>
                                            <Button variant="primary" onClick={() => props.onViewClicked(row.code)}>
                                                <BsCurrencyDollar className="buttonIcon"/>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            )
                        )}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
