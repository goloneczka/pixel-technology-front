export default class LuhnaService {

    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }

    postData(array) {
        const validArray = array
            .filter(place => place.latitude !== "" && place.longitude !== "")
            .map(place => {
                return {
                    latitude: parseFloat(place.latitude),
                    longitude: parseFloat(place.longitude),
                    name: place.name
                }
        })

        return this.httpRequest.post(`NN`, validArray);
    }


}