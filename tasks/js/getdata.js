export class Loader {
  constructor(sLink) {
    this._serverLink = sLink;
  }

  #makeRequest(link, requestHeaders) {
    if (!requestHeaders) return;
    return fetch(link, requestHeaders)
      .then((response) => {
        if (!response || !response.ok) return;
        return response.json();
      })
      .catch((err) => {
        console.log('Request response error: ' + err.message);
      });
  }

  create(blockName, data) {
    const link = this._serverLink + '/' + blockName;
    const requestHeaders = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(data),
    };
    return this.#makeRequest(link, requestHeaders);
  }

  read(blockName, id) {
    const link = this._serverLink + '/' + blockName + (id ? '/' + id : '');
    const requestHeaders = {
      method: 'GET',
    };
    return this.#makeRequest(link, requestHeaders);
  }

  edit(blockName, id, data) {
    if (!id || !data) return;
    const link = this._serverLink + '/' + blockName + '/' + id;
    const requestHeaders = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(data),
    };
    return this.#makeRequest(link, requestHeaders);
  }

  remove(blockName, id) {
    if (!id) return;
    if (!blockName) return;
    const link = this._serverLink + '/' + blockName + '/' + id;
    const requestHeaders = {
      method: 'DELETE',
    };
    return this.#makeRequest(link, requestHeaders);
  }
}
