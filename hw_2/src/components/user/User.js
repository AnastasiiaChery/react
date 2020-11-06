export default  function User(props) {

	let {id, name, username, email} = props.item;

	return(<div>
		ID: {id}<br></br>
		Name: {name}<br></br>
		User name: {username} <br></br>
		Email: {email}
		<div>
			<button > Chose</button>

			

		</div>
		<hr></hr>
	</div>)
}