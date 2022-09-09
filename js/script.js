var divWithMovies = document.getElementById("div1");
var search = document.getElementById("search");
var contPopup = document.querySelector('.cont-popup');
var login = document.querySelector('#login');
var nameValid = document.getElementById('nameValid');
var passwordValid = document.getElementById('passwordValid');
var nameInput = document.getElementById('nameInput');
var passwordInput = document.getElementById('passwordInput');
var submitBtn = document.getElementById('submitBtn');
var count = 0;
count = 'fdsgsdfg';
var arr = ['asd'];
function handleValidName(e) {
    if (e.target.value.length < 3) {
        nameValid.innerHTML = 'length < 3';
        nameInput.style.border = '3px red double';
        submitBtn.disabled = true;
    }
    else {
        nameValid.innerHTML = '';
        nameInput.style.border = '';
        submitBtn.disabled = false;
    }
}
nameInput.addEventListener('input', handleValidName);
submitBtn.addEventListener('click', handleOpen);
var movies = [
    {
        name: "terminator",
        date: 1994,
        genre: "action"
    },
    {
        name: "titanic",
        date: 1997,
        genre: "romantic"
    },
    {
        name: "saw",
        date: 1995,
        genre: "horror"
    },
    {
        name: "blade",
        date: 1998,
        genre: "action"
    },
    {
        name: "snatch",
        date: 2000,
        genre: "criminal"
    },
    {
        name: "top gun",
        date: 1986,
        genre: "action"
    },
];
function getMovies(name, date, genre) {
    return "\n  <div class=\"film\">\n        <div>name: ".concat(name, "</div>\n        <div>date: ").concat(date, "</div>\n        <div>genre: ").concat(genre, "</div>\n        <img src=\"./assests/").concat(name, ".jpg\" width=\"100\" height=\"150\" alt=").concat(name, " />\n      </div>\n  ");
}
function handleSearch(e) {
    var searchByName = movies.filter(function (i) { return i.name.toLowerCase().includes(e.target.value.toLowerCase()); });
    var list = searchByName
        .map(function (_a) {
        var name = _a.name, date = _a.date, genre = _a.genre;
        return getMovies(name, date, genre);
    })
        .join();
    divWithMovies.innerHTML = list;
}
search.addEventListener("input", handleSearch);
var list = movies
    .map(function (_a) {
    var name = _a.name, date = _a.date, genre = _a.genre;
    return getMovies(name, date, genre);
})
    .join();
divWithMovies.innerHTML = list;
function handleOpen() {
    contPopup.classList.toggle('cont-popup');
}
login.addEventListener('click', handleOpen);
