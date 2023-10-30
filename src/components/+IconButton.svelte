<script>
    import { Button, Tooltip } from 'flowbite-svelte'

    export let toggleMessage = "";
    export let btnClass = "";
    export let wrapperClass = "";

    btnClass = `${btnClass} text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5`;
</script>

<div class="{wrapperClass}">
    <Button color="none" aria-expanded="false" class="{btnClass}" on:click>
        <slot />
    </Button>
    {#if toggleMessage}
        <Tooltip class="z-50" placement="bottom" target="_top">{toggleMessage}</Tooltip>
    {/if}
</div>