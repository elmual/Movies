const numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Axirinci baxdiginiz kino? '),
    b = prompt('Neche bal ile qiymetlendirirsiniz? '),
    c = prompt('Axirinci baxdiginiz kino? '),
    d = prompt('Neche bal ile qiymetlendirirsiniz? ');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

