<script>
	import { onDestroy, onMount } from "svelte";
	import SearchHit from "./+SearchHit.svelte";
    import { routeToPage } from "../utils/navigation";
	import { recentSearches } from "../stores/recent-searches";
	import RecentHit from "./+RecentHit.svelte";
	import { favoriteSearches } from "../stores/favorite-searches";
	import FavoriteHit from "./+FavoriteHit.svelte";
	import { fly } from "svelte/transition";

    export let searchQuery = '';

    /* SEARCH DATA */

    const SAMPLE_LIMIT = 5;

    let models = [
        {
            name: "triticle/some-model"
        },
        {
            name: "DanielFerreira011102/ai-text-detector"
        }, 
        {
            name: "DanielFerreira011102/random"
        }, 
        {
            name: "JoseManel1/autism-detector"
        },
        {
            name: "JoseManel1/auugh-model"
        },
        {
            name: "JoseManel1/twitter-shitpost-finder"
        },
        {
            name: "JoseManel1/retard-alert"
        },
    ];

    let users = [
        {
            username: "DanielFerreira011102",
            icon: "https://aeiljuispo.cloudimg.io/v7/https://cdn-uploads.huggingface.co/production/uploads/64a94c07d14398e2709b50e7/5tNiMMrbwe1QIu9NsldeX.png?w=200&h=200&f=face"
        },
        {
            username: "JoseManel1",
            icon: "https://aeiljuispo.cloudimg.io/v7/https://cdn-uploads.huggingface.co/production/uploads/64a94c07d14398e2709b50e7/5tNiMMrbwe1QIu9NsldeX.png?w=200&h=200&f=face"
        }, 
        {
            username: "triticle",
            icon: "https://aeiljuispo.cloudimg.io/v7/https://cdn-uploads.huggingface.co/production/uploads/64a94c07d14398e2709b50e7/5tNiMMrbwe1QIu9NsldeX.png?w=200&h=200&f=face"
            
        }
    ];

    /**
	 * @type {string | any[]}
	 */
     let filteredModels;
    /**
	 * @type {string | any[]}
	 */
    let filteredUsers;
    /**
	 * @type {number}
	 */
    let modelHits;
    /**
	 * @type {number}
	 */
    let userHits;
    /**
	 * @type {number}
	 */
    let totalHits;

    /**
	 * @param {string} searchQuery
	 */
    function updateHits(searchQuery) {
        const lowerCaseQuery = searchQuery.toLowerCase();
        filteredModels = models.filter(model => model.name.toLowerCase().includes(lowerCaseQuery));
        filteredUsers = users.filter(user => user.username.toLowerCase().includes(lowerCaseQuery));
        modelHits = filteredModels.length;
        userHits = filteredUsers.length;
        totalHits = modelHits + userHits;
    }

    // @ts-ignore
    $: updateHits(searchQuery);




    /* SHORTCUTS NAVIGATION AND CACHING SEARCHES */

    /**
	 * @type {HTMLDivElement}
	 */
    let searchContainer;

    /**
	 * @param {{ key: string; preventDefault: () => void; }} event
	 */
    function handleKeyDown(event) {
        const focusedItem = document.activeElement;
        const focusedItemWrapper = focusedItem?.parentElement;

        if (event.key === 'Enter' && isSearchItem(focusedItemWrapper)) {
            const route = focusedItem?.getAttribute('href') ?? '';
            const id = extractIdFromItem(focusedItemWrapper);

            if (id) {
                const title = focusedItem?.querySelector('.item-title')?.textContent ?? '';
                // @ts-ignore
                const icon = focusedItem?.querySelector('.item-icon')?.src ?? undefined;
                const newItem = { title, icon, url: route, id };

                addToRecentSearches(newItem);
            }

            routeToPage(route, false);
        }

        const searchItems = getSearchItems();
        const currentIndex = getCurrentIndex(searchItems, focusedItemWrapper);

        if (isSearchItem(focusedItemWrapper)) {
            handleArrowKeys(event, currentIndex, searchItems);
        } else if (focusedItem?.id === 'search-input') {
            handleArrowKeysOnInput(event, searchItems);
        } else {
            handleArrowKeysOutsideSearch(event);
        }
    }

    /**
	 * @param {HTMLElement | null | undefined} element
	 */
    function isSearchItem(element) {
        return element?.classList.contains('search-item') ?? false;
    }

    /**
	 * @param {HTMLElement | null | undefined} itemWrapper
	 */
    function extractIdFromItem(itemWrapper) {
        const idRegex = /^(model|user):(.+)/;
        // @ts-ignore
        const match = itemWrapper.id.match(idRegex);
        return match ? match[0] : null;
    }

    function getSearchItems() {
        return searchContainer.getElementsByClassName('search-item');
    }

    /**
	 * @param {Iterable<any> | ArrayLike<any>} searchItems
	 * @param {HTMLElement | null | undefined} focusedItemWrapper
	 */
    function getCurrentIndex(searchItems, focusedItemWrapper) {
        return Array.from(searchItems).indexOf(focusedItemWrapper);
    }

    /**
	 * @param {{ key: any; preventDefault: any; }} event
	 * @param {number} currentIndex
	 * @param {string | any[] | HTMLCollectionOf<Element>} searchItems
	 */
    function handleArrowKeys(event, currentIndex, searchItems) {
        if (event.key === 'ArrowUp' && currentIndex === 0) {
            event.preventDefault();
            // @ts-ignore
            searchContainer.parentElement?.querySelector('#search-input')?.focus();
        } else if (event.key === 'ArrowDown' && currentIndex === searchItems.length - 1) {
            event.preventDefault();
            // @ts-ignore
            searchContainer.parentElement?.querySelector('#search-input')?.focus();
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            const targetIndex = event.key === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
            const targetItem = searchItems[targetIndex]?.firstElementChild;
            if (targetItem) targetItem.focus();
        }
    }

    /**
	 * @param {{ key: any; preventDefault: any; }} event
	 * @param {string | any[] | HTMLCollectionOf<Element>} searchItems
	 */
    function handleArrowKeysOnInput(event, searchItems) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            const targetIndex = event.key === 'ArrowUp' ? searchItems.length - 1 : 0;
            const targetItem = searchItems[targetIndex]?.firstElementChild;
            if (targetItem) targetItem.focus();
        }
    }

    /**
	 * @param {{ key: any; preventDefault: any; }} event
	 */
    function handleArrowKeysOutsideSearch(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            // @ts-ignore
            searchContainer.parentElement?.querySelector('#search-input')?.focus();
        }
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });




    /* RECENT SEARCHES */

    /**
	 * @param {string} id
	 */
    function onRecentRemoveClick(id) {
        recentSearches.removeItem(id);
    }

    /** @type {{items: Array<{ id: string; title: string; icon?: string | undefined; url: string; }>, total: number}} */
    let recentSearchesState;

    const unsubscribeRecentSearches = recentSearches.subscribe((state) => {
        recentSearchesState = state;
    });

    /* FAVORITE SEARCHES */

    /**
	 * @param {{ id: string; title: string; icon?: string | undefined; url: string; }} item
	 */
    function onFavoriteClick(item) {
        favoriteSearches.addItem(item);
        recentSearches.removeItem(item.id)
    }

    /**
	 * @param {string} id
	 */
    function onFavoriteRemoveClick(id) {
        favoriteSearches.removeItem(id);
    }

    /** @type {{items: Array<{ id: string; title: string; icon?: string | undefined; url: string; }>, total: number}} */
    let favoriteSearchesState;

    const unsubscribeFavoriteSearches = favoriteSearches.subscribe((state) => {
        favoriteSearchesState = state;
    });

    onDestroy(() => {
        unsubscribeRecentSearches();
        unsubscribeFavoriteSearches();
    });

    /**
	 * @param {{title: string; icon?: string | undefined; url: string; id: string;}} newItem
	 */
    function addToRecentSearches(newItem) {
        const found = favoriteSearchesState.items.findIndex(item => item.id === newItem.id)

        if (found === -1) {
            recentSearches.addItem(newItem);
        }
    }

