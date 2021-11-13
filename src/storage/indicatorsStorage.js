
const indicatorsKey = "indicators"

function clearIndicators() {
    localStorage.removeItem(indicatorsKey)
}

function addIndicator(indicator) {
    let indicators = localStorage.getItem(indicatorsKey)
    if (!indicators) {
        indicators = []
    }
    else {
        indicators = JSON.parse(indicators)
    }

    if (indicators.find(i => i.ticker === indicator.ticker)) {
        return
    }

    indicators.push(indicator)
    localStorage.setItem(indicatorsKey, JSON.stringify(indicators))
}

function getIndicator(key) {
    let indicators = localStorage.getItem(indicatorsKey)
    if (!indicators) {
        return null
    }

    indicators = JSON.parse(indicators)

    return indicators.find(i => i.ticker === key)
}


export {addIndicator, getIndicator, clearIndicators}
