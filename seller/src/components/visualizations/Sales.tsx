import { useRef, useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { SectionCard } from 'src/components';

export default function Sales() {
    const theme = useTheme();
    const aboveXlScreenSize = useMediaQuery(theme.breakpoints.up('xl'));
    const aboveSmallScreenSize = useMediaQuery(theme.breakpoints.up('sm'));
    // const [selectedIndex, setSelectedIndex] = useState(-1);

    type DataType = Array<{ x: string; y: number }>;
    const data: DataType = [
        { x: 'July', y: 30 },
        { x: 'Aug', y: 40 },
        { x: 'Sept', y: 50 },
        { x: 'Oct', y: 60 },
        { x: 'Nov', y: 70 },
        { x: 'Dec', y: 80 },
        { x: 'Jan', y: 90 },
        { x: 'Feb', y: 10 },
        { x: 'Mar', y: 20 }
    ];

    const series = aboveSmallScreenSize ? data : data.slice(0, 4);

    const options: ApexOptions = {
        xaxis: {
            type: 'category',
            title: {
                text: 'Months'
            }
        },
        yaxis: {
            title: {
                text: 'Sales'
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: [theme.palette.neutral.main],
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.4,
                stops: [19, 81]
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 13,
                columnWidth: '30%'
            }
        },
        chart: {
            fontFamily: 'Poppins',
            toolbar: {
                tools: {
                    download: false
                }
            },
            events: {
                dataPointSelection: (e, chartCtx, config) => {
                    let newColors = {
                        fill: {
                            colors: [
                                ({ dataPointIndex }: { dataPointIndex: number }) => {
                                    if (dataPointIndex === config.dataPointIndex) return theme.palette.highlight.dark;
                                    return theme.palette.neutral.main;
                                }
                            ]
                        }
                    };
                    chartCtx.updateOptions(newColors);
                }
            }
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            },
            active: {
                filter: {
                    type: 'none'
                }
            }
        },
        grid: {
            // borderColor: "#62ABFF",
            borderColor: theme.textColors.secondary.light,
            strokeDashArray: 5
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex }) => `
                <div class="bar-graph-tooltip"> 
                    <span> Design Studio </span>
                    <p> ${series[seriesIndex][dataPointIndex]} </p>
                    <span> February </span>
                </div>
            `
        }
    };

    return (
        <SectionCard title="Sales" subtitle="Overall Earngin">
            <Box mt={2}>
                <Chart
                    type="bar"
                    series={[{ data: series }]}
                    options={options}
                    height={aboveSmallScreenSize ? '400px' : '250px'}
                />
            </Box>
        </SectionCard>
    );
}
