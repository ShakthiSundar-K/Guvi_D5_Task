
class Movie {

    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    static getPG(movies) {
        let pgMovies = []; // Array to hold movies with "PG" rating
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].rating === "PG") {
                pgMovies.push(movies[i]); 
            }
        }
        return pgMovies;
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale); 


const movies = [
    new Movie("Inception", "Warner Bros", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("Spider-Man", "Marvel Studios", "PG"),
    new Movie("Shrek", "DreamWorks", "PG")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies); 
