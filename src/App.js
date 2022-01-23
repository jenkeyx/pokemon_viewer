import './App.css';
import './styles/global.scss'
import Header from "./components/header/Header";
import ChipsContainer from "./components/chipsContainer/ChipsContainer";
import {createTheme, ThemeProvider} from "@mui/material";

import "@fontsource/raleway/300.css"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"

function App() {
    const THEME = createTheme({
        typography: {
            "fontFamily": "Raleway",
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
        },
        components: {
            MuiChip: {
                styleOverrides: {
                    root: {
                        fontSize: 22,
                        paddingTop: "30px",
                        paddingBottom: "30px",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        marginBottom: "10px",
                        borderRadius: "44px",
                        backgroundColor: "#1986EC"
                    }
                }
            }
        }
    })
    return (
        <ThemeProvider theme={THEME}>
            <div className="App">
                <Header/>
                <ChipsContainer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
