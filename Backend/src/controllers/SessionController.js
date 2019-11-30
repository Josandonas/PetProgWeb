const User = require('../models/User')


module.exports = {
    async store(req, res){
        const {email} = req.body;

        let user = await User.findOne({email});//consulta banco
        //se o usuario nao existe
        if(!user){
            // entao cria usuario sobrescrevendo a var user
            user = await User.create({email}); 
    
        }
        // finalmente retorna user
        return res.json(user);
    }
}


//index = listagem de sessoes
//show = listar uma sessao
//store = criar uma sessao
//update = atualizar uma sessao
//destroy = apagar uma sessao