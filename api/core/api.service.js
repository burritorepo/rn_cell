
import {
  env
} from '../../enviroment';
class Service {
  async request({url, method = 'GET', body = {}, headers = {}}) {
    const config = {
      method,
      body,
      headers
    };

    if (method === 'GET') {
      delete config.body
    }

    const response = await fetch(`${env.url}/${url}`, config)
    .then(response => response.json());

    return response
  }
}

export {
  Service
}