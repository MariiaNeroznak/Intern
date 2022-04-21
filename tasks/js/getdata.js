export class TestMe {
    tryMe() {
        return 1;
    }
}

export class Loader {
    constructor(sLink) {
        this.serverLink = sLink;
    }
    loadAndParseBlockData(bName) {
        return fetch(this.serverLink + '/' + bName)
        .then((response) => {
            if (!response) return;
            if (response.status === 200)
                return response.json();
            else
                throw new Error('Wrong status of answer');
        })
        .catch(err => {
            console.error('Loading or parsing error. ' + err.name + ': ' + err.message);
            return;
        });
    }
}

