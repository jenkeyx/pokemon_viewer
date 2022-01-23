import './styles/global.scss'
import Header from "./components/header/Header";
import ChipsContainer from "./components/chipsContainer/ChipsContainer";
import {createTheme, ThemeProvider} from "@mui/material";

import "@fontsource/raleway/500.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"

export const API_URL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
    const THEME = createTheme({
        typography: {
            "fontFamily": "Raleway",
        },
        components: {
            MuiChip: {
                styleOverrides: {
                    root: {
                        fontSize: 20,
                        padding: "30px 9px",
                        borderRadius: "44px",
                        marginBottom: "10px",
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
