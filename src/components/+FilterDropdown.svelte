<script>
	import { fly } from "svelte/transition";
	import { clickOutside } from "../actions/clickOutside";

    /**
	 * @type {Array<{name: string, icon?: string | undefined;}>}
	 */
    export let options;
    /**
	 * @type {{ name: string; icon?: string | undefined; }}
	 */
     export let selected;

    let optionListVisible = false;

	/**
	 * @param {{ name: string; icon?: string | undefined; }} option
	 */
	function onOptionClick(option) {
		selected = option;
        optionListVisible = false;
	}

	function toggleOptionList() {
		optionListVisible = !optionListVisible
	}

    function handleOutsideClick() {
        optionListVisible = false;
    }
</script>

<div class="flex relative" use:clickOutside on:outsideclick={handleOutsideClick}>
    <button on:click={toggleOptionList} class="min-w-[11rem] focus:ring-4 focus:outline-none text-sm hover:text-gray-900 border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700 bg-white text-gray-700 shadow-sm align-middle flex-shrink-0 z-10 inline-flex justify-between items-center focus:border-gray-200 py-1.5 px-3 text-center border rounded-lg" type="button">
        <span class="overflow-hidden text-ellipsis flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="h-4 w-4 mr-2">
                <path fill="currentColor" d="M6 36h12v-4H6v4zm0-24v4h36v-4H6zm0 14h24v-4H6v4z"></path>
            </svg>
            {#if selected.icon}<img alt="" src="{selected.icon}" class="h-3 w-3 mr-2" />{/if}
            <span class="option">{selected.name}</span>
        </span>
        <svg class="{optionListVisible && 'rotate-180'} w-2.5 h-2.5 ml-2.5 transition ease-in-out duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>
    {#if optionListVisible}
        <div transition:fly={{ duration: 100, y: -10 }} class="z-10 absolute top-12 bg-white divide-y divide-gray-100 rounded-lg md:shadow-sm shadow-md w-full dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            {#each options as option}
                <li>
                    <button on:click={() => onOptionClick(option)} type="button" class="inline-flex w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="inline-flex items-center">
                            {#if selected.icon}<img alt="" src="{option.icon}" class="h-3.5 w-3.5 mr-2" />{/if}
                            <span class="option">{option.name}</span>
                        </div>
                    </button>
                </li>
            {/each}
            </ul>
        </div>
    {/if}
</div>