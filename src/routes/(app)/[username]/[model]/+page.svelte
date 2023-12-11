<script>
	import { applyAction, enhance } from '$app/forms';
	import Avatar from '../../../../components/+Avatar.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

    const model = data.model;
    const user = model.owner;
</script>

<div class="py-6 px-12 bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-900">
    <div class="container mx-auto relative">
        <h1 class="flex flex-wrap items-center leading-tight text-lg md:text-xl">
            <div class="group flex flex-none items-center">
            <div class="relative mr-2 flex items-center"> 
                {#if user.avatar}
                    <img alt="{user.username}" class="w-5 h-5 rounded" src="{user.avatar}">
                {:else}
                    <Avatar name={user.username} />
                {/if}
            </div>
            <a href="/{user.username}" class="text-gray-400 dark:text-gray-300 hover:underline">{user.username}</a> 
            <div class="mx-0.5 text-gray-300 dark:text-gray-200">/</div>
            </div>
            <div class="max-w-full">
            <a class="break-words font-mono font-semibold hover:underline dark:text-white" href="/{user.username}/{model.name}">{model.name}</a> 
            </div>
        </h1>
    </div>
</div>

<form 
    method="post" 
    action="?/upload"
    use:enhance={async () => {
        return async ({ result }) => {
        await applyAction(result);
        };
    }}
    >
    <label for="files">Select files:</label>
    <input type="hidden" id="model_id" name="model_id" value={model.id}>
    <input type="file" id="files" name="files" multiple><br><br>
    <input type="submit">
</form>


<style>

</style>