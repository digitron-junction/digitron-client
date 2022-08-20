import { Box, useMediaQuery, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';
import { SectionCard } from 'src/components';

export default function Demand() {
    const theme = useTheme();
    const isScreenSmallUp = useMediaQuery(theme.breakpoints.up('sm'));
    let series = [70, 30, 40];

    let options = {
        labels: ['Papercaft', 'Pottery', 'Crotcheting'],
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        show: true
                    }
                }
            }
        },
        legend: {
            position: 'left',
            itemMargin: {
                vertical: 5
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#FF7D05', '#8353C0', '#4DA1FF'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal'
            }
        },
        chart: {
            fontFamily: 'Poppins'
        },
        tooltip: {
            enabled: false
        },
        states: {
            // hover: {
            //     filter: {
            //         type: "none"
            //     }
            // },
            active: {
                filter: {
                    type: 'none'
                }
            }
        }
    };

    return (
        <SectionCard title="Demand">
            <Box mt={2}>
                <Chart type="pie" series={series} options={options} height={isScreenSmallUp ? '1000px' : '150px'} />
            </Box>
        </SectionCard>
    );
}
