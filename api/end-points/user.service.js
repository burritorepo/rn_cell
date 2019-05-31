import { Service } from '../core/api.service';

class UserService extends Service {
  createUser(body) {
    console.log('body', body)
    return this.request({
      url: `users`,
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  deleteUser(id) {
    return this.request({
      url: `users/${id}`,
      method: 'DELETE'
    })
  }

  getUser(id) {
    return this.request({
      url: `users/${id}`
    })
  }

  saveUser({id, body, headers}) {
    return this.request({
      url: `users/${id}`,
      method: 'PUT',
      body,
      headers
    })
  }

  getAllUser() {
    return this.request({
      url: `users`
    })
  }
}

export {
  UserService
}

