// export default function Form (props) {

//     let {id, name, username, email} = props.item;
    
//     let state = 


//         return (
    
//             <div>
                        
//                 <select value={this.state}>
                
//                  <option value="id" >{id}</option>
      
//                 </select>
//             </div>
//         )
    
    
// }

import React, {Component} from 'react';

class Form1 extends Component{

    constructor(props) {
        super(props);
        let {id, name, username, email} = props.item;
        this.state = {
          mycar: 'Volvo'
        };
      } 

render() {
    let ident=this.id
    return (

        <div>
             <select value={this.state.mycar}>
            <option value="ident" >{ident}</option>
  
            </select>
        </div>
    )
}

}
export default Form1;