import {ListGroup} from "react-bootstrap";


export default function TickerList(props) {
    const tableHeader = ["Name", "Code", "Price"]
    // const tableRows = [
    //     { id: 1, name: "taee3", code: "taee3", price: "10,00" },
    //     { id: 2, name: "vale3", code: "vale3", price: "10,00" },
    //     { id: 3, name: "itsa4", code: "itsa4", price: "10,00" },
    //     { id: 4, name: "taee4", code: "taee4", price: "10,00" },
    //     { id: 5, name: "aeri3", code: "aeri3", price: "10,00" }
    // ]

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
