<script>
	import { onMount } from "svelte";
	import ModelCard from "../../../components/+ModelCard.svelte";
	import ModelCardSkeleton from "../../../components/+ModelCardSkeleton.svelte";
	import FilterDropdown from "../../../components/+FilterDropdown.svelte";
	import FilterBox from "../../../components/+FilterBox.svelte";

    let bodyClasses = ["lg:bg-gradient-to-r", "lg:from-gray-75", "lg:to-gray-50", "dark:lg:from-gray-775", "dark:lg:to-gray-800", "lg:from-50%", "lg:to-50%"]

    onMount(() => {
        document.body.classList.add(...bodyClasses)
    
        return () => {
            document.body.classList.remove(...bodyClasses)
        };
    });

    const options = [
        {
            name: 'Trending',
        },
        {
            name: 'Most Likes',
        },
        {
            name: 'Recently Updated'
        }
    ];

    let selected = options[0];

    $: {
        console.log("Sort changed to " + selected.name)
    }

</script>

<section class="container mx-auto px-4 relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full bg-split first-split-red-400">
    <section class="pt-8 pr-6 pl-0 overflow-y-auto max-h-screen border-gray-200 bg-gray-75 dark:bg-gray-775 dark:border-gray-700 lg:static lg:col-span-4 xl:col-span-3 lg:border-r hidden lg:block">
        <FilterBox />
    </section>
    <section class="pt-8 lg:pl-6 col-span-full lg:col-span-6 xl:col-span-7 pb-12 bg-gray-50 dark:bg-gray-800">
        <div class="mb-8 items-center md:flex">
            <h1 class="text-xl leading-none text-black dark:text-white">Models <span class="ml-3 w-16 text-gray-400">199</span></h1>
            <div class="flex-1 md:px-8 py-6 md:py-0">
                <form class="w-full md:max-w-xs relative">
                    <svg class="w-4 h-4 absolute top-[50%] translate-y-[-50%] left-2.5 text-gray-300 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path opacity=".5" fill="currentColor" d="M12 12.3 3.5 7.05 12 1.8l8.5 5.25z"></path><path opacity=".75" fill="currentColor" d="M12 22.2v-9.9l8.5-5.25v9.9z"></path><path fill="currentColor" d="m12 22.2-8.5-5.25v-9.9L12 12.3z"></path></svg>
                    <input placeholder="Filter by keyword" type="text" name="model-keywords" id="model-keywords" class="pl-8 focus:ring-4 focus:outline-none text-sm hover:text-gray-900 border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700 bg-white text-gray-700 shadow-sm align-middle border rounded-lg focus:border-gray-200 block px-3 py-1.5 w-full placeholder:text-gray-300 dark:placeholder:text-gray-500">
                </form>  
            </div>
            <FilterDropdown {options} bind:selected/>
        </div>
        <div class="relative">
            <div class="grid grid-cols-1 gap-5 2xl:grid-cols-2">
                <ModelCard title="stabilityai/stable-diffusion-xl-base-0.9" description="Official repository for Project #2 of TAA (Tópicos de Aprendizagem Automática)"/>
                <ModelCard title="stabilityai/stable-diffusion-xl-base-0.9" description="Official repository"/>
                <ModelCard title="stabilityai/stable-diffusion-xl-base-0.9" description="Official repository for Project #2 of TAA (Tópicos de Aprendizagem Automática) aaaaaa aaaaaaa aaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaa aaaaaaa aaa"/>
                <ModelCard title="stabilityai/stable-diffusion-xl-base-0.9" description="Official repository for Project #2 of TAA (Tópicos de Aprendizagem Automática) fdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdaa"/>
                <ModelCard title="stabilityai/stable-diffusion-xl-base-0.9" description="O"/>
                <ModelCardSkeleton />
            </div>
        </div>
    </section>
</section>

<!--
    <section class="container mx-auto px-4 relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full md:gap-6">
    <section class="pt-8 lg:bg-gradient-to-r from-gray-50 to-gray-125 dark:from-gray-800 dark:to-gray-900 border-gray-200 bg-gray-125 dark:bg-gray-900 dark:border-gray-700 lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r hidden lg:block">

    </section>
    <section class="pt-8 col-span-full lg:col-span-6 xl:col-span-7 pb-12">
        <div class="relative">
            <div class="grid grid-cols-1 gap-5 2xl:grid-cols-2">
                <ModelCard />
                <ModelCard />
                <ModelCard />
                <ModelCard />
                <ModelCard />
            </div>
        </div>
    </section>
</section>

-->