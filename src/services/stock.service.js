import restService from "./rest.service"

const proxyPath = "/api"
const path = proxyPath + "/stock"


const search = (searchTerm) => {
    return restService.api.get(path + "/search?query=" + searchTerm)
}

const getPrices = (ticker) => {
    return restService.api.get(path + "/prices?ticker=" + ticker)
}

const getIndicators = (ticker) => {
    return restService.api.get(path + "/indicators?ticker=" + ticker)
}

const stockService = {
    search: search,
    getPrices: getPrices,
    getIndicators: getIndicators
}

export default stockService
