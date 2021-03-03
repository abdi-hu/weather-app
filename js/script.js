let weatherData;

const $city = $('#city');
const $temp = $('#temp');
const $feel = $('#feel');
const $weather = $('#weather');
const $input = $('#city-input')



const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const KEY = ''


$('form').on('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();

    $input.val('').focus();

    $.ajax(`${BASE_URL}&appid=${KEY}&q=${term}&units=imperial`).then(function (data) {
        weatherData = data;

        render();

    }, function (error) {
        console.log('Error ', error)
        alert('Please make sure API key has been added');
    })
}

function render() {
    $city.text(weatherData.name);
    $temp.text(`${Math.round(weatherData.main.temp)}\u00B0`);
    $feel.text(`${Math.round(weatherData.main.feels_like)}\u00B0`);
    $weather.text(weatherData.weather[0].description)
}

