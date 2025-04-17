
// /src/seeds/seedX/seedx.js


import faker from 'faker-br';
import DbConect from '../config/DbConnect.js';
import Grupo from '../models/Grupo.js';
import Rota from '../models/Rota.js';
import Unidade from '../models/Unidade.js';
import Usuario from '../models/Usuario.js';
import {
  gerarSenhaHash,
  getRandomInt,
  getRandomImageFromFolder,
  criarUnidade,
  criarRota,
  criarGrupo,
  criarUsuario,
  gerarEmailFake
} from './seedGenerators.js';

// Senha padrão
const senhaCriptografada = gerarSenhaHash();

// --- Seed de Unidades ---
await DbConect.conectar();

await Unidade.deleteMany();

const unidades_array = ['Matriz', 'Filial 1', 'Filial 2', 'Filial 3', 'Filial 4', 'Filial 5'];

const unidades = unidades_array.map((nome, i) => {
  return criarUnidade({
    nome,
    localidade: `${faker.address.city()} - ${faker.address.state()}`,
    ativo: faker.random.boolean()
  });
});

// Unidade fixa com acesso total
const unidadeAcessoTotal = criarUnidade({
  nome: 'Matriz',
  localidade: 'São Paulo - SP',
  ativo: true
});
unidades.push(unidadeAcessoTotal);

const unidadesInseridas = await Unidade.collection.insertMany(unidades);
console.log(unidadesInseridas.length + ' Unidades inseridas!');

// --- Seed de Rotas ---
await Rota.deleteMany();

const rotas_array = [
  'rotas',
  'rotas:id',
  'grupos',
  'grupos:id',
  'unidades',
  'unidades:id',
  'usuarios',
  'usuarios:id'
];

const rotas = rotas_array.map(rotaNome => {
  return criarRota({ rota: rotaNome });
});

const rotasInseridas = await Rota.collection.insertMany(rotas);
console.log(rotasInseridas.length + ' Rotas inseridas!');

// --- Seed de Grupos ---
await Grupo.deleteMany();

const grupos_array = ['Gerente', 'Supervisor', 'Operador', 'Vendedor', 'Padrão'];
const grupos = [];



// Grupo Administrador com acesso total a todas as unidades e rotas
const grupoAdm = criarGrupo({
  nome: 'Administrador',
  descricao: 'Grupo com acesso total a todas as unidades e rotas',
  ativo: true,
  // Para evitar problemas com _id undefined, considere que as inserções ainda não retornaram os _id
  // Aqui, assumimos que as referências serão preenchidas após as inserções ou você pode utilizar um método que gere os IDs previamente.
  unidades: unidades.map(u => u._id),
  permissoes: rotas.map(r => ({ _id: r._id, ...r }))
});
grupos.push(grupoAdm);

// Outros grupos
grupos_array.forEach(grupoNome => {
  const grupo = criarGrupo({
    nome: grupoNome,
    descricao: faker.lorem.sentence(),
    ativo: true,
    unidades: [unidades[getRandomInt(unidades.length)]._id],
    permissoes: rotas.map(r => ({ _id: r._id, ...r }))
  });
  grupos.push(grupo);
});

const gruposInseridos = await Grupo.collection.insertMany(grupos);
console.log(gruposInseridos.length + ' Grupos inseridos!');

// --- Seed de Usuários ---
await Usuario.deleteMany();

const usuariosFixos = [];

// Obter todas as rotas (para permissões)
const RotasCompletas = await Rota.find({});

// Obter IDs das unidades e grupos
const IDUnidades = await Unidade.find({}, { _id: 1 });
const IDGrupos = await Grupo.find({}, { _id: 1 });

// Usuário com acesso total
const usuarioTotal = criarUsuario({
  nome: 'Dev oliveira',
  email: 'dev@gmail.com',
  senha: senhaCriptografada,
  ativo: true,
  link_foto: getRandomImageFromFolder(),
  permissoes: RotasCompletas,
  grupos: IDGrupos.map(g => g._id),
  unidades: IDUnidades.map(u => u._id)
});
usuariosFixos.push(usuarioTotal);

// Outro usuário para APP
const usuarioApp = criarUsuario({
  nome: 'APP de oliveira',
  email: 'app@gmail.com',
  senha: senhaCriptografada,
  ativo: true,
  link_foto: 'c862414f-6caa-468c-adf9-2290e6c7cea2.jpg',
  permissoes: RotasCompletas,
  grupos: IDGrupos.map(g => g._id),
  unidades: IDUnidades.map(u => u._id)
});
usuariosFixos.push(usuarioApp);

// Usuário com acesso limitado
const usuarioLimitado = criarUsuario({
  nome: 'Dev2 oliveira',
  email: 'dev2@gmail.com',
  senha: senhaCriptografada,
  ativo: true,
  link_foto: '9538345f-6f9d-4670-af78-dfeb25503eb0.jpg',
  permissoes: RotasCompletas,
  grupos: IDGrupos.map(g => g._id),
  unidades: [unidades[getRandomInt(unidades.length)]._id]
});
usuariosFixos.push(usuarioLimitado);

await Usuario.collection.insertMany(usuariosFixos);
console.log(usuariosFixos.length + ' Usuários fixos inseridos!');

const usuarios = [];

// Seed de usuários aleatórios
for (let i = 0; i < 200; i++) {
  const nome = faker.name.firstName();
  const nome_meio = faker.name.lastName();
  const sobrenome = faker.name.lastName();
  const email = gerarEmailFake();
  const usuario = criarUsuario({
    nome: `${nome} ${nome_meio} ${sobrenome}`,
    email,
    senha: senhaCriptografada,
    ativo: faker.random.boolean(),
    link_foto: getRandomImageFromFolder(),
    permissoes: rotas.map(r => ({ _id: r._id, ...r })),
    grupos: [grupos[getRandomInt(grupos.length)]._id],
    unidades: [unidades[getRandomInt(unidades.length)]._id]
  });
  usuarios.push(usuario);
}

const usuariosInseridos = await Usuario.collection.insertMany(usuarios);
console.log(usuariosInseridos.length + ' Usuários inseridos!');

// Desconectar do banco
await DbConect.desconectar();
process.exit(0);
