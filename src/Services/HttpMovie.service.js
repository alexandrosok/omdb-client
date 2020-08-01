export default class HttpMovie {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:3000/movies/search";
    }

    SearchMovie(term, type, year) {

        let config = {
            headers: {
                username: "alex",
                password: 123
            }
        };

        return this.http.post(this.url, {term, type, year}, config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

}
