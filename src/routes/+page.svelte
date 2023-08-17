<script lang="ts">
    import Error404 from '$lib/components/Error404.svelte';
    import SearchBox from '$lib/components/SearchBox.svelte';
    import InfoWeather from '$lib/components/InfoWeather.svelte';
    import './style.css'

    let dataCuaca;
    let p='';
    let size = 105;
    let visible = false;

    async function searchWeather(p) {
        const req = await fetch(`/api/weather/${p}`)
        const data = await req.json();
        size = 605;
        dataCuaca = data.data

        if (data.data.cod === '404'){
            size = 400;
            visible = true;
            return;
        }else{
            visible = false;
        }
    }

    $: if(p === '') {
        size = 105;
    }

    $: visible;
    $: dataCuaca;
</script>

<svelte:head>
    <title>Weather Application Svelte-kit</title>
</svelte:head>

<div class="container" style="height: {size}px;">
    
    <SearchBox searchWeather={searchWeather} bind:city={p}/>
    
    {#if visible}
        <Error404 data={dataCuaca}/>
    {/if}

    <InfoWeather visible={visible} dataInfo={dataCuaca}/>
    
</div>

<style>
    .container {
        position: relative;
        width: 400px;
        background: #fff;
        padding: 28px 32px;
        overflow: hidden;
        border-radius: 18px;
        font-family: 'Roboto', sans-serif;
        transition: 0.6s ease-out;
    }
</style>