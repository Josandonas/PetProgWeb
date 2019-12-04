const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const {tech} = req.query;
        const spots = await Spot.find({techs: tech});

        return res.json(spots);
    },


    async store( req, res) {
        const { filename} = req.file;
        const {company, techs, endereco, price} = req.body;
        const {user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: "user does not exists"})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            endereco,
            price
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
}