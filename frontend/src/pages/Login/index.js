import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState('');
    async function handleSubmit(event){
      event.preventDefault();
      const response = await api.post('/sessions',{email});
      const { _id } = response.data;
  
      console.log(_id);
  
      localStorage.setItem('user', _id);
      history.push('/dashboard');
    }

    return (
        <>
        <p>
            Ofereça serviços de <strong>banho</strong> e <strong>tosa</strong> para os pets de estimação.
        </p>
        <form onSubmit= {handleSubmit}>
            <label htmlFor="email">E-mail *</label>
            <input
                type="email"
                id="email"
                placeholder="seu melhor email"
                value={email}
                onChange= {event => setEmail(event.target.value)} 
            />
            <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    )
}