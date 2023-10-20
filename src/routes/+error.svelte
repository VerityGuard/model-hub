<script>
	import { page } from '$app/stores';
	import PrimaryFooter from '../components/+PrimaryFooter.svelte';
</script>

<main class="flex flex-1 flex-col">
    <div class="flex-1">
        <div class="container pb-32 pt-28 text-center 2xl:pb-40 2xl:pt-32">
            
            <img class="mx-auto mb-4 h-28 w-28" src="images/error.png" alt="">
            <div>
                <h1 class="mx-auto max-w-xl text-4xl font-bold text-gray-800 md:text-6xl">{$page.status}</h1>
                <p class="mx-auto mt-6 max-w-md text-lg text-gray-500">Sorry, we can't find the page you are looking for.
                <br>
                </p>
            </div>
        </div>
    </div>
</main>

<PrimaryFooter />

<style>

</style>