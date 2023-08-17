<script>
    import clear from '$lib/images/clear.png'
    import rain from '$lib/images/rain.png'
    import snow from '$lib/images/snow.png'
    import cloud from '$lib/images/cloud.png'
    import haze from '$lib/images/mist.png'

    export let dataInfo = {
        main:{},
        weather:[],
        wind:{}
    };
    export let visible;

    let gambarUse=''

    switch(dataInfo.weather[0].main){
            case 'Clear':
                gambarUse = clear;
                break;
            case 'Rain':
                gambarUse = rain;
                break;
            case 'Snow':
                gambarUse = snow;
                break;
            case 'Clouds':
                gambarUse = cloud;
                break;
            case 'Haze':
                gambarUse = haze;
                break;
            default:
                gambarUse = '';
        }
</script>

<div class="weather-box {visible ? '':'fadeIn'}">
    <img src={gambarUse} alt="">
    <p class="temperature">{dataInfo.main.temp}<span>°C</span></p>
    <p class="description"></p>
</div>

<div class="weather-details {visible ? '': 'fadeIn'}">
    <div class="humidity">
        <i class="fa-solid fa-water"></i>
        <div class="text">
            <span>{dataInfo.main.humidity}%</span>
            <p>Humidity</p>
        </div>
    </div>
    <div class="wind {visible ? '': 'fadeIn'}">
        <i class="fa-solid fa-wind"></i>
        <div class="text">
            <span>{dataInfo.wind.speed}</span>
            <p>Wind Speed</p>
        </div>
    </div>
</div>