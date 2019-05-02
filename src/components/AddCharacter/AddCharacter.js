import React, {Component} from 'react';

class AddCharacter extends Component {
   constructor(props){
       super(props);

       //setting state
       this.state = {
           name: "",
           birth: ""
       }
   }
   //change the value of name state with input value (ie v)
   handleName = (v) => {
       this.setState({
           name: v
       });
   }
   //change the value of birth state with input value (ie v)
   handleBirth = (v) => {
       this.setState({
           birth: v
       });
   }
   handleConfirm = () => {
       //passing down newChar
       const {newChar} = this.props;
       const {name, birth} = this.state;

       //invoking newChar method, passing in new name and birth from state
       newChar(name, birth);

       //then set the states back to empty strings
       this.setState({
           name: "",
           birth: ""
       });
   }

   render() {
       const {name, birth} = this.state;
       return(
           <div className="main-add">
               <h3>Create Character</h3>

               {/*lets user input name onChange invoke handleName with the new value*/}
               <input className="addInput" placeholder="Name" value={name} onChange={e => this.handleName(e.target.value)}/>

               {/*lets user input birth onChange invoke handleBirth with the new value*/}
               <input className="addInput" placeholder="Birth Year" value={birth}
               onChange={e => this.handleBirth(e.target.value)}/>

               {/*when button is clicked (onClick) invoke handleConfirm*/}
               <button className="addButton" onClick={this.handleConfirm}>Create</button>
           </div>
       )
   }
}

export default AddCharacter