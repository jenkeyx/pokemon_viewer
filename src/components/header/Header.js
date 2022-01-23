import "./header.css"
import clickIcon from '../../icons/Desktop/Icon.svg'

function Header() {
    return (
        <div className={"header"}>
            <div className={"title"}>
                ПОКЕМОНЫ API
            </div>
            <div className={"hint"}>
                <img src={clickIcon} alt={"click icon"}/>
                <div>
                    Нажмите на нужное Покемона
                </div>
            </div>
        </div>
    )
}

export default Header