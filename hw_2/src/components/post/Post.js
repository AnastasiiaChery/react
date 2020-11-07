export default  function Post(props) {
   
	let {id, title, body} = props.item;
	
	let idPost = props.getComByIdPost;

	return(<div>
		ID: {id}<br></br>
		Title: {title}<br></br>
		Body: {body} 
		<div>
			<button onClick={() => idPost(id)}> Chose</button>
			

		</div>
		<hr></hr>
	</div>)
}