export default class LuhnaService {

    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }

    postData(string) {
        return this.httpRequest.post(`luhna/${string}`);
    }


}