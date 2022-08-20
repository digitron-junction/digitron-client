import { Box, Card, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { SectionCard } from 'src/components';

export default function ProjectedSales() {
    const theme = useTheme();
    const aboveXlScreenSize = useMediaQuery(theme.breakpoints.up('xl'));
    const aboveSmallScreenSize = useMediaQuery(theme.breakpoints.up('sm'));
    const [viewWindowStart, setViewWindowStart] = useState(0);
    const viewWindowSize = aboveSmallScreenSize ? 9 : 4;

    type DataType = Record<string, Array<{ x: string; y: number }>>;
    const data: DataType = {
        Kanye: [
            { x: 'July', y: 30 },
            { x: 'Aug', y: 40 },
            { x: 'Sept', y: 50 },
            { x: 'Oct', y: 60 },
            { x: 'Nov', y: 70 },
            { x: 'Dec', y: 80 },
            { x: 'Jan', y: 90 },
            { x: 'Feb', y: 10 },
            { x: 'Mar', y: 20 }
        ],
        West: [
            { x: 'July', y: 40 },
            { x: 'Aug', y: 50 },
            { x: 'Sept', y: 60 },
            { x: 'Oct', y: 70 },
            { x: 'Nov', y: 80 },
            { x: 'Dec', y: 90 },
            { x: 'Jan', y: 100 },
            { x: 'Feb', y: 110 },
            { x: 'Mar', y: 120 }
        ]
    };

    const series: ApexAxisChartSeries = Object.entries(data).map(([seriesName, seriesData]) => ({
        name: seriesName,
        data: seriesData.slice(viewWindowStart, Math.min(seriesData.length, viewWindowStart + viewWindowSize))
    }));

    let options: ApexOptions = {
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
        chart: {
            fontFamily: 'Poppins',
            toolbar: {
                tools: {
                    download: false
                }
            }
        },
        colors: [
            theme.palette.secondary.dark,
            theme.palette.highlight.main,
            theme.palette.warning.light,
            theme.palette.error.light,
            theme.palette.success.light,
            theme.palette.neutral.light
        ],
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [
                    theme.palette.secondary.main,
                    theme.palette.primary.main,
                    theme.palette.warning.main,
                    theme.palette.error.main,
                    theme.palette.success.main,
                    theme.palette.neutral.main
                ]
            }
        },
        markers: {
            strokeWidth: 5,
            hover: {
                size: 10
            }
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            // borderColor: "#62ABFF",
            // strokeDashArray: 5,
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex }) =>
                `<div class="line-graph-tooltip"> Value: ${series[seriesIndex][dataPointIndex]} </div>`
        }
    };

    return (
        <SectionCard title="Projected Sales">
            <Box mt={2}>
                <Chart type="line" series={series} options={options} height="400px" />
            </Box>
        </SectionCard>
    );
}
