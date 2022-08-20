import { PaletteColor, SimplePaletteColorOptions, PaletteOptions, Box, styled } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Fonts
import PoppinsRegular from 'src/assets/fonts/Poppins-Regular-400.ttf';
import PoppinsMedium from 'src/assets/fonts/Poppins-Medium-500.ttf';
import PoppinsBold from 'src/assets/fonts/Poppins-SemiBold-600.ttf';
import RobotoRegular from 'src/assets/fonts/Roboto-Regular-400.ttf';
import RobotoBold from 'src/assets/fonts/Roboto-Bold-700.ttf';
import SenRegular from 'src/assets/fonts/Sen-Regular-400.ttf';

// ---------------------------------------------- Type Definitions ---------------------------------------------------

interface SidebarConfigOptions {
    bgColor: React.CSSProperties['color'];
}

interface SentimentConfigOptions {
    positive: React.CSSProperties;
    partiallyNegative: React.CSSProperties;
    neutral: React.CSSProperties;
    partiallyPositive: React.CSSProperties;
    negative: React.CSSProperties;
}

interface TextColorsOptions {
    primary: SimplePaletteColorOptions;
    secondary: SimplePaletteColorOptions;
    highlight: SimplePaletteColorOptions;
    contrast: SimplePaletteColorOptions;
}

interface ShadowOptions {
    main: React.CSSProperties['boxShadow'];
}

declare module '@mui/material/styles' {
    interface Theme {
        sidebarConfig: SidebarConfigOptions;
        sentimentConfig: SentimentConfigOptions;
        textColors: TextColorsOptions;
        shadow: ShadowOptions;
    }

    interface ThemeOptions {
        sidebarConfig?: SidebarConfigOptions;
        sentimentConfig?: SentimentConfigOptions;
        textColors?: TextColorsOptions;
        shadow?: ShadowOptions;
    }

    interface Palette {
        neutral: PaletteColor;
        highlight: PaletteColor;
        notification: PaletteColor;
        section: PaletteColor;
        field: PaletteColor;
        bg: PaletteColor;
    }

    interface PaletteOptions {
        neutral?: SimplePaletteColorOptions;
        highlight?: SimplePaletteColorOptions;
        notification?: SimplePaletteColorOptions;
        section: SimplePaletteColorOptions;
        field?: SimplePaletteColorOptions;
        bg: SimplePaletteColorOptions;
    }
}

// ---------------------------------------------- Colors ---------------------------------------------------

const palette: PaletteOptions = {
    primary: {
        light: '#9DC9FC',
        main: '#3E97FF'
    },
    secondary: {
        light: '#DAD4FF',
        main: '#7517F8',
        dark: '#E323FF'
    },
    info: {
        light: '#DAD4FF',
        main: '#C6ABFF',
        dark: '#8353C0'
    },
    warning: {
        light: '#FF7D05',
        main: '#FFD422'
    },
    success: {
        main: '#46DA78',
        dark: '#1B5E20'
    },
    error: {
        main: '#FF8A80',
        dark: '#B71C1C'
    },
    notification: {
        main: '#FF5252',
        contrastText: '#F0FAFF'
    },
    highlight: {
        light: '#D5FAFC',
        main: '#95F0FD',
        dark: '#6FF8E7'
    },
    neutral: {
        light: '#C4C4C4',
        main: '#53568B',
        dark: '#768095'
    },
    section: {
        light: '#FFFFFF',
        main: '#FCFEFE8F'
    },
    field: {
        light: '#D1E1F344',
        main: '#CFE5FFAB'
    },
    bg: {
        light: '#F0FAFF',
        main: '#F8F8FF'
    }
};

const textColors: TextColorsOptions = {
    primary: {
        main: '#474A57',
        dark: '#191932'
    },
    secondary: {
        light: '#DCDCDC',
        main: '#969BAB',
        dark: '#5A616F'
    },
    highlight: {
        main: '#407EC8'
    },
    contrast: {
        main: '#FFF',
        dark: '#F4F5F7'
    }
};

const sidebarConfig: SidebarConfigOptions = {
    bgColor: '#FCFEFE6E'
};

const sentimentConfig: SentimentConfigOptions = {
    positive: {
        background: '#46DA78'
    },
    partiallyNegative: {
        background: 'linear-gradient(86.31deg, #46DA78 6.11%, #46DAC8 100.2%)'
    },
    neutral: {
        background: '#62ABFF'
    },
    partiallyPositive: {
        background: 'linear-gradient(269.95deg, #FF5252 0.02%, #FB8C00 97.45%)'
    },
    negative: {
        background: '#FF5252'
    }
};

const shadow: ShadowOptions = {
    main: '0px 18.543689727783203px 64.90291595458984px 0px rgba(86, 138, 146, 0.1)'
};

// ---------------------------------------------- Theme ---------------------------------------------------

