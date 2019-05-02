import React, {Component} from 'react';
import axios from 'axios';
import Character from './components/Character/Character';
import AddCharacter from './components/AddCharacter/AddCharacter';
import './App.css';

class App extends Component {
 constructor(props){
     super(props);

     this.state = {
         char: []
   };
 }
 componentDidMount = () => {
     //.get('/api/characters') endpoint and set the characters state to new data (ie res.data)
     axios.get('/api/characters').then(res => {this.setState({char: res.data})}).catch(console.log)
 }
 updateChar = (id, name, birth_year) => {
     //.put('/api/characters/:id') endpoint and set the characters state to new data (ie res.data)
     axios.put(`/api/characters/${id}`, {name, birth_year}).then(res => {this.setState({char: res.data})}).catch(console.log)
 }
 deleteChar = (id) => {
     //.delete('/api/characters/:id') endpoint and set the characters state to new data (ie res.data)
     axios.delete(`/api/characters/${id}`).then(res => {this.setState({char: res.data})}).catch(console.log)
 }
 newChar = (name, birth_year) => {
     //.post('/api/characters') endpoint and set the characters state to new data (ie res.data)
     axios.post('/api/characters',{name, birth_year}).then(res => {this.setState({char: res.data})}).catch(console.log)
 }
 render(){
     const {char} = this.state;

     //going over this.state.char: then create a char component for that element
     //storing the elements name, birth, update, and delete
     let charList = char.map(char => {
         let id = char.url.split('/')[5];
         return(
             <Character
             id={id}
             key={id}
             name={char.name}
             birth={char.birth_year}
             updateChar={this.updateChar}
             deleteChar={this.deleteChar}/>
         );
     });
     return(
       <div className="App">
           <div className="App-body">
               <div className="addContainer">

               {/*invoking AddCharacter component, passing newChar down*/}
               <AddCharacter newChar={this.newChar}/>
               </div>
               <h3>Character List</h3>
               {/*display char list*/}
               <div className="container-card">{charList}</div>
           </div>
       </div>
   )
 }
}

export default App;