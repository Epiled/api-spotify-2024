const jsonServer = require("json-server");
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('./db/playlist.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Adiciona suporte a CORS
server.use(middlewares);
server.use(router);

module.exports = server;