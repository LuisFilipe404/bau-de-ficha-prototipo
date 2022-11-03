import styles from './Redirect.module.css'; // importaçao do Css
import { Link } from 'react-router-dom'
import icon from '../assets/right.png'

function Redirect() {
    return (
        <div>
            <header className={styles.header}></header>
            <main className={styles.redirectContainer}>
                <div>
                    <h2>Ficha Cadastrada com Sucesso</h2>
                    <img className={styles.img} src={icon} alt="concluido" />
                    <div>
                        <Link to="/view" className={styles.view}>Visualize suas fichas</Link>
                        <Link to="/criarficha" className={styles.create}>Crie um ficha nova</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Redirect