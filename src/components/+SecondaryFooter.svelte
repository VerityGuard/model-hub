<script>
	import Logo from "./+Logo.svelte";

</script>

<footer class="border-gray-200 dark:border-gray-700 border-t relative z-40">
    <nav class="bg-white py-2.5 dark:bg-gray-900 text-gray-700 dark:text-gray-200">        
        <div class="flex flex-col container mx-auto px-4 justify-between space-y-2 md:flex-row md:items-center md:space-y-0 md:text-sm dark:text-gray-400">
            <div class="font-semibold text-black dark:text-gray-100 text-md md:hidden">Company</div>
            <a class="order-last pt-6 text-gray-400 dark:text-gray-300 md:order-none md:pt-0" href="/">© Flowbite</a>
            <a class="hover:underline" href="/models">Models</a>
            <a class="hover:underline" href="/models">Models</a>
            <a class="hover:underline" href="/models">Models</a>
            <a href="/" class="group order-first flex-none pb-6 md:order-none md:pb-0">
                <Logo svgClass="h-9" />
            </a>
            <div class="pt-6 font-semibold text-black dark:text-gray-100 text-md md:hidden md:pt-0">Website</div>
            <a class="hover:underline" href="/models">Models</a>
            <a class="hover:underline" href="/models">Models</a>
            <a class="hover:underline" href="/models">Models</a>
            <a class="hover:underline" href="/models">Models</a>
        </div>
    </nav>
</footer>