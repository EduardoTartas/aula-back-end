// importando express
import express from "express";


//instanciando express
const app = express();
export default app;

app.use(express.json());

// array de grupos para retorno
const grupos = [
    {id: 0, "todos": "Todos"},
    {id: 1, "admin": "Administradores"}, 
    {id: 2, "gerentes":"Gerentes"},
    {id: 3, "usuarios": "Usuários limitados"}
]
// array de unidades para retorno
const unidades = [
    {id: 0, "Porto Velho": "Porto Velho"},
    {id: 1, "Vilhena": "Vilhena"},
    {id: 2, "Cacoal":"Cacoal"},
    {id: 3, "Guajará": "Guajará"}
]

// array de usuarios para retorno
const usuarios = [
    {id: 0, "jose": "José da Silva"},
    {id: 1, "vicentesilva": "Vicente da Silva"},
    {id: 2, "noesilva":"Noé Silva"},
    {id: 3, "thomesilva": "Thomé Silva"}
]

function buscarID(id,array) {
    return array.findIndex(array => array.id === id);
}   

// Rota vazia - raiz
app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao auth');
})

// Rotas grupos

app.get('/grupos', (req, res) => {
    res.status(200).json(grupos);
});
//
app.get('/grupos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,array);

    if (index === -1) {
        return res.status(404).send(`Grupo com id ${id} não encontrado`);
    }

    res.status(200).json(grupos[index]);
    
}); 
//
app.post('/grupos', (req, res) => {
    grupos.push(req.body);
    res.status(201).send(`Grupo "${req.body.nome}" adicionado com sucesso `);
});
//
app.put('/grupos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,grupos);

    if (index === -1) {
        return res.status(404).send(`Grupo com id ${id} não encontrado`);
    }

    grupos[index].nome = req.body.nome;
    res.status(200).send(`Grupo com id ${id} atualizado com sucesso`);
});
//
app.delete('/grupos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,grupos);

    if (index === -1) {
        return res.status(404).send(`Grupo com id ${id} não encontrado`);
    }

    grupos.splice(index, 1);
    res.status(200).send(`Grupo com id ${id} deletado com sucesso`);
});

// Rotas unidades

app.get('/unidades', (req, res) => {
    res.status(200).json(unidades);
});
//
app.get('/unidades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,unidades);

    if (index === -1) {
        return res.status(404).send(`Grupo com id ${id} não encontrado`);
    }

    res.status(200).json(grupos[index]);
    
}); 
//
app.post('/unidades', (req, res) => {
    unidades.push(req.body);
    res.status(201).send(`Unidade "${req.body.nome}" adicionado com sucesso `);
});
//
app.put('/unidades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,unidades);

    if (index === -1) {
        return res.status(404).send(`Unidade com id ${id} não encontrado`);
    }

    unidades[index].nome = req.body.nome;
    res.status(200).send(`Unidade com id ${id} atualizado com sucesso`);
});
//
app.delete('/unidades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,unidades);

    if (index === -1) {
        return res.status(404).send(`Unidade com id ${id} não encontrado`);
    }

    unidades.splice(index, 1);
    res.status(200).send(`Unidade com id ${id} deletado com sucesso`);
});

// Rota usuarios


app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});
//
app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,usuarios);

    if (index === -1) {
        return res.status(404).send(`Grupo com id ${id} não encontrado`);
    }

    res.status(200).json(grupos[index]);
    
}); 
//
app.post('/usuarios', (req, res) => {
    usuarios.push(req.body);
    res.status(201).send(`Usuário "${req.body.nome}" adicionado com sucesso `);
});
//
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,usuarios);

    if (index === -1) {
        return res.status(404).send(`Usuário com id ${id} não encontrado`);
    }

    usuarios[index].nome = req.body.nome;
    res.status(200).send(`Usuário com id ${id} atualizado com sucesso`);
});
//
app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarID(id,usuarios);

    if (index === -1) {
        return res.status(404).send(`Usuário com id ${id} não encontrado`);
    }

    usuarios.splice(index, 1);
    res.status(200).send(`Usuário com id ${id} deletado com sucesso`);
});





