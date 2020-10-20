export default class LuhnaService {

    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }

    postData(array) {
        const validArray = array
            .filter(place => place.latitude !== "" && place.longitude !== "")

        return this.httpRequest.post(`NN`, validArray);
    }


}