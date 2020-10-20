

export default class HttpRequest {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    post(url, data) {
        return this.execute(url, 'POST', data)
    }


    execute(url, method, data) {
        return fetch(`${this.baseUrl}/${url}`, {
            method: method,
            headers: new Headers({'Content-Type': 'application/json'}),
            credentials: 'same-origin',
            cache: 'no-cache',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errors => {
                        return {
                            status: response.status,
                            errors: errors.errors
                        }
                    })
                }
                return response.json();
            })
            .catch(reason => { return {
                status: 400,
                errors: reason
            }})
    }
}


