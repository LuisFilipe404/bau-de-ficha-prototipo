// Layout para barra de navegação

import { Link } from 'react-router-dom' // Importar os links do router-dom
import GavetaLinks from './GavetaLinks'

// Importar Css //

import styles from './NavBar.module.css'

function NavBar () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 title='Baú de Fichas'>
                    <Link to="/">Baú de Fichas</Link>
                </h1>
                <GavetaLinks/>
            </nav>
           
        </header>
    )
}

export default NavBar