import styles from './SideBar.module.css'; // Importação do Css
import { Link } from 'react-router-dom'; // Importação dos Links do router

function SideBar({ active }) {

    // Evento para fechar a sideBar
    const closeSideBar = () => {
        active(false);
    };

    return (
        <nav
            onClick={closeSideBar}
            id="navigation"
            className={styles.container}
        >
            <ul>
                <li>
                    <Link to="/" title='Home'>Home</Link>
                </li>
                <li>
                    <Link title='Criar Fichas' to="/criarficha">Crie sua ficha</Link>
                </li>
                <li>
                    <Link to="view" title="Fichas cadastradas">Baú de Fichas</Link>
                </li>
                <li>
                    <Link to="/d6" title='rolamento de dados'>Dados</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar

