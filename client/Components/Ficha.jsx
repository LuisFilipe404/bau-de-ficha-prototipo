import styles from './Ficha.module.css'; // Importação do Css
import { useState } from 'react'; // Importação do useState
import AlertDelete from './AlertDelete'; // Importação do Delete

function Ficha({nome, classe, raca, idade, altura, peso, olhos, pele, cabelo, antecedente1, antecedente2, alinhamento, aparencia, historia, personalidade, ideais, vinculos, fraquezas, outros, talentos, aliados, org, id}) {

    const [alert, setAlert] = useState(false); // State para ativar a alert
    const showAlert = () => setAlert(!alert); // Evento de click que alterna entra ativar e desativar\

    return (
        <div className={styles.container}>
            <h3>{classe} {nome}</h3>
            <div>
                <p>Raça: {raca}</p>
                <p>Idade: {idade}</p>
                <h4>Características Físicas</h4>
                <div>
                    <p>Altura: {altura}</p>
                    <p>Peso: {peso}</p>
                    <p>Cor da pele: {pele}</p>
                    <p>Cor dos Olhos: {olhos}</p>
                    <p>Cor do Cabelo: {cabelo}</p>
                </div>
                <h4>Antecedentes</h4>
                <p>{antecedente1} X {antecedente2}</p>
                <h4>Alinhamento</h4>
                <p>{alinhamento}</p>
                <div className={styles.descContainer}>
                    <h4 className={styles.desc}>Descrições</h4>
                    <div>
                        <p>Aparência do Personagem:</p>
                        <p className={styles.textarea}>{aparencia}</p>
                        <br />
                        <p>História do Personagem</p>
                        <p className={styles.textarea}>{historia}</p>
                        <br />
                        <p>Traços e Personalidades</p>
                        <p className={styles.textarea}>{personalidade}</p>
                        <br />
                        <p>Ideais</p>
                        <p className={styles.textarea}>{ideais}</p>
                        <br />
                        <p>Vinculos</p>
                        <p className={styles.textarea}>{vinculos}</p>
                        <br />
                        <p>Fraquezas</p>
                        <p className={styles.textarea}>{fraquezas}</p>
                        <br />
                        <p>Outras proeficiencias & idiomas</p>
                        <p className={styles.textarea}>{outros}</p>
                        <br />
                        <p>Características e Talentos</p>
                        <p className={styles.textarea}>{talentos}</p>
                        <br />
                        <p>Aliados</p>
                        <p className={styles.textarea}>{aliados}</p>
                        <br />
                        <p>Organizações</p>
                        <p className={styles.textarea}>{org}</p>
                    </div>
                </div>
            </div>
            <div className={styles.btnscontainer}>
                <button className={styles.delete} onClick={showAlert}>Deletar Ficha</button>
                {alert && <AlertDelete nome={nome} id={id} active={setAlert}/>}
            </div>
        </div>
    )
}

export default Ficha