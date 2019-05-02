import React, {Component} from 'react';

export default class Character extends Component {
   constructor(props) {
       super(props);

       //setting state
       this.state = {
           name: props.name,
           birth: props.birth,
           //creates a condition render
           inputSwitch: false
       }
     }
       //renders depending on inputSwtich is truthy or falsy
       handleSwitch = () => {
           this.setState({inputSwitch: !this.state.inputSwitch})
       }
       //changes the value of name state to v (ie value)
       handleName = (v) => {
           this.setState({name: v})
       }
       //changes the value of birth state to v (ie value)
       handleBirth = (v) => {
           this.setState({birth: v})
       }
       handleConfrim = () => {
           //passing down updateChar and id
           const {updateChar, id} = this.props;
           const {name, birth} = this.state;

           //invoke updateChar passing in id, name and birth
           updateChar(id, name, birth);
           //switching inputSwitch to the oppsite of original value
           this.setState({inputSwitch: !this.state.inputSwitch});
       }

       render(){
           const {deleteChar, id} = this.props;
           const {inputSwitch, name, birth} = this.state;

           return (
               <div className="main_card">
                   {!inputSwitch ? (
                       <div>
                           <h4>{this.props.name}</h4>
                           <p>{this.props.birth}</p>

                           {/*using onClick invoke handleSwitch*/}
                           <button className="cardButton" onClick={this.handleSwitch}>Edit</button>

                           {/*invoking deleteChar passing in id param*/}
                           <button className="card-button" onClick={() => deleteChar(id)}>Delete</button>
                       </div>
                   ) : (
                       <div>
                           {/*else inputSwitch is true present this*/}

                           {/*lets user input name onChange invoke handleName with the new value*/}
                           <input className="cardInput" value={name}onChange={e => this.handleName(e.target.value)}/>

                           {/*lets user input birth onChange invoke handleBirth with the new value*/}
                           <input className="cardInput" value={birth} onChange={e => this.handleBirth(e.target.value)}/>

                           {/*onClick invoke handleSwitch*/}
                           <button className="cardsButton" onClick={this.handleSwitch}>Cancel</button>

                           {/*onClick invoke handleSwitch*/}
                           <button className="cardsButton" onClick={this.handleConfirm}>Confirm</button>
                       </div>
                   )}
               </div>
           )
       }
   }