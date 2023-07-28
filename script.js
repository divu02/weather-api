const button = document.getElementById('searchbtn');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
function my() {
    document.getElementById("con").style.display = "block";
}
async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=c6413f2fe84d449f850185731232807&q=${cityName}&aqi=yes`);
    return await promise.json();
}


button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;

})

// http://api.weatherapi.com/v1/current.json?key=c6413f2fe84d449f850185731232807&q=London&aqi=yes