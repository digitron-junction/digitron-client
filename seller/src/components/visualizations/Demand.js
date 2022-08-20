import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
    useTheme
} from '@mui/material';

import { SectionCard } from 'src/components';
import { GradientPath } from 'gradient-path';
import React, { useEffect, useRef } from 'react';
import { BarChart } from '@mui/icons-material';

function mapDataToPolarRanges(values, r, angularGap, strokeWidth) {
    let total = values.reduce((sum, val) => sum + val, 0);
    let startingAngle = 0;
    let gap = angularGap + ((strokeWidth / r) * 90) / Math.PI;

    return values.map((val) => {
        let a = startingAngle + gap;
        let b = startingAngle + (val / total) * 360;
        startingAngle = b;
        return [(a * Math.PI) / 180, (b * Math.PI) / 180];
    });
}

function mapPolarToCartesianRanges(polarRanges, r) {
    return polarRanges.map(([start, end]) => ({
        x1: 50 + Math.sin(start) * r,
        y1: 50 - Math.cos(start) * r,
        x2: 50 + Math.sin(end) * r,
        y2: 50 - Math.cos(end) * r
    }));
}

function DonutChart(props) {
    let options = {
        innerRadius: 30, // percent
        trackWidth: 2, // percent
        trackColor: '#958DC8',
        donutWidth: 5, // percent
        gap: 7, // percent
        angularGap: 10 // Degrees
    };

    const Track = (props) => (
        <circle
            cx="50"
            cy="50"
            r={props.r}
            strokeWidth={options.trackWidth}
            fill="transparent"
            stroke={options.trackColor}
        />
    );

    const Arc = React.forwardRef((props, ref) => (
        <>
            <circle cx={props.x1} cy={props.y1} r={options.donutWidth / 2} fill={props.gradient[0].color} />
            <path
                ref={ref}
                d={`M ${props.x1} ${props.y1} A ${props.r} ${props.r} 0 ${props.isLargerThan180} 1 ${props.x2} ${props.y2}`}
            />
            <circle
                cx={props.x2}
                cy={props.y2}
                r={options.donutWidth / 2}
                fill={props.gradient[props.gradient.length - 1].color}
            />
        </>
    ));

    const MiddleIcon = () => {
        let radius = options.innerRadius - options.gap - Math.max(options.donutWidth, options.trackWidth);
        let w = (radius * 6) / 5;
        return (
            <>
                <circle cx={50} cy={50} r={radius} fill="#DAD4FF" />
                <BarChart x={50 - w / 2} y={50 - w / 2} width={w} height={w} sx={{ color: '#8E5CCE' }} />
            </>
        );
    };

    let svgElements = [];
    let arcRefs = [];
    let colors = props.gradients.map((gradientColors) =>
        gradientColors.map((color, i) => ({
            color: color,
            pos: i / (gradientColors.length - 1)
        }))
    );

    let k = 0; // global counter
    props.series.forEach((values, i) => {
        let r = options.innerRadius + i * (options.gap + Math.max(options.trackWidth, options.donutWidth));
        svgElements.push(<Track key={`track${i}`} r={r} />);

        let polarRanges = mapDataToPolarRanges(values, r, options.angularGap, options.donutWidth);
        let cartesianRanges = mapPolarToCartesianRanges(polarRanges, r);

        cartesianRanges.forEach((points, j) => {
            let arcRef = React.createRef();
            svgElements.push(
                <Arc
                    key={`arc${i}${j}`}
                    ref={arcRef}
                    {...points}
                    r={r}
                    isLargerThan180={polarRanges[j][1] - polarRanges[j][0] >= Math.PI ? 1 : 0}
                    isFullCircle={values.length === 1 ? 1 : 0}
                    gradient={colors[k % colors.length]}
                />
            );
            arcRefs.push(arcRef);
            k++;
        });
    });

    useEffect(() => {
        arcRefs.forEach((arcRef, i) => {
            new GradientPath({
                path: arcRef.current,
                segments: 100,
                samples: 3
            }).render({
                type: 'path',
                fill: colors[i % colors.length],
                width: options.donutWidth,
                stroke: colors[i % colors.length],
                strokeWidth: 0.5
            });
        });
    }, []);

    svgElements.push(<MiddleIcon key="middleIcon" />);

    return (
        <svg width={props.width} height={props.height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {svgElements}
        </svg>
    );
}

export default function Demand() {
    const theme = useTheme();
    let series = [[80], [60, 40]];
    let gradients = [
        ['#E323FF', '#7517F8', '#E323FF'],
        ['#4DFFDF', '#4DA1FF'],
        ['#FFD422', '#FF7D05']
    ];

    return (
        <SectionCard title="Demand">
            <Stack direction="row" alignItems="center" justifyContent="space-around">
                <Stack gap={2}>
                    <List disablePadding>
                        {series.flat().map((values, i) => {
                            let gradient = gradients[i % gradients.length];
                            let bgColor = `linear-gradient(270deg, ${gradient[0]} 0.02%, ${
                                gradient[gradient.length - 1]
                            } 97.45%)`;
                            return (
                                <ListItem key={i} disablePadding sx={{ mb: 2 }}>
                                    <Box
                                        sx={{
                                            background: bgColor,
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '100%',
                                            mr: 1
                                        }}
                                    ></Box>
                                    <Typography variant="subtitle2">{`Product ${i}`}</Typography>
                                </ListItem>
                            );
                        })}
                    </List>
                </Stack>
                <Box>
                    <DonutChart series={series} gradients={gradients} width="180px" height="180px" />
                </Box>
            </Stack>
        </SectionCard>
    );
}
