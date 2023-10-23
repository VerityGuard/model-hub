<script>
    export let data;

    const TOTAL = data.total;
    const PAGE = data.page;
    const TOTAL_PAGES = data.total_pages;
    const PER_PAGE = data.per_page;

    function goToNextPage() {
        if (CURRENT_PAGE < TOTAL_PAGES) {
            CURRENT_PAGE++;
        }

        pages = getPagesToShow();
    }

    function goToPreviousPage() {
        if (CURRENT_PAGE > 1) {
            CURRENT_PAGE--;
        }

        pages = getPagesToShow();
    }

    function getPagesToShow() {
        const pages = [];
        const showMoreLeft = CURRENT_PAGE > NUMBER_SIDE_PAGES + 2;
        const showMoreRight = CURRENT_PAGE < TOTAL_PAGES - NUMBER_SIDE_PAGES - 1;

        pages.push(1);

        if (showMoreLeft) {
            pages.push("...");
        }

        const start = Math.max(2, CURRENT_PAGE - NUMBER_SIDE_PAGES);
        const end = Math.min(TOTAL_PAGES - 1, CURRENT_PAGE + NUMBER_SIDE_PAGES);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (showMoreRight) {
            pages.push("...");
        }

        pages.push(TOTAL_PAGES);

        return pages;
    }

    const NUMBER_PAGES = 8;
    const NUMBER_SIDE_PAGES = 2;

    const MORE_THAN_DEFAULT = TOTAL_PAGES > NUMBER_PAGES;
    const SHOW_PAGES = MORE_THAN_DEFAULT ? NUMBER_PAGES : TOTAL_PAGES;

    let CURRENT_PAGE = 1;

    let pages = getPagesToShow();
</script>

<div class="flex items-center justify-center py-10">
    <div class="w-full flex items-center justify-between select-none flex-wrap">
        <button on:click={goToPreviousPage} class="{CURRENT_PAGE === 1? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-775 cursor-pointer"} flex items-center py-2 px-3 rounded-md cursor-auto">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="text-base ml-3 font-medium leading-none">Previous</p>
        </button>
        <div class="md:flex hidden flex-wrap">
            {#if !MORE_THAN_DEFAULT}
                {#each Array(SHOW_PAGES) as _, index (index)}
                    <p 
                    class="{CURRENT_PAGE === index + 1 ? "font-semibold ring-1 ring-inset ring-gray-200 bg-gray-100 dark:ring-gray-750 dark:text-white dark:bg-gray-850 text-gray-900": "hover:bg-gray-100 dark:hover:bg-gray-775"} flex items-center text-base leading-none cursor-pointer rounded-md text-gray-600 mr-2 py-2 px-3">
                    {index + 1}
                    </p>
                {/each}
            {:else}
                {#each pages as page}
                    {#if page !== "..."}
                        <p 
                            class="{page === CURRENT_PAGE ? "font-semibold ring-1 ring-inset ring-gray-200 bg-gray-100 dark:ring-gray-750 dark:text-white dark:bg-gray-850 text-gray-900" : "hover:bg-gray-100 dark:hover:bg-gray-775"} flex items-center text-base leading-none cursor-pointer rounded-md text-gray-600 dark:text-gray-300 mr-2 py-2 px-3">
                            {page}
                        </p>
                    {:else}
                        <p 
                            class="flex items-center text-base leading-none cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-775 text-gray-600 dark:text-gray-300 mr-2 py-2 px-3">
                            ...
                        </p>
                    {/if}
                {/each}
    
            {/if}
        </div>
        <button on:click={goToNextPage} class="{CURRENT_PAGE === TOTAL_PAGES? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-775 cursor-pointer"} flex items-center py-2 px-3 rounded-md">
            <p class="text-base font-medium leading-none mr-3">Next</p>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>

<style>
</style>