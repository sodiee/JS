const express = require('express');
const app = express();

app.get('/temperature/:where', (request, response) => {
    response.send(`{"temperature":21}, {"where":${request.params.where}}`);
});

app.get('/humidity', (request, response) => {
    response.send('{"humidity":57}');
});

app.get('/hej', (request, response) => {
    response.send('Hej!!!');
});

app.get('/', (request, response) => {
    response.send('Velkommen til Kajs drivhus');
});

app.get('/hola', (request, response) => {
    response.send('Holaaaa');
});

app.get('/heiii', (request, response) => {
    response.send('Heiiii');
});

app.use((request, response) => {
    response.status(404).send('Kunne ikke finde den side');
});

app.listen(8080, () => console.log('Serveren kører på port 8080'));