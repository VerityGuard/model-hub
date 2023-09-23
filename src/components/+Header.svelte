<script>
    import { DarkMode, Navbar, NavBrand, NavLi, NavUl, Button, Tooltip } from 'flowbite-svelte'
	import SearchBar from './+SearchBar.svelte';
    import SearchModal from './+SearchModal.svelte';
    import IconButton from './+IconButton.svelte';
    import Logo from "./+Logo.svelte";
    import Hamburger from './+Hamburger.svelte';
	import { afterUpdate, onMount } from 'svelte';

    let searching = false;
    let btnClass = 'text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5';


    /**
	 * @param {{ key?: any; ctrlKey?: any; preventDefault: () => void; stopPropagation: () => void; }} event
	 */
    function openSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.add("overflow-hidden");
        searching = true
    }

    /**
	 * @param {{ key?: any; ctrlKey?: any; preventDefault: () => void; stopPropagation: () => void; }} event
	 */
    function closeSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.remove("overflow-hidden");
        searching = false;
    }

    /**
	 * @param {{ key?: any; ctrlKey?: any; preventDefault: () => void; stopPropagation: () => void; }} event
	 */
    function handleSearchClick(event) {
        openSearch(event)
    }

    function handleOutsideClick(event) {
        closeSearch(event)
    }

    function toggleNavbar() {
        alert("hamburger yummy!")
    }

    /**
	 * @param {{ key?: any; ctrlKey?: any; preventDefault: () => void; stopPropagation: () => void; }} event
	 */
    function handleKeyDown(event) {
        if (searching) {
            if (event.key === 'Escape') {
                closeSearch(event)
            }
        }
        else {
            if (event.ctrlKey && (event.key === 'k' || event.key === 'K')) {
                openSearch(event)
            }
        }
    }

    onMount(() => {
        document.addEventListener('keydown', handleKeyDown);
    });

    afterUpdate(() => {
        document.addEventListener('keydown', handleKeyDown);
    });

</script>


<header class="border-gray-200 dark:border-gray-700 border-b relative z-50">
    
    <Navbar class="bg-white py-2.5 lg:px-8 2xl:px-32" navDivClass="max-[1024px]:max-w-full lg:mx-auto flex flex-wrap justify-between items-center">

        <section class="left flex items-center">
            <Hamburger on:click={toggleNavbar} />
            <NavBrand href="/">
                <Logo svgClass="mr-3 h-9" />
                <span class="hidden xs:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </NavBrand>
            <SearchBar on:click={handleSearchClick} />
        </section>

        <section class="center flex items-center">
            <NavUl divClass="w-full lg:block lg:w-auto" ulClass="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium p-2">
                <NavLi href="/models">
                    <div class="flex items-center">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                            <path opacity=".5" fill="currentColor" d="M12 12.3 3.5 7.05 12 1.8l8.5 5.25z"></path>
                            <path opacity=".75" fill="currentColor" d="M12 22.2v-9.9l8.5-5.25v9.9z"></path>
                            <path fill="currentColor" d="m12 22.2-8.5-5.25v-9.9L12 12.3z"></path>
                        </svg>       
                        <span class="pl-2">Models</span>
                    </div>
                </NavLi>
                <NavLi href="/docs">
                    <div class="flex items-center">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path opacity=".6" fill="currentColor" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96z"></path>
                            <path fill="currentColor" d="M96 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                        </svg>                                                                                                      
                        <span class="pl-2">Docs</span>
                    </div>
                </NavLi>
                <NavLi href="/chrome">
                    <div class="flex items-center">
                        <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                            <path opacity=".6" fill="currentColor" d="M256,386.648c-25.6,0-49.434-7.062-70.621-21.186c-21.186-14.124-37.076-31.779-47.669-53.848 L31.779,128C9.71,167.724,0,210.979,0,256c0,64.441,21.186,120.055,62.676,167.724s93.572,75.917,155.366,85.628l74.152-128.883 C285.131,383.117,271.89,386.648,256,386.648"></path> 
                            <path opacity=".7" fill="currentColor" d="M175.669,150.069c23.834-18.538,50.317-26.483,80.331-26.483h219.807 c-22.952-38.841-53.848-67.09-92.69-89.159C344.276,11.476,301.903,0,256,0c-39.724,0-77.683,8.828-112.11,25.6 S76.8,67.09,53.848,98.869L128,220.69C135.062,192.441,151.834,168.607,175.669,150.069"></path> 
                            <path opacity=".5" fill="currentColor" d="M492.579,159.779H344.276c25.6,25.6,43.255,59.145,43.255,96.221 c0,27.366-7.945,52.083-22.952,75.034L258.648,512c69.738-0.883,129.766-25.6,179.2-75.917S512,325.738,512,256 C512,223.338,506.703,188.91,492.579,159.779"></path> 
                            <path fill="currentColor" d="M256,158.897c52.966,0,97.103,44.138,97.103,97.103S308.966,353.103,256,353.103 S158.897,308.966,158.897,256S203.034,158.897,256,158.897"></path>
                        </svg>                                                                                                    
                        <span class="pl-2">Chrome Extension</span>
                    </div>
                </NavLi>
            </NavUl>
        </section>

        <section class="right flex items-center">

            <IconButton toggleMessage="Search" btnClass="xl:hidden" on:click={handleSearchClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pb-0.5 pr-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </IconButton>

            <div class="mx-2.5 hidden max-xl:block w-px h-4 bg-gray-300 dark:bg-gray-700" ></div>

            <IconButton toggleMessage="View on Github" btnClass="mr-1.5" wrapperClass="hidden xl:block">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-icon="github" role="img" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>            
            </IconButton>
    
            <IconButton toggleMessage="Join Community on Discord" btnClass="mr-1.5" wrapperClass="hidden xl:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 640 512" class="w-5 h-5">
                    <path fill="currentColor" d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path>
                </svg>            
            </IconButton>
    
            <IconButton toggleMessage="Subscribe to Youtube channel" btnClass="mr-1.5" wrapperClass="hidden xl:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 576 512" class="w-5 h-5">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>            
            </IconButton>

            <DarkMode {btnClass}/>
            <Tooltip placement="bottom" target="_top">Toggle dark mode</Tooltip>

            <Button href="/login" outline color="light" class="h-pixel-36 hidden ml-10 md:inline-flex bg-white text-gray-700 gap-2 justify-center items-center py-1.5 px-3 rounded-md border font-medium shadow-sm align-middle hover:bg-gray-50">
                Log In
                <svg class="w-2.5 h-auto" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z" fill="currentColor"/>
                </svg>
            </Button>

        </section>
    </Navbar>
</header>


<SearchModal bind:open={searching} {handleOutsideClick}/>

<style>
</style>