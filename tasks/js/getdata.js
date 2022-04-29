export class TestMe {
  tryMe() {
    return 1;
  }
}

export class Loader {
  constructor(sLink) {
    this._serverLink = sLink;
  }

  readAll(blockName) {
    return fetch(this._serverLink + '/' + blockName)
      .then((response) => {
        if (!response || !response.ok) return;
        return response.json();
      })
      .catch((err) => {
        console.error(
          'Loading or parsing error. ' + err.name + ': ' + err.message
        );
        return;
      });
  }

  create(blockName, data) {
    // post
    return fetch(this._serverLink + '/' + blockName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response || !response.ok) return;
        return response.json();
      })
      .catch((err) => {
        console.log('POST response');
      });
  }

  read(blockName, id) {
    // get
    return fetch(this._serverLink + '/' + blockName + (id ? '/' + id : ''))
      .then((response) => {
        if (!response || !response.ok) return;
        return response.json();
      })
      .catch((err) => {
        console.error(
          'Loading or parsing error. ' + err.name + ': ' + err.message
        );
        return;
      });
  }

  edit(blockName, id, data) {
    // put
    if (!id || !data) return;
    if (id === -1) {
      console.log('inserted');
      return;
    }
    return fetch(this._serverLink + '/' + blockName + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response || !response.ok) return;
        return response.json();
      })
      .catch((err) => {
        console.log('PUT response');
      });
    // return fetch(this._serverLink + '/' + blockName + '/' + id)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.error('Removing error on server' + err);
    //     return;
    //   });
    console.log('edited');
  }

  remove(blockName, id) {
    // delete
    if (!id) return false;
    if (!blockName) return false;
    return fetch(this._serverLink + '/' + blockName + '/' + id, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response || !response.ok) return false;
        // console.log(response);
        // response.json().then((test) => console.log(test));
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
}
