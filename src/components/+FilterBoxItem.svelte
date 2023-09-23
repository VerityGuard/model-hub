<script>
    /**
     * @type {string | undefined}
     */
    export let title;
    /**
     * @type {boolean}
     */
    let active = true;

    function onHyperlinkClick() {
        active = !active
    }
</script>

<a on:click={onHyperlinkClick} class="{!active && 'grayscale opacity-50' } hover:bg-gray-100  dark:hover:bg-gray-850 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 dark:text-white items-center rounded-md border inline-flex text-sm max-w-full overflow-hidden text-ellipsis whitespace-nowrap md:mb-1.5 md:mr-1.5" href="#">
    <slot />
    <span class="px-2">{title}</span> 
</a>