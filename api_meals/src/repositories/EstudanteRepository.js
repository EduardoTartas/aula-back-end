// src/repositories/EstudanteRepository.js
import EstudanteModel from '../models/Estudante.js';
import { CustomError, messages } from '../utils/helpers/index.js';
import EstudanteFilterBuilder from './filters/EstudanteFilterBuilder.js';

class EstudanteRepository {
    constructor({ model = EstudanteModel } = {}) {
        this.model = model;
    }

    // Método para listar estudantes,
    // podendo buscar por ID ou aplicar filtros de matrícula, nome e turma.
    async listar(req) {
        const { id } = req.params || {};

        // Se vier um ID na rota, retorna apenas o Estudante correspondente
        if (id) {
            const estudante = await this.model.findById(id).populate('turma');
            if (!estudante) {
                throw new CustomError({
                    statusCode: 404,
                    errorType: 'resourceNotFound',
                    field: 'Estudante',
                    customMessage: messages.error.resourceNotFound('Estudante'),
                });
            }
            return estudante;
        }

        // Se não houver ID, aplicamos filtros
        const { matricula, nome, turma, page = 1 } = req.query;
        const limite = Math.min(parseInt(req.query.limite, 10) || 10, 100);

        const filterBuilder = new EstudanteFilterBuilder()
            .comMatricula(matricula || '')
            .comNome(nome || '');

        // Se for assíncrono, precisamos aguardar
        await filterBuilder.comTurma(turma || '');

        const filtros = filterBuilder.build();

        const options = {
            page: parseInt(page, 10),
            limit: limite,
            populate: 'turma',
            sort: { nome: 1 }, // exemplo de ordenação por nome
        };

        const resultado = await this.model.paginate(filtros, options);
        return resultado;
    }

    // Método para criar um novo Estudante
    async criar(dadosEstudante) {
        const estudante = new this.model(dadosEstudante);
        return await estudante.save();
    }

    // Método para atualizar um Estudante existente
    async atualizar(id, dadosAtualizados) {
        const estudante = await this.model
            .findByIdAndUpdate(id, dadosAtualizados, { new: true })
            .populate('turma');

        if (!estudante) {
            throw new CustomError({
                statusCode: 404,
                errorType: 'resourceNotFound',
                field: 'Estudante',
                customMessage: messages.error.resourceNotFound('Estudante'),
            });
        }
        return estudante;
    }

    // Método para deletar um Estudante
    async deletar(id) {
        return await this.model.findByIdAndDelete(id);
    }

    // Método para buscar Estudante por ID
    async buscarPorId(id) {
        const estudante = await this.model.findById(id).populate('turma');
        if (!estudante) {
            throw new CustomError({
                statusCode: 404,
                errorType: 'resourceNotFound',
                field: 'Estudante',
                customMessage: messages.error.resourceNotFound('Estudante'),
            });
        }
        return estudante;
    }
}

export default EstudanteRepository;
