const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//

// //Rotas
const Routes = require('./routes/Rotas.js');
app.use(Routes);

//Testes de conexão com o banco de dados.
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API!' });
}
);

//Porta
const PORT = process.env.PORT || 8080;

//Server
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});
