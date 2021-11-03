import ReactApexChart from 'react-apexcharts'


export default function StockPriceMovementChart() {

    const state = {
        series: [{
            name: 'XYZ MOTORS',
            data: [
                [
                    new Date("2014-01-01").getTime(),
                    20000000
                ],
                [
                    new Date("2014-01-02").getTime(),
                    10379978
                ],
                [
                    new Date("2014-01-03").getTime(),
                    30493749
                ],
                [
                    new Date("2014-01-04").getTime(),
                    10785250
                ],
                [
                    new Date("2014-01-05").getTime(),
                    33901904
                ],
                [
                    new Date("2014-01-06").getTime(),
                    11576838
                ],
            ]
        }],
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
                        return (val / 1000000).toFixed(0);
                    },
                },
                title: {
                    text: 'Price'
                },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0)
                    }
                }
            }
        },
    };

    return(
        <div>
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </div>
    )
}
