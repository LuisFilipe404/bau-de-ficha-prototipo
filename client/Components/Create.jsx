import './Create.css'; // Importação do Css
import { useState } from 'react'; // Importação do State
import { AiFillDownCircle } from 'react-icons/ai'; // Importação de ícone
import Axios from 'axios'; // Importação do Axios

function Create() {
    
    const [personagem, setPersonagem] = useState(false); // State para ativar a aba personagem

    const showPersonagem = () => {
        setPersonagem(!personagem);
        document.getElementById('personagem').classList.toggle('invisible');
    } // Evento de click que alterna entra ativar e desativar

    const [values, setValues] = useState({});

    // Evento para juntar em um objetos todos os valores dos inputs
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    // Envento de Envio
    const submitEvent = () => {
        Axios.post('http://localhost:3003/register', {
            nome: values.nome,
            classe: values.classe,
            breed: values.breed,
            age: values.age,
            height: values.height,
            weight: values.weight,
            eye: values.eye,
            skin: values.skin,
            hair: values.hair,
            parents1: values.parents1,
            parents2: values.parents2,
            line: values.line,
            aparencia: values.aparencia,
            history: values.history,
            personality: values.personality,
            ideais: values.ideais,
            vinculos: values.vinculos,
            weakness: values.weakness,
            others: values.others,
            chars: values.chars,
            aliados: values.aliados,
            org: values.org
        }).then((response) => {
            console.log(response)
        })
    }

    const changePage = (e) => {
        e.preventDefault()
        setTimeout(() => {
            window.location.href="http://localhost:5173/redirect"
        }, 200);
    }

    return (
        <div>
            <header className="header"></header>
            <form action='POST' className='form-container' onSubmit={changePage}>
               <fieldset className='fieldset'>
                    <div 
                        onClick={showPersonagem}
                        className="personagem-aba">
                        <h2>Personagem</h2>
                        <AiFillDownCircle className='img-icon'/>
                    </div>
                    <div className="invisible container-personagens" id='personagem'>
                        <div>
                            <div>
                                <label htmlFor="name">Nome do Personagem:</label>
                                <input
                                    type="text"
                                    name='nome'
                                    id='name'
                                    required
                                    maxLength="80"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="class">Classe:</label>
                                <input
                                    type="text"
                                    name='classe'
                                    id='class'
                                    maxLength="20"
                                    required
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="breed">Raça:</label>
                                <input
                                    type="text"
                                    name='breed'
                                    id='breed'
                                    maxLength="20"
                                    required
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="age">Idade:</label>
                                <input
                                    type="number"
                                    name="age"
                                    id="age"
                                    max="9999"
                                    required
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="height">Altura:</label>
                                <input
                                    type="number"
                                    name="height"
                                    id="height"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="weight">Peso:</label>
                                <input
                                    type="number"
                                    name="weight"
                                    id="weight"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="eye">Cor dos Olhos:</label>
                                <input
                                    type="text"
                                    name="eye"
                                    id="eye"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="skin">Cor da Pele:</label>
                                <input
                                    type="text"
                                    name="skin"
                                    id="skin"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div>
                                <label htmlFor="hair">Cor do Cabelo:</label>
                                <input
                                    type="text"
                                    name="hair"
                                    id="hair"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div className='separador'>
                                <label htmlFor="parents1">Antecedentes:</label>
                                <input
                                    type="text"
                                    name="parents1"
                                    id="parents1"
                                    onChange={handleChangeValues}
                                />
                                <span className='cross'>X</span>
                                <input
                                    type="text"
                                    name="parents2"
                                    id="parents2"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div className='separador'>
                                <label htmlFor="line">Alinhamento</label>
                                <input
                                    type="text"
                                    name="line"
                                    id="line"
                                    onChange={handleChangeValues}
                                />
                            </div>
                            <div className='text-area'>
                                <label htmlFor="aparencia">Aparência do Personagem:</label>
                                <textarea
                                    name="aparencia"
                                    id="aparencia"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="history">História do Personagem</label>
                                <textarea
                                    name="history"
                                    id="history"
                                    cols="30"
                                    rows="10"
                                    maxLength="700"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="personality">Traços de Personalidade:</label>
                                <textarea
                                    name="personality"
                                    id="personality"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="ideais">Ideais:</label>
                                <textarea
                                    name="ideais"
                                    id="ideais"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="vinculos">Vínculos</label>
                                <textarea
                                    name="vinculos"
                                    id="vinculos"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="weakness">Fraquezas</label>
                                <textarea
                                    name="weakness"
                                    id="weakness"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="others">Outras proeficiências & Idiomas</label>
                                <textarea
                                    name="others"
                                    id="others"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="chars">Caracterîsticas e talentos</label>
                                <textarea
                                    name="chars"
                                    id="chars"
                                    cols="30"
                                    rows="10"
                                    maxLength="400"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            
                            <div className='text-area'>
                                <label htmlFor="aliados">Aliados</label>
                                <textarea
                                    name="aliados"
                                    id="aliados"
                                    cols="30"
                                    rows="10"
                                    maxLength="200"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                            <div className='text-area'>
                                <label htmlFor="org">Organizações:</label>
                                <textarea
                                    name="org"
                                    id="org"
                                    cols="30"
                                    rows="10"
                                    maxLength="200"
                                    onChange={handleChangeValues}
                                >
                                </textarea>
                            </div>
                        </div>
                        <section className='btns'>
                            <button 
                                type="reset"
                                className='reset'
                            >Limpar</button>
                            <button 
                                type='submit'
                                className='submit'
                                onClick={submitEvent}
                            >Enviar</button>
                        </section>
                    </div>                    
                </fieldset>
            </form>
        </div>
        
    )
}

export default Create