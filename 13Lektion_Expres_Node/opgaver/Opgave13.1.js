const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.static('filer'));

app.get('/', async (req, res) => {
    try {
        const filnavne = await fs.readdir(__dirname + '/filer');
        const html = filnavne.map(filnavn => `<a href="${filnavn}">${filnavn}</a><br>\n`).join('');
        res.status(200).send(html);
    } catch (err) {
        res.status(500).send(err.name + ": " + err.message);
    }
});

app.get('*', async (req, res) => {
    try {
        const sti = __dirname + '/filer' + req.url;
        const filData = await fs.readFile(sti);
        res.status(200).send(filData);
    } catch (err) {
        res.status(404).send(err.name + ": " + err.message);
    }
});

app.listen(8080, () => {
    console.log(`Lytter på port 8080 ...`);
});