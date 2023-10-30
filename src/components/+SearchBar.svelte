<script>
	import { Button, Kbd } from "flowbite-svelte";
</script>

<div class="hidden relative xl:block ml-8">
    <Button outline color="light" class="px-3 py-1.5 w-72 justify-between items-start focus:ring-2" on:click>
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            <span class="pl-3 font-normal">
                Search
            </span>
        </div>
        <div class="flex items-center">
            <span class="pb-0.5">
                <Kbd class='px-2 py-1'>Ctrl</Kbd> + <Kbd class='px-2 py-1'>K</Kbd></span>
        </div>
    </Button>
</div>