export default  function Post(props) {

	let {id, title, body} = props.item;

	return(<div>
		ID: {id}<br></br>
		Title: {title}<br></br>
		Body: {body} 
		<div>
			<button > Chose</button>

		</div>
		<hr></hr>
	</div>)
}