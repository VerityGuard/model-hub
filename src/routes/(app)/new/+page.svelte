<script>
	import FormNewModel from "../../../components/+FormNewModel.svelte";

    /*
        let description = ''
        $: description_chars = description.length;
    */
</script>

<section>
    <div class="flex flex-col items-center px-6 mx-auto py-16 max-w-3xl">  
        <div class="text-center">
            <svg class="w-10 h-10 mx-auto text-primary-700 mb-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="3.5 2.5 17 19">
                <path d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path>
                <path d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path>                             
                <path d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path>    
            </svg>
            <h1 class="mb-0.5 text-xl font-semibold md:text-3xl dark:text-white">Create a new model repository</h1>
            <p class="text-lg text-gray-500 dark:text-gray-350">A repository contains all model files, including the revision history.</p>
        </div>
        <FormNewModel />
    </div>
</section>

<style>
</style>