
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
    toogleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Xoşunuza gələn janrları arasında boşluq ilə qeyd edin`);

            if (genres == null || genres == '') {
                console.log('Sehv bas verdi');
                i--;
            } else {
                personalMovieDB.genres = genres.split(' ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Xosunuza gelen janr ${i + 1}: ${item}`);
        })
    }
};


