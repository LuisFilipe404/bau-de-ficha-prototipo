import './Registro.css'
import { AiFillDownCircle } from 'react-icons/ai'; // Importação de ícone
import { useState } from 'react'
import Ficha from './Ficha'

function Registro({nome, classe, raca, idade, altura, peso, olhos, pele, cabelo, antecedente1, antecedente2, alinhamento, aparencia, historia, personalidade, ideais, vinculos, fraquezas, talentos, outros, aliados, org, id}) {

    const [gui, setGui] = useState(false); // State para ativar a SideBar
    const showGui = () => setGui(!gui); // Evento de click que alterna entra ativar e desativar

    return (
        <div className='gui-personagem'>
            <div 
                className='personagem-aba'
                onClick={showGui}
            >
                <h2>Ficha de: {nome}</h2>
                <AiFillDownCircle className='img-icon'/>
            </div>
            { gui && <Ficha
                        nome={nome}
                        classe={classe}
                        raca={raca}
                        idade={idade}
                        altura={altura}
                        peso={peso}
                        olhos={olhos}
                        pele={pele}
                        cabelo={cabelo}
                        antecedente1={antecedente1}
                        antecedente2={antecedente2}
                        alinhamento={alinhamento}
                        aparencia={aparencia}
                        historia={historia}
                        personalidade={personalidade}
                        ideais={ideais}
                        vinculos={vinculos}
                        fraquezas={fraquezas}
                        talentos={talentos}
                        outros={outros}
                        aliados={aliados}
                        org={org}
                        id={id}
                    />}
        </div>
    )
}

export default Registro