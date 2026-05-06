//1.
async function getPhotos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();

    const result = data
      .filter(p => p.id <= 5)
      .map(p => ({
        title: p.title,
        image: p.url
      }));

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getPhotos();
//2.
async function getPokemon() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();

    const result = data.results
      .filter(p => p.name.startsWith("b"))
      .map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getPokemon();
//3.
async function getAstronauts() {
  try {
    const res = await fetch("http://api.open-notify.org/astros.json");
    const data = await res.json();

    const result = data.people.map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getAstronauts();
//4.
async function getQuotes() {
  try {
    const res = await fetch("https://zenquotes.io/api/quotes");
    const data = await res.json();

    const result = data
      .filter(q => q.q.length < 100)
      .map(q => q.q);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getQuotes();
//5.
async function getUniversities() {
  try {
    const res = await fetch("http://universities.hipolabs.com/search?country=India");
    const data = await res.json();

    const result = data
      .filter(u => u.name.includes("Technology"))
      .map(u => u.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUniversities();
//6.
async function getDogFacts() {
  try {
    const res = await fetch("https://dogapi.dog/api/v2/facts");
    const data = await res.json();

    const result = data.data.map(d => d.attributes.body);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getDogFacts();

//7.
async function getCrypto() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const data = await res.json();

    const result = data
      .filter(c => c.current_price > 1000)
      .map(c => c.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getCrypto();
//8.
async function getUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();

    const result = data.results
      .filter(u => u.gender === "female")
      .map(u => u.name.first);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUsers();
//9.
async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population");
    const data = await res.json();

    const result = data
      .filter(c => c.population > 100000000)
      .map(c => c.name.common);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getCountries();
//10.

async function getPosts(){
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const result = data .filter(p => p.userId === 1) .map(p => p.title);
    console.log(result);

  }catch (err){
    console.error(err);
  }


}
getPosts();