// Importação do Banco de Dados sqlite3

const sqlite3 = require('sqlite3').verbose(); // Importação da dependencia
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE); //Abrir o Banco de dados

// Express Instalação

const express = require('express');
const cors  = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3003

// Registro de Ficha

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { classe } =  req.body;
    const { breed } = req.body;
    const { age } = req.body;
    const { height } = req.body;
    const { weight } = req.body;
    const { eye } = req.body;
    const { skin } = req.body;
    const { hair } = req.body;
    const { parents1 } = req.body;
    const { parents2 } = req.body;
    const { line } = req.body;
    const { aparencia } = req.body;
    const { history } = req.body;
    const { personality } = req.body;
    const { ideais } = req.body;
    const { vinculos } = req.body;
    const { weakness } = req.body;
    const { others } = req.body;
    const { chars } = req.body;
    const { aliados } = req.body;
    const { org } = req.body;
    
    let SQL = `INSERT INTO PERSONAGEM (NOME, CLASSE, RACA, IDADE, ALTURA, PESO, COR_OLHOS, COR_PELE, COR_CABELO, ANTECEDENTE1, ANTECEDENTE2, ALINHAMENTO, APARENCIA_PERSONAGEM, HISTORIA_PERSONAGEM, TRACOS_PERSONALIDADE, IDEAIS, VINCULOS, FRAQUEZAS, OUTRAS, CARACTERISTICAS_TALENTOS, ALIADOS, ORGANIZACOES) VALUES ('${nome}', '${classe}', '${breed}', ${age}, ${height}, ${weight}, '${eye}', '${skin}', '${hair}', '${parents1}', '${parents2}', '${line}', '${aparencia}', '${history}', '${personality}', '${ideais}', '${vinculos}', '${weakness}', '${others}', '${chars}', '${aliados}', '${org}')`

    db.exec(SQL)
})


// Rota para receber os dados

app.get("/view", (req, res) => {
    // Pegar todos os dados do banco
    db.all('SELECT * FROM PERSONAGEM;', (err, result) => {
        if (err) console.log(err.mesage);
        else res.send(result);
    });
})

// Rota para excluir

app.post("/delete", (req, res) => {
    const { id } = req.body;
    
    let SQL = `DELETE FROM PERSONAGEM WHERE ID_FICHA = '${id}'`;
    db.exec(SQL)
})

app.listen(port, () => console.log('Rodando servidor'));