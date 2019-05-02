const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); //express invoked

//middleware
app.use(cors());
app.use(bodyParser.json());

const cc = require("./controller"); //import characters_controller

//GET endpoint
app.get('/api/characters', cc.getChar);
//POST endpoint
app.post('/api/characters', cc.postChar);
//PUT endpoint
app.put('/api/characters/:id', cc.updateChar);
//DELETE endpoint
app.delete('/api/characters/:id',cc.deleteChar)

const port = process.env.PORT || 3001; //local host port
app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})