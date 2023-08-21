<script>
    /**
	 * @type {string}
	 */
    export let title;
    /**
	 * @type {string | undefined}
	 */
    export let icon = undefined;
    /**
	 * @type {string}
	 */
    export let searchQuery = "";
    /**
	 * @type {string}
	 */
    export let id;

    /**
	 * @type {((arg0: { title: string; id: string; url: string; icon?: string | undefined; }) => void) | undefined}
	 */
     export let onLinkClickCallbackFunction = undefined;

    const url = '/' + title;

    function onLinkClick() {
        if (onLinkClickCallbackFunction !== undefined) {
            const item = {title, id, url, icon};
            onLinkClickCallbackFunction(item);
        }
    }
</script>


<li {id} class="mt-3 search-item">
    <a on:click={onLinkClick} href="{url}" class="focus:ring-4 focus:outline-none text-sm hover:text-gray-900 border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700 flex bg-white text-gray-700 leading-6 cursor-pointer p-3 rounded-lg shadow-sm hover:bg-gray-50">
        <div class="flex w-full items-center">
            {#if icon}
                <img alt="" class="w-6 h-6 rounded mr-4 item-icon" src="{icon}">
            {/if}
            <div class="overflow-hidden text-ellipsis whitespace-nowrap w-full inline-flex font-medium">
                <span class="item-title">
                    {#if searchQuery}                    
                        {@html title.replace(new RegExp(`(${searchQuery})`, 'i'), '<mark class="bg-transparent text-primary-700 dark:text-white font-semibold">$1</mark>')}
                    {:else}
                        {title}
                    {/if}
                </span>
            </div>
            <div class="ml-4 w-6 h-6">
                <svg fill='none' viewBox="0 0 24 24" xmlns='http://www.w3.org/2000/svg'>
                    <path d='m11 9 3 3-3 3' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
                </svg>                       
            </div>
        </div>
    </a>
</li>