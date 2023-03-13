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

function searchCity() {
  city;
}
let apiKey = "067c6cc7fcc7cd2d90f6cc199e6efb40";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q${city}&units=metric&appid=${apiKey}";

axios.get(apiUrl).then(showTemperature);

let form = document.querySelector("#sub");
form.addEventListener("submit", searchCity);
