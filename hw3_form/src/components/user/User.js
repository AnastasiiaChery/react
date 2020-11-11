export default function User (props) {

    let{id, email, name} = props.item;

	return(<div>
		ID: {id}<br></br>
		Name: {name}<br></br>
		Email: {email} 
        
	</div>)  
    
}