</script>

<div bind:this={searchContainer} class="px-4 overflow-y-auto overscroll-contain min-h-[24px] h-full lg:max-h-[488px]">
    {#if searchQuery.length === 0}
        {#if recentSearchesState.total === 0 && favoriteSearchesState.total === 0}
            <div class="start-view my-0 mx-auto py-9 px-0 w-10/12 text-center">
                <p class="select-none m-0 text-base text-muted">
                        No recent searches
                </p>
            </div>
        {:else}
            {#if recentSearchesState.total > 0}
                <div class="py-4">
                    <div class="text-gray-900 dark:text-gray-200 font-medium text-base mb-4 flex items-center">
                        Recent
                    </div>
                    <ul>
                        {#each recentSearchesState.items as item}
                            <RecentHit title={item.title} url={item.url} icon={item.icon} id={item.id} onFavoriteClick={() => onFavoriteClick(item)} onRemoveClick={() => onRecentRemoveClick(item.id)} />
                        {/each}
                    </ul>
                </div>
            {/if}
            {#if favoriteSearchesState.total > 0}
                <div class="py-4">
                    <div class="text-gray-900 dark:text-gray-200 font-medium text-base mb-4 flex items-center">
                        Favorite
                    </div>
                    <ul>
                        {#each favoriteSearchesState.items as item}
                            <FavoriteHit title={item.title} url={item.url} icon={item.icon} id={item.id} onRemoveClick={() => onFavoriteRemoveClick(item.id)} />
                        {/each}
                    </ul>
                </div>
            {/if}
        {/if}
    {:else if totalHits === 0}
        <div class="start-view my-0 mx-auto py-9 px-0 w-10/12 text-center">
            <p class="select-none m-0 text-base text-muted break-words">No results for <span class="text-black dark:text-white">"{searchQuery}"</span></p>
        </div>
    {:else}
        {#if modelHits > 0}
            <div class="py-4">
                <div class="text-gray-900 dark:text-gray-200 font-medium text-base mb-4 flex items-center">
                    Models
                </div>
                <ul>
                    {#each filteredModels.slice(0, SAMPLE_LIMIT) as model}
                        <SearchHit title={model.name} {searchQuery} id="model:{model.name}" onLinkClickCallbackFunction={addToRecentSearches}/>
                    {/each}
                    {#if modelHits > SAMPLE_LIMIT}
                        <li class="mt-3 search-item">
                            <a href="#" class="focus:ring-4 focus:outline-none text-sm hover:text-gray-900 border border-gray-200 dark:border-gray-700 dark:hover:text-white dark:text-gray-400 dark:bg-gray-600 dark:hover:bg-gray-550 focus:ring-gray-200 dark:focus:ring-gray-700 flex bg-gray-100 text-gray-700 leading-6 cursor-pointer p-3 rounded-lg shadow-sm hover:bg-gray-125">
                                <div class="flex w-full items-center">
                                    <div class="overflow-hidden text-ellipsis whitespace-nowrap font-medium inline-flex w-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4.5,6C4.776123,6,5,6.223877,5,6.5V11c0.0009155,0.828064,0.671936,1.4990845,1.5,1.5H18.2930298l-2.6464844-2.6464844c-0.1871948-0.1937866-0.1871948-0.5009766,0-0.6947021C15.8383789,8.9602051,16.1549072,8.9546509,16.3535156,9.1465454l3.5,3.5c0.000061,0,0.0001221,0.000061,0.0001221,0.0001221c0.1951904,0.1951904,0.1951294,0.5117188-0.0001221,0.7068481l-3.5,3.5C16.2598877,16.9474487,16.1326294,17.0001831,16,17c-0.1325684,0-0.2597046-0.0526733-0.3533936-0.1464233c-0.1953125-0.1952515-0.1953125-0.5118408-0.0001221-0.7070923L18.2930298,13.5H6.5c-1.380188-0.0012817-2.4987183-1.119812-2.5-2.5V6.5C4,6.223877,4.223877,6,4.5,6z" fill="currentColor"></path>
                                        </svg>                   
                                        <span class="ml-2">See all {modelHits} model results for "{searchQuery}"</span>
                                    </div>
                                    <div class="ml-4 w-6 h-6">
                                        <svg fill='none' viewBox="0 0 24 24" xmlns='http://www.w3.org/2000/svg'>
                                            <path d='m11 9 3 3-3 3' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
                                        </svg>                       
                                    </div>
                                </div>
                            </a>
                        </li>
                    {/if}
                </ul>
            </div>
        {/if}
        {#if userHits > 0}
            <div class="py-4">
                <div class="text-gray-900 dark:text-gray-200 font-medium text-base mb-4 flex items-center">
                    Users
                </div>
                <ul>
                    {#each filteredUsers.slice(0, SAMPLE_LIMIT) as user}
                        <SearchHit title={user.username} icon={user.icon} {searchQuery} id="user:{user.username}" onLinkClickCallbackFunction={addToRecentSearches}/>
                    {/each}
                    {#if modelHits > SAMPLE_LIMIT}
                        <li class="mt-3 search-item">
                            <a href="#" class="focus:ring-4 focus:outline-none text-sm hover:text-gray-900 border border-gray-200 dark:border-gray-700 dark:hover:text-white dark:text-gray-400 dark:bg-gray-600 dark:hover:bg-gray-550 focus:ring-gray-200 dark:focus:ring-gray-700 flex bg-gray-100 text-gray-700 leading-6 cursor-pointer p-3 rounded-lg shadow-sm hover:bg-gray-125">
                                <div class="flex w-full items-center">
                                    <div class="overflow-hidden text-ellipsis whitespace-nowrap font-medium inline-flex w-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4.5,6C4.776123,6,5,6.223877,5,6.5V11c0.0009155,0.828064,0.671936,1.4990845,1.5,1.5H18.2930298l-2.6464844-2.6464844c-0.1871948-0.1937866-0.1871948-0.5009766,0-0.6947021C15.8383789,8.9602051,16.1549072,8.9546509,16.3535156,9.1465454l3.5,3.5c0.000061,0,0.0001221,0.000061,0.0001221,0.0001221c0.1951904,0.1951904,0.1951294,0.5117188-0.0001221,0.7068481l-3.5,3.5C16.2598877,16.9474487,16.1326294,17.0001831,16,17c-0.1325684,0-0.2597046-0.0526733-0.3533936-0.1464233c-0.1953125-0.1952515-0.1953125-0.5118408-0.0001221-0.7070923L18.2930298,13.5H6.5c-1.380188-0.0012817-2.4987183-1.119812-2.5-2.5V6.5C4,6.223877,4.223877,6,4.5,6z" fill="currentColor"></path>
                                        </svg>                   
                                        <span class="ml-2">See all {userHits} user results for "{searchQuery}"</span>
                                    </div>
                                    <div class="ml-4 w-6 h-6">
                                        <svg fill='none' viewBox="0 0 24 24" xmlns='http://www.w3.org/2000/svg'>
                                            <path d='m11 9 3 3-3 3' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
                                        </svg>                       
                                    </div>
                                </div>
                            </a>
                        </li>
                    {/if}
                </ul>
            </div>
        {/if}
    {/if}
</div>

<style>
</style>