export class Service {
    
    _url = 'https://jsonplaceholder.typicode.com'

     allUsers(){
        return  fetch(`${this._url}/users`).then(value => value.json());
    }

    getUserById(id) {
        return fetch(`${this._url}/users?id=${id}`).then(value => value.json());
    };
}