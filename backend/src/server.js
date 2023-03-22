const express = require("express");
const app = express();

const config = require("./config/config");
const PORT = config.PORT;

const users = require("./routers/users.js");
app.use(users);

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`)
});



server.on('error', error => {
    console.log(`Se ha producido el siguiente error en el servidor: ${error}`)
});



