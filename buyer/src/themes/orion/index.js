import { createTheme } from "@mui/material";

const theme = createTheme({
    shadows: {
        light: "0px 20px 70px rgba(91, 86, 146, 0.09)",
        main: "0px 27.1181px 94.8973px rgba(86, 138, 146, 0.1)"
    },
    palette: {
        common: {
            black: "rgba(24, 25, 31, 1)"
        },
        primary: {
            main: "#B162FF"
        },
        secondary: {
            main: "#ffffff"
        },
        glass: "rgba(252, 254, 254, 0.43)",
    },
    gradients: {
        purple: {
            100: "linear-gradient(180deg, #F8F3FF 0%, #FBF0FD 100%)",
            500: "linear-gradient(90deg, #9F3EFF 1.49%, #CC9DFC 100%)",
        },
        black: "linear-gradient(270.15deg, #53568B 19.44%, #768095 81.9%)",
    },
    typography: {
        fontFamily: "Poppins"
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
                    boxShadow: "none",
                    textTransform: "initial",
                    fontFamily: "Sen",
                    fontWeight: 400,
                    padding: "8px 24px"
                }
            },
            variants: [
                {
                    props: { variant: "purple-gradient" },
                    style: {
                        background: "linear-gradient(90deg, #9F3EFF 1.49%, #CC9DFC 100%)",
                        color: "white"
                    }
                }
            ]
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
                    boxShadow: "0px 27.1181px 94.8973px rgba(86, 138, 146, 0.1)",
                    backdropFilter: "blur(113.127px)",
                    background: "rgba(252, 254, 254, 0.43)"
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 27.1181px 94.8973px rgba(86, 138, 146, 0.1)",
                    borderRadius: 15,
                    color: "#DCDCDC",
                    border: "none"
                }
            }
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: "32px",
                    fontWeight: 600
                },
                h2: {
                    fontSize: "24px"
                },
                h3: {
                    fontSize: "21px",
                    fontWeight: 600
                },
                h4: {
                    fontSize: "18px",
                    fontWeight: 600
                },
                h5: {
                    fontSize: "14px"
                },
                h6: {
                    fontSize: "12px"
                },
                subtitle1: {
                    fontSize: "11px"
                },
                subtitle2: {
                    fontSize: "11px"
                },
                body1: {
                    fontSize: "14px"
                },
                body2: {
                    fontSize: "12px"
                },
                caption: {
                    fontSize: "10px"
                },
            }
        }
    }
});

export default theme;