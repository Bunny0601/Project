// let api_key = `2e4d7397c38785a0e4fc0473f91dc891`;
let search = document.querySelector("#search");
let form = document.querySelector("form");
let temperature = document.querySelector("#temperature");
async function weatherReport() {
  let api = `https://api.openweathermap.org/data/2.5/weather?q={city name}${search.value}&appid=2e4d7397c38785a0e4fc0473f91dc891`;
  let response = await fetch(api);
  //    To fetch the dara of api/url
  let data = await response.json();
  //    to parse the data in json formate
  temperature.innerHTML = data.main.temp;
}
form.addEventListener("submit", (e) => {
  //
  e.preventDefault();
  weatherReport()
  console.log(search.value);
});
