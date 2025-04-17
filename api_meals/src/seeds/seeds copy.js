import bcrypt from 'bcryptjs';
import { randomBytes as _randomBytes } from 'crypto';
import faker from 'faker-br';
import DbConect from '../config/DbConnect.js';
import Grupo from '../models/Grupo.js';
import Rota from '../models/Rota.js';
import Unidade from '../models/Unidade.js';
import Usuario from '../models/Usuario.js';
import UsuarioCreateDTO from '../dtos/usuario/UsuarioCreateDTO.js'; // Importa o DTO
import fs from 'fs';
import path from 'path';
import globalFakeMapping from './globalFakeMapping.js';

import cursoSeed from './meals/cursoSeed.js';
import turmaSeed from './meals/turmaSeed.js';
import estudanteSeed from './meals/estudanteSeed.js';
import estagioSeed from './meals/estagioSeed.js';
import projetoSeed from './meals/projetoSeed.js';

// Função para obter um arquivo aleatório da pasta 'rostos'
async function getRandomImageFromFolder() {
  const directoryPath = './src/seeds/rostos'; // Caminho para a pasta 'rostos'
  const files = fs.readdirSync(directoryPath);
  const randomIndex = getRandomInt(files.length);
  return path.join(directoryPath, files[randomIndex]);
}

// Conectando ao banco de dados
await DbConect.conectar();

// Como vamos deixar o Model ou algum hook fazer o hash, usamos a senha em seu formato puro
const senhaPura = 'ABab@123456';

// Função para gerar um número aleatório entre 0 e max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// -------------------- Seed de Unidades --------------------

// Remove todas as Unidades existentes
await Unidade.deleteMany();

// Array de nomes de unidades fixas
const unidades_array = ['Matriz', 'Filial 1', 'Filial 2', 'Filial 3', 'Filial 4', 'Filial 5'];

// Função para obter o nome da unidade (fixo)
function getUnidadesNome(i) {
  return unidades_array[i].toString();
}

// Array de unidades a serem inseridas
let unidades = [];

function seedUnidades(qtdunidades) {
  // Unidade fixa com acesso total
  const seedUnidadeFixaAcessoTotalTodasRotas = {
    nome: 'Matriz',
    localidade: 'São Paulo - SP',
    ativo: true,
  };

  for (let i = 0; i < qtdunidades; i++) {
    const unidade = {
      nome: getUnidadesNome(i),
      localidade: globalFakeMapping.localidade() + ' - ' + faker.address.state(),
      ativo: globalFakeMapping.ativo(),
    };
    unidades.push(unidade);
  }
  unidades.push(seedUnidadeFixaAcessoTotalTodasRotas);
  return unidades;
}

seedUnidades(unidades_array.length);
const unidadesInseridasResult = await Unidade.collection.insertMany(unidades);
console.log(Object.keys(unidadesInseridasResult.insertedIds).length + ' Unidades inseridas!');
// Atualiza o array "unidades" com os documentos inseridos (agora contendo _id)
unidades = await Unidade.find();

// -------------------- Seed de Rotas --------------------

// Remove todas as Rotas existentes
await Rota.deleteMany();

// Array de rotas a serem inseridas
let rotas = [];

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

function getRotaName(i) {
  return rotas_array[i].toString();
}

function seedRotas(qtdrotas) {
  for (let i = 0; i < qtdrotas; i++) {
    const rota = {
      rota: getRotaName(i),
      dominio: 'localhost', // Pode ser substituído por globalFakeMapping.dominio() se necessário
      ativo: true,
      buscar: true,
      enviar: true,
      substituir: true,
      modificar: true,
      excluir: true,
    };
    rotas.push(rota);
  }
  return rotas;
}

seedRotas(rotas_array.length);
const rotasInseridasResult = await Rota.collection.insertMany(rotas);
console.log(Object.keys(rotasInseridasResult.insertedIds).length + ' Rotas inseridas!');
// Atualiza o array "rotas" com os documentos inseridos
rotas = await Rota.find();

// -------------------- Seed de Grupos --------------------

// Função para obter uma unidade aleatória (dos documentos inseridos)
function getUnidadeAleatoria() {
  return unidades[getRandomInt(unidades.length)];
}

// Array para armazenar grupos
let grupos = [];
// Função para obter um grupo aleatório (dos documentos inseridos)
function getGrupoAleatorio() {
  return grupos[getRandomInt(grupos.length)];
}

// Remove todos os Grupos existentes
await Grupo.deleteMany();

// Array de nomes de grupos fictícios
const grupos_array = ['Gerente', 'Supervisor', 'Operador', 'Vendedor', 'Padrão'];

function getGrupoName(i) {
  return grupos_array[i].toString();
}

function seedGrupos(qtdgrupos) {
  // Grupo fixo com acesso total a todas as unidades e rotas
  const seedGrupoFixoAcessoTotalTodasUnidades = {
    nome: 'Administrador',
    descricao: 'Grupo com acesso total a todas as unidades e rotas',
    ativo: true,
    // Converte os _id para string e garante que o _id convertido sobrescreva o original
    unidades: unidades.map(u => u._id.toString()),
    permissoes: rotas.map(r => ({ ...r.toObject(), _id: r._id.toString() }))
  };
  grupos.push(seedGrupoFixoAcessoTotalTodasUnidades);

  // Grupos adicionais
  for (let i = 0; i < qtdgrupos; i++) {
    const seedGrupo = {
      nome: getGrupoName(i),
      descricao: globalFakeMapping.descricao(),
      ativo: true,
      unidades: [getUnidadeAleatoria()._id.toString()],
      permissoes: rotas.map(r => ({ ...r.toObject(), _id: r._id.toString() }))
    };
    grupos.push(seedGrupo);
  }
  return grupos;
}

