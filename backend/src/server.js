const express = require("express");
const app = express();

const config = require("./config/config");
const PORT = config.PORT;

require('./dataBase/connections')

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.use((error, req, res, next) => {
    console.log('error', error);
    return res.status(500).send('Algo se rompio!');
}); 


const users = require("./routers/users.js");
app.use(users);



const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`)
});

server.on('error', error => {
    console.log(`Se ha producido el siguiente error en el servidor: ${error}`)
});



