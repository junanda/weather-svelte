<script>
    // export let dataCuaca;
    export let searchWeather;
    export let city;
</script>

<div class="search-box">
    <i class="fa-solid fa-location-dot"></i>
    <input type="text" placeholder="Enter your location" bind:value={city}>
    <button class="fa-solid fa-magnifying-glass" on:click={() => searchWeather(city)}></button>
</div>

<style>
    .search-box {
    width: 100%;
    height: min-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search-box input {
    color: #06283D;
    width: 80%;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    padding-left: 32px;
}

.search-box input::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: #06283D;
    text-transform: capitalize;
}

.search-box button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #06283D;
    background: #dff6ff;
    border-radius: 50%;
    font-size: 22px;
    transition: 0.4s ease;
}

.search-box button:hover {
    color: #fff;
    background: #06283D;
}

.search-box i {
    position: absolute;
    color: #06283D;
    font-size: 28px;
}
</style>