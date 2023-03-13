let now = new Date();
let day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

let today = day[now.getDay()];
let month = months[now.getMonth()];
let hours = now.getHours();
let year = now.getFullYear();

{
  if (hours < 10) {
    hours = `0${hours}`;
  }
}
let minutes = now.getMinutes();
{
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
}
let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `${today} ${month}, ${hours}: ${minutes}, ${year}`;

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = MathRound(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = MathRound(
    response.data.main.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault;
  let apiKey = "067c6cc7fcc7cd2d90f6cc199e6efb40";
  let city = document.querySelector("search-weather").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}";
  axios.get(`${apiUrl}&appidl=${apiKey}`).then(displayWeatherCOndition);
}
let searchForm = document.querySelector("form#search-form");
searchForm.addEventListener("submit", displayCity);
