const numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Bu kodlarin yerine
// const answer1 = prompt('Axirinci baxdiginiz kino? '),
//     answer2 = prompt('Neche bal ile qiymetlendirirsiniz? '),
//     answer3 = prompt('Axirinci baxdiginiz kino? '),
//     answer4 = prompt('Neche bal ile qiymetlendirirsiniz? ');
// personalMovieDB.movies[answer1] = answer2;
// personalMovieDB.movies[answer3] = answer4;

// 12-19 yerine, bu kodlari yaziriq
for (let i = 0; i < 2; i++) {
    const a = prompt('Axirinci baxdiginiz kino? '),
        b = prompt('Neche bal ile qiymetlendirirsiniz? ');
// istifadechi otmena basarsa, null olur
// istifadeci hecne yazmadan ok basarsan, '' olur
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Hazirdi');
    } else {
        console.log('Sehv bas verdi');
        i--;
    } 
}

if (personalMovieDB.count < 10) {
    console.log('Cox az filme baxmisiniz.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Klassik film izleyicisi');
} else if (personalMovieDB.count >= 30){
    console.log('Siz kinomansiniz');
} else {
    console.log('Sehv bas verdi');
}

console.log(personalMovieDB);



