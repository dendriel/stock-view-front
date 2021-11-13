import restService from "./rest.service"
import {addIndicator, getIndicator} from "../storage/indicatorsStorage";

const proxyPath = "/api"
const path = proxyPath + "/stock"


const search = (searchTerm) => {
    return restService.api.get(path + "/search?query=" + searchTerm)
}

const getPrices = (ticker) => {
    return restService.api.get(path + "/prices?ticker=" + ticker)
}

const getIndicators = (ticker) => {
    let indicator = getIndicator(ticker);
    if (indicator) {
        return Promise.resolve({ data: indicator })
    }

    return restService.api.get(path + "/indicators?ticker=" + ticker)
        .then(response => {
            if (response && response.data) {
                addIndicator(response.data)
            }
            return Promise.resolve(response)
        })
}

const stockService = {
    search: search,
    getPrices: getPrices,
    getIndicators: getIndicators
}

export default stockService
