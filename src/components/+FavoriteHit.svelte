<script>
    /**
    * @type {string}
    */
    export let title;
    /**
    * @type {string}
    */
    export let icon = "";
    /**
    * @type {string}
    */
    export let url;
    /**
    * @type {string | null}
    */
    export let id = null;
    /**
    * @type {() => void}
    */
    export let onRemoveClick;
</script>

<li {id} class="mt-3 search-item">
    <a href="{url}" class="focus:ring-4 focus:outline-none text-sm hover:text-gray-900 border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700 flex bg-white text-gray-700 leading-6 cursor-pointer p-3 rounded-lg shadow-sm hover:bg-gray-50">
        <div class="flex w-full items-center">
            {#if icon}
                <img alt="" class="w-6 h-6 rounded mr-4 item-icon" src={icon}>
            {/if}
            <div class="overflow-hidden text-ellipsis whitespace-nowrap w-full inline-flex font-medium">
                <span class="item-title">
                    {title}
                </span>
            </div>
            <div class="flex items-center">
                <span class="w-4.5 h-4.5 z-30 text-gray-700 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                </span>
            </div>
            <div class="pl-4 ml-4 border-l border-gray-300 dark:border-gray-500 flex items-center">     
                <button class="w-4 h-4 z-30 text-gray-700 hover:text-black dark:hover:text-white dark:text-gray-400" on:click|preventDefault|stopPropagation={onRemoveClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <line x1="3" x2="17" y1="3" y2="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
                        <line x1="3" x2="17" y1="17" y2="3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
                    </svg>   
                </button> 
            </div>                 
        </div>
    </a>
</li>