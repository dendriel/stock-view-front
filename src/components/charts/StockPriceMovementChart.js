import ReactApexChart from 'react-apexcharts'
import stockService from "../../services/stock.service";
import {useEffect, useState} from "react";
import moment from "moment";


export default function StockPriceMovementChart(props) {
    const [series, setSeries] = useState([])

    useEffect(() => {
        const ticker = props.ticker
        if (!ticker) {
            console.log("Could not load stock price movement chart. Not ticker specified.")
            return
        }

        stockService.getPrices(ticker)
            .then(response => {
                if (response && response.data) {
                    loadSeries(ticker, response.data)

                    // TODO: if data.prices are empty, load NOT FOUND (/prices)
                }
            })
            .catch(error => {
                console.log(`Failed to retrieve prices for ticker ${ticker}. Error: ${error}`)
            })
    }, [props.ticker])

    const loadSeries = (ticker, data) => {
        console.log(data)

        if (data.length === 0) {
            console.log("Invalid series data!")
            return;
        }

        data = data[0]

        let seriesData = data.prices.map(entry =>
            [
                moment.utc(entry.date, 'DD/MM/YY HH:mm'),
                entry.price
            ]
        )

        setSeries([{
            name: ticker,
            data: seriesData
        }])
    }

    const state = {
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    autoSelected: 'zoom'
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Stock Price Movement',
                align: 'left'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                },
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val.toFixed(2)
                    },
                },
                title: {
                    text: 'Price'
                },
            },
            xaxis: {
                 type: 'datetime'
            },
            tooltip: {
                shared: false,
                x: {
                    format: 'dd/MM/yyyy HH:mm'
                }
            }
        },
    };

    return(
        <div>
            <ReactApexChart options={state.options} series={series} type="area" height={350} />
        </div>
    )
}
