export default  function User(props) {

	let oneUserByIdUser = props.getOneUserByIdUser;
	let {id, name, username, email} = props.item;

	return(<div>
		ID: {id}<br></br>
		Name: {name}<br></br>
		User name: {username} <br></br>
		Email: {email}
		<div>
			<button onClick={() => oneUserByIdUser(id)}> Chose</button>
		</div>
		<hr></hr>
	</div>)
}