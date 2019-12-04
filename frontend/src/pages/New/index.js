import React, {useState, useMemo} from 'react';
import api from '../../services/api'
import './styles1.css';

export default function New({history}){
    const [imagem, setImagem]= useState('');
    const [lugar, setLugar]= useState('');
    const [servicos,setServicos]= useState('');
    const [valor,setValor]= useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tech, setTechs] = useState('');

    async function handleSubimit(event){
        event.preventDefault();
        const data= new FormData();
        const user_id = localStorage.getItem('user');
        data.append('imagem', imagem);
        data.append('lugar', lugar);
        data.append('telefone', telefone);
        data.append('endereco', endereco);
        data.append('servicos', servicos);
        data.append('valor',valor);
        data.append('tech', tech);
        await api.post('/spots', data, {
            headers:{user_id}
        })
        history.push('/dashboard');
    }
    return(
        <form onSubmit={handleSubimit} >
            <label htmlFor="imagem" >Imagem  </label>
            <input id="imagem"
                placeholder="Digite o nome da petshop"
                value={imagem}
                onChange={event => setImagem(event.target.value)}
                >
            </input>
            <label htmlFor="Lugar">Nome do Petshop *</label>
            <input
                id="lugar"
                placeholder="Digite o nome da petshop"
                value={lugar}
                onChange={event => setLugar(event.target.value)}
                />
            <label htmlFor="telefone">Numero de Contato</label>
            <input
                id="telefone"
                placeholder="5567999999999"
                value={telefone}
                onChange={event => setTelefone(event.target.value)}
            />  
            <label htmlFor="endereco">Endereço</label>
            <input
                id="endereco"
                placeholder="Rua Frajola N43"
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
            />                                
            <label htmlFor="servicos">Serviços *<span>(separados por vírgula)</span> </label>
                <input
                    id="servicos"
                    placeholder="Digite os servicos oferecidos"
                    value={servicos}
                    onChange={event => setServicos(event.target.value)}
                />
            <label htmlFor="techs">Cidade *<span>(Corumbá ou Ladário)</span> </label>
            <input
                id="techs"
                placeholder="Digite a cidade"
                value={tech}
                onChange={event => setTechs(event.target.value)}
            />                
            <label htmlFor="valor">Valor pelo serviço *<span>(em branco para Tratar atráves do contato)</span> </label>
                <input
                    id="valor"
                    placeholder="valor cobrado por dia"
                    value={valor}
                    onChange={event => setValor(event.target.value)}
                />
                <button type="submit" className="btn">Cadastrar</button>
            </form>

    )
}

// No cadastro, o prestador de serviço deve informar o nome do estabelecimento,
// fotos do estabelecimento, email, cnpj, telefone e endereço