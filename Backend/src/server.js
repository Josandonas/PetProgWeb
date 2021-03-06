const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require ('socket.io');
const http = require('http');

const routes= require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://progweb:1234@cluster0-lhqd6.azure.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connectUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectUsers[user_id] = socket.id;
});

app.use((req,res,next)=>{
    req.io=io;
    req.connectUsers=connectUsers;
    return next();
})
// GET, POST, PUT, DELETE

// req.query = ACessr query params (para filtros)
// req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da requisição para (criaçãop, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
