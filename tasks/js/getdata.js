'use strict';

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
        return fetch(this.serverLink + bName)
        .then((response) => {
            // console.log('Answer was received.');
            if (response.status === 200)
                return response.json();
            else
                throw new Error('Wrong status of answer');
        })
        .catch(error => {
            console.error('loadAndParseBlockData error: ', error);
            return;
        });
    }
}

