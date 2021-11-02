import restService from "./rest.service"

const proxyPath = "/api"
const path = proxyPath + "/stock"


const search = (searchTerm) => {
    return restService.api.get(path + "/search?query=" + searchTerm)
}

const stockService = {
    search: search
}

export default stockService
