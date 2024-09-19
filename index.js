const apiKey = "c426706c52f877b13e4659093acfb792";

async function getWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Update the DOM elements with the fetched data
    document.getElementById("temp").innerHTML = `${Math.round(
      data.main.temp
    )} <sup>o</sup>C`;
    document.getElementById("city").textContent = data.name;
    document.querySelector(".col h5").textContent = `${data.main.humidity}%`;
    document.querySelector(
      ".col + .col h5"
    ).textContent = `${data.wind.speed} Km/h`;
  } catch (error) {
    alert(error.message);
  }
}

document
  .querySelector(".ri-search-line")
  .addEventListener("click", function () {
    const city = document.querySelector(".searchbox input").value;
    if (city) {
      getWeather(city);
    } else {
      alert("Please enter a city name");
    }
  });
