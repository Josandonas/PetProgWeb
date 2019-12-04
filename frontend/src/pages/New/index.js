import React, {useState, useMemo} from 'react';
import api from '../../services/api'
import camera from '../../assets/camera.svg';
import './styles1.css';

export default function New({history}){
    const [thumbnail, setThumbnail]= useState(null);
    const [company, setCompany]= useState('');
    const [endereco, setEndereco]= useState('');
    const [techs,setTechs]= useState('');
    const [price,setPrice]= useState('');
   
    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail): null;
        },
        [thumbnail]
    )

    async function handleSubimit(event){
        event.preventDefault();
        const data= new FormData();
        const user_id = localStorage.getItem('user');
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('endereco',endereco);
        data.append('techs', techs);
        data.append('price',price);
        await api.post('/spots', data, {
            headers:{user_id}
        })
        history.push('/dashboard');
    }


    return(
        <form onSubmit={handleSubimit}>
            <label id="thumbnail" style={{backgroundImage: `url(${preview})`}} className={thumbnail ? 'has-thumbnail' : ''}>
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <input type="file"/>
                <img src={camera} alt="Selecione imagem"/>
            </label>
            <label htmlFor="company">Pet Shop *</label>
            <input
                id="company"
                placeholder="Nome da sua Pet Shop"
                value={company}
                onChange={event => setCompany(event.target.value)}
                />
            <label htmlFor="techs">Cidade *</label>
                <input
                    id="techs"
                    placeholder="Corumbá ou Ladário"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />
            <label htmlFor="endereco">Endereço *</label>
                <input
                    id="endereco"
                    placeholder="Rua e número"
                    value={endereco}
                    onChange={event => setEndereco(event.target.value)}
                />
            <label htmlFor="price">Valor cobrado pelo serviço * </label>
                <input
                    id="price"
                    placeholder="valor de banho e tosa"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
                <button type="submit" className="btn">Cadastrar Pet Shop</button>
            </form>

    )
}

// No cadastro, o prestador de serviço deve informar o nome do estabelecimento,
// fotos do estabelecimento, email, cnpj, telefone e endereço