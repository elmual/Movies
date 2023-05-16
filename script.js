
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');
//     }
// }

// yuxaridaki start funksiyasini obyekt daxilinde metod kimi yaziriq
// daha sonra yuxaridaki start(), let numberOfFilms; ve start funksiyasini sile bilerik
// count helelik 0 deyeri veririlr. Her yerde numberOfFilms deyisilir,personalMovieDB.count ile
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Neçə kinoya baxmısınız? ');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Neçə kinoya baxmısınız? ');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Axirinci baxdiginiz kino? '),
                b = prompt('Neche bal ile qiymetlendirirsiniz? ');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Hazirdi');
            } else {
                console.log('Sehv bas verdi');
                i--;
            } 
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Cox az filme baxmisiniz.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Klassik film izleyicisi');
        } else if (personalMovieDB.count >= 30){
            console.log('Siz kinomansiniz');
        } else {
            console.log('Sehv bas verdi');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Sizin xosunuza gelen ${i}-li janr`);
            personalMovieDB.genres[i-1] = genre;
        }
    }
};

// butun funksiyalari obyekt daxilinde metodlara ceviririk


