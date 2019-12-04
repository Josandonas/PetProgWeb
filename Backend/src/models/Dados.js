const mongoose = require('mongoose');

const DadosSchema = new mongoose.Schema({
    nome: String,
    telefone: Number,
    endreco: String,
})

module.exports = mongoose.model('User', UserSchema);