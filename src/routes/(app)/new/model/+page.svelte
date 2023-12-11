<script>
	import FormNewModel from "../../../../components/+FormNewModel.svelte";
</script>

<section>
    <div class="flex flex-col items-center px-6 mx-auto py-8 max-w-3xl">  
        <div class="w-full">
            <h1 class="mb-0.5 text-xl font-semibold md:text-3xl dark:text-white">Publish a new model</h1>
            <p class="text-md text-gray-500 dark:text-gray-350">A model serves as an endpoint for making predictions or executing specific tasks.</p>
        </div>
        <FormNewModel />
    </div>
</section>

<style>
</style>