export const OrionTheme = createTheme({
    palette: palette,
    textColors: textColors,
    sidebarConfig: sidebarConfig,
    sentimentConfig: sentimentConfig,
    shadow: shadow,

    typography: {
        fontFamily: 'Poppins',
        fontSize: 14,
        htmlFontSize: 16,
        h1: {
            fontWeight: 600,
            fontSize: 25,
            color: textColors.primary.dark
            // fontSize: '3rem'
        },
        h2: {
            fontWeight: 600,
            fontSize: 23,
            color: textColors.primary.main
        },
        h3: {
            fontWeight: 600,
            fontSize: 16,
            // lineHeight: 1.4,
            color: textColors.primary.main
        },
        h4: {
            fontWeight: 500,
            fontSize: 13,
            color: textColors.primary.main
        },
        h5: {
            fontWeight: 500,
            fontSize: 14,
            color: textColors.secondary.main
        },
        h6: {
            fontWeight: 400,
            fontSize: 12,
            color: textColors.secondary.main
        },
        body1: {
            fontFamily: 'Sen',
            fontWeight: 'regular',
            fontSize: 12,
            color: textColors.contrast.main
        },
        body2: {
            fontFamily: 'Sen',
            fontWeight: 'regular',
            fontSize: 12,
            color: textColors.contrast.dark
        },
        button: {
            fontWeight: 400,
            fontSize: 14,
            color: textColors.contrast.main
        },
        caption: {
            fontFamily: 'Roboto',
            fontWeight: 'regular',
            fontSize: 12,
            color: textColors.secondary.main
        },
        subtitle1: {
            fontFamily: 'Sen',
            fontWeight: 'regular',
            fontSize: 12,
            color: textColors.primary.main
        },
        subtitle2: {
            fontFamily: 'Sen',
            fontWeight: 'regular',
            fontSize: 13,
            color: textColors.secondary.main
        },
        overline: {
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            color: textColors.highlight.main
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
				body {
					overflow: hidden;
					background: ${palette.bg.main};
				}

				//------------------------------- Loading Fonts ------------------------------------------------

				@font-face {
					font-family: 'Poppins';
					font-weight: 'regular';
					src: url(${PoppinsRegular});
				};

				@font-face {
					font-family: 'Poppins';
					font-weight: 'medium';
					src: url(${PoppinsMedium});
				};

				@font-face {
					font-family: 'Poppins';
					font-weight: 'bold';
					src: url(${PoppinsBold});
				};

				@font-face {
					font-family: 'Roboto';
					font-weight: 'regular';
					src: url(${RobotoRegular});
				};

				@font-face {
					font-family: 'Roboto';
					font-weight: 'bold';
					src: url(${RobotoBold});
				};

				@font-face {
					font-family: 'Sen';
					font-weight: 'regular';
					src: url(${SenRegular});
				};

				//------------------------------- Styles for the Grafs ------------------------------------------------

				.apexcharts-tooltip {
					background: transparent !important;
					border: none !important;
					box-shadow: none !important;
					overflow: visible !important;
				}

				.line-graph-tooltip {
					background-color: white;
					border: 3px solid #62abff;
					padding: 8px 16px;
					border-radius: 50px;
					/* transform: translateY(-50%); */
				}

				.bar-graph-tooltip {
					background: linear-gradient(270.15deg, ${palette.highlight?.dark} 19.44%, ${palette.highlight?.main} 81.9%);
					padding: 8px 32px;
					border-radius: 24px;
					color: ${textColors.highlight.main};
					margin-bottom: 32px;
					/* transform: translate(-50%, -50%); */
					/* transform: translateY(-50%); */
					text-align: center;
				}

				.bar-graph-tooltip span {
					color: ${textColors.secondary.main};
					font-size: 12px;
				}

				.bar-graph-tooltip p {
					margin: 0;
					padding: 0;
					font-size: 18px;
				}

			`
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: sidebarConfig.bgColor,
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    backdropFilter: 'blur(50px)',
                    boxShadow: 'none'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
                // root: ({ownerState}) => ({

                // })
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: shadow.main,
                    borderRadius: 15,
                    backgroundColor: palette.section.main,
                    border: `2px solid ${palette.section.light}`,
                    backdropFilter: 'blur(60px)'
                }
            }
        },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         root: {
        //             borderRadius: 15,
        //             border: 'none',
        //             background: palette.section.light,
        //             boxShadow: shadow.main,
        //         }
        //     }
        // }
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 'none'
                }
            }
        }
    }
});

// ------------------------------------- Xtra stuff (will move this from here soon) ----------------------------------------

const Dhabba1 = styled(Box)(
    ({ theme }) => `
		position: absolute;
		left: 78.88%;
		right: -5.9%;
		top: -3.13%;
		bottom: 64.01%;

		background: linear-gradient(219.99deg, rgba(125, 232, 255, 0.09) 43.63%, rgba(101, 55, 233, 0.045) 104.1%);
		// background: linear-gradient(219.99deg, rgba(125, 232, 255, 0.22) 43.63%, rgba(101, 55, 233, 0.11) 104.1%);
		z-index: -4000;
		filter: blur(121.771px);
	`
);

const Dhabba2 = styled(Box)(
    ({ theme }) => `
		position: absolute;
		left: 1.16%;
		right: 68.23%;
		top: 31.15%;
		bottom: 14.32%;

		background: linear-gradient(180deg, rgba(94, 218, 235, 0.1) 0%, rgba(105, 94, 235, 0.029) 100%);
		// background: linear-gradient(219.99deg, rgba(125, 232, 255, 0.22) 43.63%, rgba(101, 55, 233, 0.11) 104.1%);
		z-index: -4000;
		filter: blur(130px);
	`
);

const Dhabba3 = styled(Box)(
    ({ theme }) => `
		position: absolute;
		left: 60.53%;
		right: -2.89%;
		top: 76.54%;
		bottom: -25.16%;

		background: linear-gradient(180deg, rgba(94, 218, 235, 0.1) 0%, rgba(105, 94, 235, 0.029) 100%);
		// background: linear-gradient(219.99deg, rgba(125, 232, 255, 0.22) 43.63%, rgba(101, 55, 233, 0.11) 104.1%);
		z-index: -4000;
		filter: blur(130px);
	`
);

export function BackgroundDecor() {
    return (
        <>
            <Dhabba1 />
            <Dhabba2 />
            <Dhabba3 />
        </>
    );
}
