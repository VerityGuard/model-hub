<script>
	import { clickOutside } from "../actions/clickOutside";
    import SearchDropdown from './+SearchDropdown.svelte';

    /**
	 * @type {() => void}
	 */
    export let handleOutsideClick;
    export let open = false;
    
    function clearSearchQuery() {
        searchQuery = '';
        searchInput.focus();
    }

    let kbdClass = "inline-flex items-center p-0.5 text-muted bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 mr-1.5";

    /**
	 * @type {HTMLInputElement}
	 */
    let searchInput;
    let searchQuery = '';
    let showClearButton = false;

    $: {
        showClearButton = searchQuery.length > 0;
    }
</script>

{#if open}
    <div class="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 cursor-auto backdrop-blur-md backdrop-saturate-150"></div>
    <div class="fixed top-0 left-0 right-0 lg:inset-0 lg:h-full z-50 w-full lg:px-4 lg:py-10 flex justify-center items-start" tabindex="-1" aria-modal="true" role="dialog">
        <div use:clickOutside on:outsideclick={handleOutsideClick} class="rounded-none shadow-none h-screen m-0 max-w-full flex relative lg:max-w-2xl w-full lg:h-initial lg:max-h-full">
            <div class="bg-white dark:bg-gray-800 dark:text-gray-400 lg:rounded-lg border-gray-200 dark:border-gray-700 shadow-md relative flex flex-col mx-auto w-full">
                <header class="flex relative items-center px-4 border-b border-gray-200 dark:border-gray-700">
                    <form class="flex min-w-0 items-center flex-auto">
                        <label for="search-input">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </label>
                        <!-- svelte-ignore a11y-autofocus -->
                        <input bind:this={searchInput} bind:value={searchQuery} id="search-input" autofocus autocomplete="off" placeholder="Search" class="min-w-0 flex-auto mx-3 h-14 bg-transparent text-base focus:outline-none"/>
                        {#if showClearButton}
                            <button on:click={clearSearchQuery} type="button" aria-label="Clear query" class="hidden lg:flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-5 h-5">
                                    <line x1="3" x2="17" y1="3" y2="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
                                    <line x1="3" x2="17" y1="17" y2="3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
                                </svg>                                
                            </button> 
                        {/if}
                    </form>
                    <button on:click={handleOutsideClick} class="block lg:hidden text-red-600 dark:text-gray-400 cursor-pointer font-medium text-base" type="reset" aria-label="Cancel">Cancel</button>
                </header>
                <SearchDropdown {searchQuery} />
                <footer class="flex relative items-center p-4 border-t border-gray-200 dark:border-gray-700">
                    <div class="hidden lg:flex items-center">
                        <span class="text-muted text-xs flex items-center mr-4">
                            <kbd class={kbdClass}>                            
                                <svg width="15" height="15" aria-label="Enter key" role="img">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                                        <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path>
                                    </g>
                                </svg>
                            </kbd> 
                            to select
                        </span>
                        <span class="text-muted text-xs flex items-center mr-4">
                            <kbd class={kbdClass}>
                                <svg width="15" height="15" aria-label="Arrow down" role="img">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                                        <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
                                    </g>
                                </svg>
                            </kbd>
                            <kbd class={kbdClass}>
                                <svg width="15" height="15" aria-label="Arrow up" role="img">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                                        <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
                                    </g>
                                </svg>
                            </kbd> 
                            to navigate
                        </span>
                        <span class="text-muted text-xs flex items-center">
                            <kbd class={kbdClass}>
                                <svg width="15" height="15" aria-label="Escape key" role="img">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                                        <path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path>
                                    </g>
                                </svg>
                            </kbd> 
                            to close
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    </div>
{/if}

<style>
</style>