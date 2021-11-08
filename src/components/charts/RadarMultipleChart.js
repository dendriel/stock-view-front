import ReactApexChart from 'react-apexcharts'
import {useEffect, useState} from "react";
import stockService from "../../services/stock.service";

export default function RadarMultipleChart(props) {
    const [series, setSeries] = useState([])

    useEffect(() => {
        const ticker = props.ticker
        if (!ticker) {
            console.log("Could not load radar-multiple chart. Not ticker specified.")
            return
        }

        stockService.getIndicators(ticker)
            .then(response => {
                if (response && response.data) {
                    loadSeries(response.data)
                }
            })
            .catch(error => {
                console.log(`Failed to retrieve indicators for ticker ${ticker}. Error: ${error}`)
            })
    }, [props.ticker])


    const loadSeries = (data) => {
        console.log(data)

        // TODO: comparar apenas indicadores do mesmo tipo
        setSeries([{
                name: data.ticker,
                data: [
                    (data.indicators.p_l * 10).toFixed(2),
                    data.indicators.p_vp * 10,
                    data.indicators.roe,
                    data.indicators.roic,
                    data.indicators.margeliquida,
                    data.indicators.dy,
                    data.indicators.receitas_cagr5,
                    data.indicators.lucros_cagr5,
                ]
            }
        ])
    }

    const options = {
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        dataLabels: {
            enabled: true
        },
        title: {
            text: 'Stocks Strengths Radar'
        },
        stroke: {
            width: 1
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 3
        },
        xaxis: {
            categories: [
                'p_l',
                'p_vp',
                'roe',
                'roic',
                'margem liquida',
                'dy',
                'receitas_cagr5',
                'lucros_cagr5',
            ]
        }
    };

    return(
            <ReactApexChart options={options} series={series} type="radar" height={350} />
        )
}
