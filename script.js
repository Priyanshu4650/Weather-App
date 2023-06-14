const input_city = document.querySelector(".input-city");
const container = document.querySelector(".container");
const inputCityName = input_city.value;
console.log(inputCityName);

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "ab899255a2msh0d7cbe336579e52p188978jsn27ed3a918a6d",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};
const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
		options
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			if (response.cloud_pct == undefined) {
				alert("Server Down at the moment!!!!! Come Back Later");
				location.reload();
			} else {
				cloud_pct.innerHTML = response.cloud_pct;
				temp.innerHTML = response.temp;
				feels_like.innerHTML = response.feels_like;
				humidity.innerHTML = response.humidity;
				// min_temp.innerHTML = response.min_temp
				// max_temp.innerHTML = response.max_temp
				wind_speed.innerHTML = response.wind_speed;
				wind_degrees.innerHTML = response.wind_degrees;
				sunrise.innerHTML = response.sunrise;
				sunset.innerHTML = response.sunset;
			}
		})
		.catch((err) => console.error(err));
};

getWeather("Delhi");
submit.addEventListener("click", (e, city) => {
	e.preventDefault();
	getWeather(input_city.value);
});
