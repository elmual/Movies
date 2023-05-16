
// const let edirik ve bunu funksiyaya saliriq
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');
    }
}

// funksiyani chagiririq
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// bu kodu sadece funksiya daxiline yaziriq
function rememberMyFilms() {
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
}

// funksiyani chagiririq
rememberMyFilms();

// bu kodu funksiya daxiline yaziriq
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Cox az filme baxmisiniz.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Klassik film izleyicisi');
    } else if (personalMovieDB.count >= 30){
        console.log('Siz kinomansiniz');
    } else {
        console.log('Sehv bas verdi');
    }
}

// funksiyani chagiririq
detectPersonalLevel();

// data bazanin gorunub-gorunmemesi ucun funksiya yaziriq
// hidden arqumenti personalMovieDB.privat qiymeti goturur
// console.log-u bu funksiyanin daxiline yerlesdiririk
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// funksiyani chagiririq - diger funksiyalari muveqqeti bagla
showMyDB(personalMovieDB.privat);


// xosumuza gelen janrlar ucun funksiya yaradiriq
// istifadeci 1 yazacagi ucun burda dovr 1-den baslayir
// personalMovieDB.genres[i-1] burda ise 0-ci indeks ucun i-1 yazdiq
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Sizin xosunuza gelen ${i}-li janr`);
        personalMovieDB.genres[i-1] = genre;
    }
}

// yuxaridaki kodu qisa bele de yaza bilerik
// personalMovieDB.genres[i-1] = prompt(`Sizin xosunuza gelen ${i}-li janr`);

writeYourGenres();


