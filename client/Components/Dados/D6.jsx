import { useState } from 'react'; // Importação do state
import styles from  './D6.module.css'; // Importação do css

function D6() {

    const [value, setValue] = useState("undefined"); // Evento para buscar o valor do menu de seleção
    const [custom, setCustom] = useState(5); // Evento para saber qual o intervalo do modo custom
    const [dice, setDice] = useState(); // Evento para setar o valor do dado randomizado
    const [valuesHistory, setValuesHistory] = useState([]); // Evento para criar um array de histórico

    // Evento para gerar um número aleatório
    function getRandomInt(min, max) {
        ++max; // Serve para incluir o valor máximo no intervalo
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    // Evento para verificar se os valores digitados são válidos e se forem gerar o número aleatório
    function getDiceValue () {
        if (value !== 'custom') {
            const result = getRandomInt(1, value); // Chamada da função de randomização
            setDice(result); //Setar o valor do dado
            return result; // Retornar o valor criado
        } else {
            if (custom > 200 || custom < 2) {
                setDice("err");
                return -10; // Código de verificação de erro que será reconhecido no final do código
            } else {
                const result = getRandomInt(1, custom);
                setDice(result);
                return result;
            }
        }
    }

    // Evento principal de clique do botão
    const clickButton = (e) => {
        e.preventDefault(); // Resetar as propriedades do submit
        var result = getDiceValue(); // Receber o valor do dado

        // Se o valor for diferente do código de erro prosseguir
        if (result === -10) {
            return 0;
        }

        // Criar um variável que recebe o tipo e o resultado
        const newResult =  {
            type: value,
            result: result
        };

        // Atribuir ao estado do historico os valores atuais e os valores antigos criando uma lista de dados
        setValuesHistory(prevState => [...prevState, newResult]);
    }

    // Evento para receber o input do modo custom
    const handleChangeValues = (e) => {
        setCustom(e.target.value);
    }
    
    return (
        <main className={styles.body}>
            <div>
                <form className={styles.form}>
                    <h2>Rolagem de Dados</h2>
                    <fieldset>
                        <div>
                            <select
                                name="dices"
                                onChange={(e) => setValue(e.target.value)}
                                required
                                className={styles.select}
                            >
                                <option value="undefined">Escolha um Dado</option>
                                <option value="4">Dado de 4</option>
                                <option value="6">Dado de 6</option>
                                <option value="8">Dado de 8</option>
                                <option value="10">Dado de 10</option>
                                <option value="12">Dado de 12</option>
                                <option value="20">Dado de 20</option>
                                <option value="100">Dado de 100</option>
                                <option value="custom">Custom</option>
                            </select>

                            { 
                                // Ternário para verificar se a opção custom foi ativada e se foi mostrar o input do custom
                                value == "custom" ?  (
                                    <input 
                                        className={styles.ipt} type="number"
                                        onChange={handleChangeValues}
                                        min={0}
                                        max="200"
                                    />
                                ) : <></>
                            }
                        </div>

                        {
                            // Ternário para aparecer o botão apenas quando uma opção for selecionada
                            value != 'undefined' ? (
                                <button 
                                    className={styles.btn}
                                    onClick={clickButton}
                                >Rodar o Dado</button>
                            ):<></>
                        }

                        { 
                            // Ternário para aparecer o resultado do número assim que o botão for clicado transmitindo um paragrafo com o valor, ou um paragrafo de erro
                            dice === "err" ? 
                                <p className={styles.err}>Digite um número entre 2 e 200</p> : 
                                <p className={styles.sucess}>{dice}</p>
                        }
                    </fieldset>
                </form>
                {
                    // Função que execulta apenas quando existir um histórico de dados
                    valuesHistory.length > 0 && (
                        <aside className={styles.historic}>
                            <h2>
                                Histórico de Rolagem
                            </h2>

                            <p>Último valor do dado: <span>{dice}</span></p>

                            <table className={styles.table}>
                                <tr className={styles.headRow}>
                                    <th>Ordem</th>
                                    <th>Tipo</th>
                                    <th>Valor</th>
                                </tr>
                                {   
                                    // Listar todos os dados no formato de tabela
                                    valuesHistory.map(
                                        (value, index) => (
                                            <tr className={styles.row} key={index}>
                                                <td>{index + 1}</td>
                                                <td>{value.type}</td>
                                                <td>{value.result}</td>
                                            </tr>

                                        )
                                    )
                                }
                            </table>
                        </aside>
                    )
                }
                
            </div>
            
        </main>
    )
}

export default D6