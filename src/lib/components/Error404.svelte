<script>
    import notFound404 from '$lib/images/404.png'

    export let data;

</script>

<div class="not-found">
    <img src={notFound404} alt="{data.message}">
    <p>{data.message}</p>
</div>

<style>
    .not-found {
        width: 100%;
        text-align: center;
        margin-top: 50px;
        scale: 1;
        opacity: 1;
        display: block;
    }

    .not-found img {
        width: 70%;
    }

    .not-found p {
        color: #06283D;
        font-size: 22px;
        font-weight: 500;
        margin-top: 12px;
    }
</style>