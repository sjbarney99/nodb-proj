const axios = require('axios')

let char = [];
let newId = 9999;

module.exports = {
   getChar: (req, res) => {
       if(!char.length) { //if character(ie char) doesn't have length
           axios.get('http://swapi.co/api/people/') //then GET characters from swapi and send res
           .then(list => {
               char = list.data.results;
               res.status(200).send(char)
           })
           .catch(err => res.status(500).send(err));
       } else { //else just send characters
           res.status(200).send(char);
       }
   },
   updateChar: (req, res) => {
       const id = req.params
       const {name, birth_year} = req.body; //characters object, find matching param

       char.forEach(person => {
           if(person.url.split('/')[5] == id){
               person.name = name;
               person.birth_year = birth_year;
           }
       })
       res.status(200).send(char) //send character
   },
   deleteChar: (res, req) => {
       const id = req.params

       let charIndex = char.findIndex(person => person.url.split('/')[5] == id); //find index of matching id
       char.splice(charIndex, 1) //using splice remove that id

       res.status(200).send(char); //send character
   },
   postChar: (req, res) => {
       const { name, birth_year } = req.body;

       //updating url string
       let url = `https://swapi.co/api/people/${newId}/`;

       char.push({ url, name, birth_year }); //pushing new object properties & values
       newId++

       res.status(200).send(char)
   }
}