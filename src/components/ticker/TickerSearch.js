import {useState} from "react";
import {Button} from "react-bootstrap";
import TickerList from "./TickerList";
import stockService from "../../services/stock.service"

export default function TickerSearch() {
    const [term, setTerm] = useState("")
    const [result, setResult] = useState([])

    const search = () => {
        if (!term) {
            console.log("Can't search with empty term")
            return
        }

        stockService.search(term)
            .then(response => {
                if (response && response.data) {
                    console.log("Response: " + JSON.stringify(response.data))
                    setResult(response.data)
                }
            })
            .catch(error => {
                console.log(`Failed to search. Error: ${error}`)
            })

        setTerm("")
    }

    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <label className={"col-2 col-form-label text-end"}>Search</label>
                <div className={"col-8"}>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />
                </div>
                <div className={"col-2 text-start"}>
                    <Button className="buttonIcon" variant="primary" onClick={search}>
                        Search
                    </Button>
                </div>
            </div>
            <div className={"row justify-content-center"}>
                <div className={"col-8"}>
                    <TickerList
                        rows={result}
                    />
                </div>
            </div>
        </div>
    )
}
