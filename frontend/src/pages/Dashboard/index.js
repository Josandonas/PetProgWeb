import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import socketio from 'socket.io-client'
import api from '../../services/api'

import './styles.css'

export default function Dashboard({history}) {
    const [spots, setSpots] = useState([])
    const [requests, setRequests] = useState([])

    const user_id = localStorage.getItem('user')
    const socket = useMemo(() => socketio('http://localhost:3333', {
        query: { user_id }
    }), [user_id])

    useEffect(() => {
        socket.on('booking_request', (data) => {
            setRequests([...requests, data])
        })
    },[requests, socket])

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: {
                    user_id
                }
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])

    async function handleAccept(id) {
        await api.post(`/bookings/${id}/approvals`)
        setRequests(requests.filter(request => request._id !== id))
    }

    async function handleReject(id) {
        await api.post(`/bookings/${id}/rejections`)
        setRequests(requests.filter(request => request._id !== id))
    }
    async function adelete(v){
      const response = await api.delete(`/spots/${v}`, {params:{spot_id:v}});
      console.log('Excluido com sucesso',response);
      history.push('/dashboard');
      refreshPage();
    }
    async function edita(v) {
        const response = await api.editar(`/spots/${v}`, { params: { spot_id: v } });
        console.log('Vamos editar', response);
        history.push('/edicao');
        refreshPage();
    }
    async function refreshPage() {
        window.location.reload();
    }

    return (
        <>
            <ul className="notifications">
                {
                    requests.map(request => (
                        <li key={request._id}>
                            <p>
                                <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.lugar}</strong> para a data: <strong>{request.date}</strong>
                            </p>
                            <button className="accept" onClick={() => handleAccept(request._id)}>ACEITAR</button>
                            <button className="reject" onClick={() => handleReject(request._id)}>REJEITAR</button>

                        </li>
                    ))
                }
            </ul>

            <ul className="spot-list">
                { spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{
                            backgroundImage: `url(${spot.imagem})`
                        }}/>
                        <strong>{spot.lugar}</strong>
                        <span>{spot.endereco}</span>
                        <span>{spot.telefone}</span>
                        <span>{spot.valor ? `R$${spot.valor}/dia` : 'Tratar atráves do contato'}</span>
                        <button className="btn" onClick={() => adelete(spot._id)}>Apagar</button> <button className="btn" onClick={() => edita(spot._id)}>Editar</button>
                    </li>
                ))
                }
            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar novo Petshop</button>
            </Link>

            <Link to="/pesquisa">
                <button className="busca">Busca de Petshop na Cidade</button>
            </Link>
        </>
    )
}
