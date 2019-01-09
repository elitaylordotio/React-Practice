export default class FilmBuilder {
    public getFilms():any {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                return(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}