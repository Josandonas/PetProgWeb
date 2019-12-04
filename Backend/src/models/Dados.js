const mongoose = require('mongoose');

const DadosSchema = new mongoose.Schema({
    nome: String,
    telefone: Number,
    endereco: String,
})

module.exports = mongoose.model('User', UserSchema);