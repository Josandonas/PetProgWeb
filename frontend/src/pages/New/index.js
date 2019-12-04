import React, {useState, useMemo} from 'react';
import api from '../../services/api'
import camera from '../../assets/camera.svg';
import './styles1.css';

export default function New({history}){
    const [imagem, setImagem]= useState(null);
    const [lugar, setLugar]= useState('');
    const [servicos,setServicos]= useState('');
    const [valor,setValor]= useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
   
    const preview = useMemo(
        () => {
            return imagem ? URL.createObjectURL(imagem): null;
        },
        [imagem]
    )

    async function handleSubimit(event){
        event.preventDefault();
        const data= new FormData();
        const user_id = localStorage.getItem('user');
        data.append('imagem', imagem);
        data.append('lugar', lugar);
        data.append('servicos', servicos);
        data.append('valor',valor);
        data.append('telefone', telefone);
        data.append('endereco', endereco);
        await api.post('/spots', data, {
            headers:{user_id}
        })
        history.push('/dashboard');
    }


    return(
        <form onSubmit={handleSubimit}>
            <label id="imagem" style={{backgroundImage: `url(${preview})`}} className={imagem ? 'has-imagem' : ''}>
                <input type="file" onChange={event => setImagem(event.target.files[0])} />
                <input type="file"/>
                <img src={camera} alt="Selecione imagem"/>
            </label>
            <label htmlFor="Lugar">Nome do Petshop *</label>
            <input
                id="lugar"
                placeholder="Digite o nome da petshop"
                value={lugar}
                onChange={event => setLugar(event.target.value)}
                />
            <label htmlFor="valor">Numero de Contato</label>
            <input
                id="telefone"
                placeholder="+5567999999999"
                value={telefone}
                onChange={event => setTelefone(event.target.value)}
            />  
            <label htmlFor="valor">Endereco</label>
            <input
                id="endereco"
                placeholder="Rua Frajola N43"
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
            />                                
            <label htmlFor="servicos">Servicos *<span>(separados por vírgula)</span> </label>
                <input
                    id="servicos"
                    placeholder="Digite os servicos oferecidos"
                    value={servicos}
                    onChange={event => setServicos(event.target.value)}
                />
            <label htmlFor="valor">Valor pelo servico *<span>(em branco para Tratar atráves do contato)</span> </label>
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