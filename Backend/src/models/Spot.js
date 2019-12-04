const mongoose= require('mongoose');

const SpotSchema = new mongoose.Schema({
    imagem: String,
    lugar: String,
    valor: Number,
    telefone:Number,
    endereco:String,
    servicos:[String],
    tech:[String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
  toJSON:{
    virtuals: true,
  },
});

module.exports = mongoose.model('Spot', SpotSchema);