seedGrupos(grupos_array.length);
const gruposInseridosResult = await Grupo.collection.insertMany(grupos);
console.log(Object.keys(gruposInseridosResult.insertedIds).length + ' Grupos inseridos!');
// Atualiza o array "grupos" com os documentos inseridos
grupos = await Grupo.find();

// -------------------- Seed de Usuários --------------------

// Remove todos os Usuários existentes
await Usuario.deleteMany();
const usuariosFixos = [];

// Obter todas as Rotas completas com _id convertidos para string
let RotasCompletas = await Rota.find({});
RotasCompletas = RotasCompletas.map(r => ({ ...r.toObject(), _id: r._id.toString() }));

// Obter IDs das Unidades inseridas (como strings)
const IDUnidadesDocs = await Unidade.find({}, { _id: 1 });
const IDUnidades = IDUnidadesDocs.map(u => u._id.toString());


// Obter IDs dos Grupos inseridos (como strings)
const IDGruposDocs = await Grupo.find({}, { _id: 1 });
const IDGrupos = IDGruposDocs.map(g => g._id.toString());

// Usuário fixo com acesso total a todas as unidades
const usuarioFixoAcessoTotalTodasUnidades = {
  nome: 'Dev oliveira',
  email: 'dev@gmail.com',
  senha: senhaPura, // senha em formato puro
  ativo: true,
  link_foto: await getRandomImageFromFolder(),
  permissoes: RotasCompletas,
  grupos: IDGrupos,
  unidades: IDUnidades,
};
usuariosFixos.push(usuarioFixoAcessoTotalTodasUnidades);

// Usuário fixo para acesso no APP com acesso total
const usuarioAPPFixoAcessoTotalTodasUnidades = {
  nome: 'APP de oliveira',
  email: 'app@gmail.com',
  senha: senhaPura,
  ativo: true,
  link_foto: 'c862414f-6caa-468c-adf9-2290e6c7cea2.jpg',
  permissoes: RotasCompletas,
  grupos: IDGrupos,
  unidades: IDUnidades,
};
usuariosFixos.push(usuarioAPPFixoAcessoTotalTodasUnidades);

// Usuário fixo com acesso limitado a uma unidade
const usuarioFixoLimitadoAUmaUnidade = {
  nome: 'Dev2 oliveira',
  email: 'dev2@gmail.com',
  senha: senhaPura,
  ativo: true,
  link_foto: '9538345f-6f9d-4670-af78-dfeb25503eb0.jpg',
  permissoes: RotasCompletas,
  grupos: IDGrupos,
  unidades: [getUnidadeAleatoria()._id.toString()],
};
usuariosFixos.push(usuarioFixoLimitadoAUmaUnidade);

// Validação dos dados dos usuários fixos via DTO
const usuariosFixosDTO = await Promise.all(
  usuariosFixos.map(userData => UsuarioCreateDTO.create(userData))
);

console.log('Usuários fixos:', usuariosFixosDTO.senha);

await Usuario.collection.insertMany(usuariosFixosDTO);
console.log(usuariosFixosDTO.length + ' Usuários fixos inseridos!');

// Seed de usuários aleatórios
const usuarios = [];
const provedores = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];

async function seedUsuario(qtdusuarios) {
  for (let i = 0; i < qtdusuarios; i++) {
    const primeiroNome = globalFakeMapping.nome();
    const sobrenome = faker.name.lastName();
    const nomeCompleto = `${primeiroNome} ${sobrenome} ${faker.name.lastName()}`;
    // Utilizando faker.internet.email para garantir um email válido
    const email = faker.internet.email(primeiroNome, sobrenome).toLowerCase();

    const seedUsuarioObj = {
      nome: nomeCompleto,
      email: email,
      senha: senhaPura,
      ativo: globalFakeMapping.ativo(),
      link_foto: await getRandomImageFromFolder(),
      permissoes: rotas.map(r => ({ ...r.toObject(), _id: r._id.toString() })),
      grupos: [getGrupoAleatorio()._id.toString()],
      unidades: [getUnidadeAleatoria()._id.toString()],
    };
    usuarios.push(seedUsuarioObj);
  }
  return usuarios;
}

await seedUsuario(200);
const usuariosDTO = await Promise.all(
  usuarios.map(userData => UsuarioCreateDTO.create(userData))
);
await Usuario.collection.insertMany(usuariosDTO);
console.log(usuariosDTO.length + ' Usuários inseridos!');

// -------------------- Inserir dados para refeições --------------------
await cursoSeed();

await turmaSeed();
//await Turma.deleteMany({});

await estudanteSeed();
//await Estudante.deleteMany({});

await projetoSeed();
await estagioSeed();


// -------------------- Finalizando --------------------

await DbConect.desconectar();
process.exit(0);
