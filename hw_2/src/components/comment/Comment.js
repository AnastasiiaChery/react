export default  function Comment(props) {

	let {id, name, body} = props.item;

	return(<div>
		ID: {id}<br></br>
		Name: {name}<br></br>
		Body: {body} 
		
		<hr></hr>
	</div>)
}