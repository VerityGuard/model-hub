<script>
    /**
	 * @type {number}
	 */
     export let step;
    /**
	 * @type {number}
	 */
     export let stepperId;
     export let last = false;
     export let mainTitle = "";
     export let shortTitle = "";

     /**
	 * @type {boolean}
	 */
    
     let completed = false;

     $: {
        if (step > stepperId) {
            completed = true;
        }
     }
</script>

{#if last}
    <li class="flex items-center">
        <span class="flex items-center mr-2.5 justify-center w-8 h-8 rounded-full -left-4 {completed ? "bg-red-200 dark:bg-red-900 text-red-500 dark:text-red-400" : "bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-400"}">
            {#if completed}
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            {:else}
                <slot />
            {/if}
        </span>
        {mainTitle} {#if shortTitle}<span class="hidden sm:inline-flex sm:ml-2">{shortTitle}</span>{/if}
    </li>
{:else}
    <li class="flex items-center md:after:content-[''] after:w-24 after:h-1 after:border-b after:border-gray-200 dark:after:border-gray-700 after:border-1 after:hidden md:after:inline-block after:mx-4 xl:after:mx-6">
        <span class="flex items-center after:content-['/'] md:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="flex items-center mr-2.5 justify-center w-8 h-8 rounded-full -left-4 {completed ? "bg-red-200 dark:bg-red-900 text-red-500 dark:text-red-400" : "bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-400"}">
                {#if completed}
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                {:else}
                    <slot />
                {/if}
            </span>
            {mainTitle} {#if shortTitle}<span class="hidden sm:inline-flex sm:ml-2">{shortTitle}</span>{/if}
        </span>
    </li>
{/if}
