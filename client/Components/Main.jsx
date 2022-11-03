import styles from './Main.module.css'; // Importação do Css
import { Link } from 'react-router-dom'

function Main() {
    return (
        <main className={styles.body}>
            <div>
                <h2>Divirta-se no<br/>mundo de fantasias</h2>
                <p>"Triste não é mudar de idéia, mas sim não ter idéias para mudar." Mestre dos Magos</p>
                <div className={styles.btnContainer}>
                    <Link to="criarficha" className={styles.btn}>
                        Crie suas fichas
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Main