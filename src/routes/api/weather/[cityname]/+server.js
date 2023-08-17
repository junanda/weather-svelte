import { API_KEY_WEATHER } from '$env/static/private';

export const GET = async ({params}) => {
    const rest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityname}&units=metric&appid=${API_KEY_WEATHER}`);
    const dataResponse = await rest.json();

    return new Response(JSON.stringify({data: dataResponse}), {status: 200})
}