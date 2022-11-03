import styles from './AlertDelete.module.css'; // importação do Css
import Axios from 'axios'

function AlertDelete ({active, id, nome}) {

    const closeSideBar = () => {
        active(false);
    };

    const handleDelete = () => {
        active(false)
        deleteEvent()
        window.location.reload();
    }

    const deleteEvent = () => {
        Axios.post("http://localhost:3003/delete", {
            id: id
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className={styles.alert}>
            <div className={styles.menu}>
                <h2>Alerta</h2>
                <p>Deseja deletar o personagem: {nome}?</p>
                <div>
                    <button
                        onClick={closeSideBar}
                        className={styles.cancel}
                    >Cancelar</button>
                    <button
                        className={styles.submit}
                        onClick={handleDelete}
                    >Deletar Ficha</button>
                </div>
            </div>
        </div>
    )
}

export default AlertDelete