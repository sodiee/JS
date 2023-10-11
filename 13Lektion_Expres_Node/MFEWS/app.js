const express = require('express')
const figlet = require('figlet')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))
console.log("hader mikkel")
app.use((request, response, next) => {
    console.log("SÅ FOR F..... NU SKAL VI TIL DEN IGEN")
    next();
})

app.get('/:name', (request, response) => {
    figlet.text(request.params.name, (error, data) => {
        if (error) throw error
        response.write(data)
        response.send()
    })
})

//hej

app.listen(8080, () => {
    console.log("Vi er helt oppe at køre")
})