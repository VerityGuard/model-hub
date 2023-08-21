<script>
	import IconButton from "./+IconButton.svelte";


</script>

<IconButton wrapperClass="lg:hidden mr-4" on:click>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" aria-label="bars 3" fill="none" viewBox="0 0 20 20" stroke-width="2">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 4h14M3 10h14M3 16h14"></path>
    </svg>    
    <svg class="w-5 h-5 shrink-0 hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <line x1="3" x2="17" y1="3" y2="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="3" x2="17" y1="17" y2="3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
    </svg>    
</IconButton>