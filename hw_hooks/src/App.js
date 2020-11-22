import React, {useState} from "react";
import './App.css';
import Login from './login';


const Dropdown =({items}) =>{
 
  const [dropdownIsOpen, setIsOpen]= useState(false);
  const[selectedOption, setOption]=useState('')
 
  const toggleDropdown =() =>{
    setIsOpen((prevVal)=> !prevVal);
  }

  let posts=[];

const selectValue=(val)=>{
// ///Скрывает список после выбора
 setIsOpen((prevVal)=> !prevVal);

 ///Выводить в консоль юзера по ид
  setOption(val);
 console.log('You chose number')
 const id = val;
 fetch('https://jsonplaceholder.typicode.com/posts/' + id)
     .then(response => response.json())
      .then(post => {
      
         posts=post
         console.log(posts)
     })
}


  return(
    <div>
      <div class="dropdown">
      <button onClick={toggleDropdown}>{selectedOption ||'Press me'}</button>
     
     {!!dropdownIsOpen&&(
      <div class="list">
  {items.map((el) =><h3 class="option"   key={el} onClick={()=> selectValue([el])} >{el}</h3>)}
      </div>)}
    </div>
    </div>
  )
}

export default class App extends React.Component {
  
render(){
  return (
    <div>
     <Dropdown items={[1, 2, 3, 4]} />
     <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
     </h4>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <Login/>
    </div>
  );}
}


