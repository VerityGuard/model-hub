<script>
	/** @type {import('./$types').PageData} */
	export let data;

    const user = data.userRead
    const modelName = data.postModelData
</script>

<div class="container relative bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-900 px-6 py-8">
    <h1 class="flex flex-wrap items-center leading-tight text-lg md:text-xl">
        <div class="group flex flex-none items-center">
           <div class="relative mr-2 flex items-center"> 
                <img alt="{user.username}" class="w-5 h-5 rounded-full " src="{user.avatar}">
            </div>
           <a href="/{user.username}" class="text-gray-400 dark:text-gray-300 hover:underline">{user.username}</a> 
           <div class="mx-0.5 text-gray-300 dark:text-gray-200">/</div>
        </div>
        <div class="max-w-full">
           <a class="break-words font-mono font-semibold hover:underline dark:text-white" href="/{user.username}/{modelName}">{modelName}</a> 
        </div>
    </h1>
</div>

<style>

</style>