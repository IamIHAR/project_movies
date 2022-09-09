const divWithMovies = document.getElementById("div1") as HTMLElement
const search = document.getElementById("search") as HTMLElement
const contPopup = document.querySelector('.cont-popup') as HTMLElement
const login = document.querySelector('#login') as HTMLElement
const nameValid = document.getElementById('nameValid') as HTMLElement
const passwordValid = document.getElementById('passwordValid') as HTMLElement
const nameInput = document.getElementById('nameInput') as HTMLElement
const passwordInput = document.getElementById('passwordInput') as HTMLElement
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement

let count:number | string = 0
count = 'fdsgsdfg'

let arr:string[] = ['asd']
function handleValidName(e) {
 if(e.target.value.length < 3) {
  nameValid.innerHTML = 'length < 3'
  nameInput.style.border = '3px red double'
  submitBtn.disabled = true
 } else {
  nameValid.innerHTML = ''
  nameInput.style.border = ''
  submitBtn.disabled = false
 }
}
nameInput.addEventListener('input', handleValidName)

submitBtn.addEventListener('click', handleOpen)


const movies = [
  {
    name: "terminator",
    date: 1994,
    genre: "action",
  },
  {
    name: "titanic",
    date: 1997,
    genre: "romantic",
  },
  {
    name: "saw",
    date: 1995,
    genre: "horror",
  },
  {
    name: "blade",
    date: 1998,
    genre: "action",
  },
  {
    name: "snatch",
    date: 2000,
    genre: "criminal",
  },
  {
    name: "top gun",
    date: 1986,
    genre: "action",
  },
];

function getMovies(name, date, genre) {
  return `
  <div class="film">
        <div>name: ${name}</div>
        <div>date: ${date}</div>
        <div>genre: ${genre}</div>
        <img src="./assests/${name}.jpg" width="100" height="150" alt=${name} />
      </div>
  `;
}
function handleSearch(e) {
  const searchByName = movies.filter((i) => i.name.toLowerCase().includes(e.target.value.toLowerCase()));
  const list = searchByName
    .map(({ name, date, genre }) => getMovies(name, date, genre))
    .join();
  divWithMovies.innerHTML = list;
}

search.addEventListener("input", handleSearch);

const list = movies
  .map(({ name, date, genre }) => getMovies(name, date, genre))
  .join();
divWithMovies.innerHTML = list;


function handleOpen() {
  contPopup.classList.toggle('cont-popup')
}
login.addEventListener('click', handleOpen)


