export class UserService {


	_url = 'https://jsonplaceholder.typicode.com';

	async getAllPosts() {
		return await fetch(`${this._url}/posts`).then(value => value.json());
	}

	getPostById(id) {
		return fetch(`${this._url}/posts/${id}`).then(value => value.json());
	}


}