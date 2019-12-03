const mongoose = require('mongoose');

const DadosSchema = new mongoose.Schema({
    nome: String,
    telefone: Number,
    endereco: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('User', UserSchema);