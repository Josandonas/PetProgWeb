const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const {servicos} = req.query;
        const spots = await Spot.find({ servico: servicos }, { tech: techs });
        return res.json(spots);
    },
    async store( req, res) {
        const {lugar, servicos, valor, telefone, endereco,imagem,tech} = req.body;
        const {user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: "user does not exists"})
        }

        const spot = await Spot.create({
            user: user_id,
            imagem,
            lugar,
            telefone,
            endereco,
            tech: tech.split(',').map(tech => tech.trim()),
            servicos: servicos.split(',').map(servicos => servicos.trim()),
            valor,
        })

        return res.json(spot);
    },
    async destroy(req,res){
      const spot_id = req.params.spot_id;
      const response = await Spot.findByIdAndDelete(spot_id);
      if(!response){
        return res.status(400).json({error:'Error!'})
      }
      return res.json(response);
    },
    
    async edit(req, res) {
        const response = await Spot.findOne(spot_id);
        if (!response) {
            return res.status(400).json({ error: 'Error!' })
        }
        return res.json(response);
    },
}
