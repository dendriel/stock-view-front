import ReactApexChart from 'react-apexcharts'
import {useEffect, useState} from "react";
import {getIndicator} from "../../storage/indicatorsStorage";

export default function RadarMultipleChart(props) {
    const [series, setSeries] = useState([])

    useEffect(() => {
        refreshSeries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.tickers])

    const refreshSeries = () => {
        let newSeries = []
        props.tickers
            .forEach(ticker => {
                const data = getIndicator(ticker);
                if (data) {
                    newSeries.push(formatData(data))
                }
            })

        setSeries(newSeries)
    }

    const formatData = (data) => {
        return {
            name: data.ticker,
            data: props.formatter(data.indicators)
        }
    }

    const options = {
        chart: {
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
            text: props.title
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
            categories: props.categories
        }
    };

    return(
        <ReactApexChart options={options} series={series} type="radar"/>
    )
}
