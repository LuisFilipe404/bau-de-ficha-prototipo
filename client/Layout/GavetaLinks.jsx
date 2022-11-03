import styles from './GavetaLinks.module.css'; // Importação do Css
import SideBar from './SideBar'; // Importação da SideBar
import { useState } from 'react'; // importação do UseState

function NavBar() {

    const [sideBar, setSideBar] = useState(false); // State para ativar a SideBar
    const showSideBar = () => setSideBar(!sideBar); // Evento de click que alterna entra ativar e desativar

    return (
        <div>
            <div
                className={styles.container}
                onClick={showSideBar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {sideBar && <SideBar active={setSideBar}/>}
        </div>
    )
}

export default NavBar