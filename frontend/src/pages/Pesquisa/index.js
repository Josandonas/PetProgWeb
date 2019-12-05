import React, { useState} from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles2.css'
export default function Pesquisa({ history }) {
    const [tech, setTech] = useState('');
    async function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('spot', tech);
        history.push('/resultado');
    }
    return (
        <>
        <p>Digite  Suas Modificações.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tech">Cidade *</label>
                <input
                    type="techs"
                    id="techs"
                    placeholder="Digite a cidade"
                    value={tech}
                    onChange={event => setTech(event.target.value)}
                />
                <button className="btn" type="submit">Salvar</button>
                <Link to="/dashboard">
                    <button className="busca">Voltar</button>
                </Link>
            </form>
        </>
    )
}