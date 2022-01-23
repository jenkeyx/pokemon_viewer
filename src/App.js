import './App.css';
import './styles/global.scss'
import './styles/raleway.css'
import Header from "./components/header/Header";
import ChipsContainer from "./components/chipsContainer/ChipsContainer";
import {createMuiTheme, ThemeProvider} from "@mui/material";

function App() {
    const THEME = createMuiTheme({
        typography: {
            "fontFamily": "Raleway",
            "fontSize": 22,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
        },
        components: {
            MuiChip:{
                styleOverrides:{
                    root:{
                        paddingTop: "30px",
                        paddingBottom: "30px",
                        paddingLeft:"8px",
                        paddingRight: "8px",
                        borderRadius:"44px",
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
