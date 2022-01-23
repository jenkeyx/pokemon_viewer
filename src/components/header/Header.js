import "./header.css"
import clickIcon from '../../icons/Icon.svg'
import {Typography} from "@mui/material";

function Header() {
    return (
        <div className={"header"}>
            <div className={"title"}>
                <Typography variant={"caption"}>
                    ПОКЕМОНЫ API
                </Typography>
            </div>
            <div className={"hint"}>
                <img src={clickIcon} alt={"click icon"}/>
                <div>
                    <Typography sx={{fontWeight: 600, lineHeight:'100%'}} variant={"caption"}>
                        Нажмите на нужное Покемона
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Header