import "./View.css" // Importação do css
import { useState, useEffect } from 'react' // Importação do State
import Axios from 'axios' // Importação do Axios
import Registro from './Registro'

function View() {

    const [list, setList] = useState([]); // State para receber a list e atribuir em um Array

    console.log(list)

    // Effect para execultar assim que a pagina for carregada e receber do axios todos os registros
    useEffect(() => {
        Axios.get('http://localhost:3003/view').then(resp => setList(resp.data));
    }, []);

    return (
        <main>
            <header className='header'></header>
            <div className="gui-section">
                <div className="container-gui">
                    { list.length > 0 &&
                        list.map((value, index) => (
                            <Registro
                                setList={setList}
                                list={list}
                                key={index}
                                nome={value.NOME}
                                classe={value.CLASSE}
                                raca={value.RACA}
                                idade={value.IDADE}
                                altura={value.ALTURA}
                                peso={value.PESO}
                                pele={value.COR_PELE}
                                olhos={value.COR_OLHOS}
                                cabelo={value.COR_CABELO}
                                antecedente1={value.ANTECEDENTE1}
                                antecedente2={value.ANTECEDENTE2}
                                alinhamento={value.ALINHAMENTO}
                                aparencia={value.APARENCIA_PERSONAGEM}
                                historia={value.HISTORIA_PERSONAGEM}
                                personalidade={value.TRACOS_PERSONALIDADE}
                                ideais={value.IDEAIS}
                                vinculos={value.VINCULOS}
                                fraquezas={value.FRAQUEZAS}
                                talentos={value.CARACTERISTICAS_TALENTOS}
                                outros={value.OUTRAS}
                                aliados={value.ALIADOS}
                                org={value.ORGANIZACOES}
                                id={value.ID_FICHA}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default View