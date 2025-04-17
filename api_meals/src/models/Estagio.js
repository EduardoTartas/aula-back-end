import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import Estudante from "./Estudante.js"; //Se não tiver o populate falha

class Estagio {
    constructor() {
        const schema = new mongoose.Schema({
            descricao: { type: String },
            estudante: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "estudantes",
                required: [true, "O estudante é obrigatório!"]
            },
            data_inicio: { type: Date, required: [true, "A data de início é obrigatória!"] },
            data_termino: { type: Date, required: [true, "A data de término é obrigatória!"] },
            contra_turnos: {
                type: {
                  segunda: { type: Boolean, required: true, default: false },
                  terca: { type: Boolean, required: true, default: false },
                  quarta: { type: Boolean, required: true, default: false },
                  quinta: { type: Boolean, required: true, default: false },
                  sexta: { type: Boolean, required: true, default: false },
                  sabado: { type: Boolean, required: true, default: false },
                  domingo: { type: Boolean, required: true, default: false },
                }, required: [true, "Os contra-turnos são obrigatórios!"],
                _id: false
              },
            status: {
                type: String,
                enum: {
                    values: ["ativo", "inativo", "cancelado", "suspenso"],
                    message: "O valor tem quer ser ativo, inativo, cancelado ou suspenso"
                }
            }
        }, {
            timestamps: true,      // Registra createdAt e updatedAt automaticamente
            versionKey: false
        });

        schema.plugin(mongoosePaginate);
        this.model = mongoose.model("estagios", schema);
    }
}

export default new Estagio().model;
