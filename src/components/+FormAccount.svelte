<script>
	import { Button } from "flowbite-svelte";
	import Logo from "./+Logo.svelte";
    export let next = "";
    export let step = 1;
</script>

<div class="w-full rounded-xl shadow dark:border md:mt-0 md:max-w-md xl:p-0 bg-white dark:bg-gray-900 dark:border-gray-700">
    <div class="px-5 py-6">
        <Logo svgClass="mx-auto -mt-14 mb-2 w-20" />
        <h1 class="pt-3 pb-2 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Join Flowbite
        </h1>
        <p class="font-light text-gray-500 dark:text-gray-400 mb-8 text-center">
            Already have an account? <a href="/login" class="font-medium text-primary-700 underline dark:text-gray-400 dark:hover:text-white">Log in</a>
        </p>
        <form on:submit action="?/join{!next && "&redirectTo=/"}" method="post">
            <div class="mb-14 grid grid-cols-1 gap-6">
                <div>
                    <label for="email" class="block mb-2 dark:text-gray-400 font-medium">Email address</label>
                    <input autocorrect="off" autocapitalize="none" autocomplete="email" type="email" name="email" id="email" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="name@company.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 dark:text-gray-400 font-medium">Password</label>
                    <input autocomplete="new-password" maxlength="100" minlength="4" type="password" name="password" id="password" placeholder="••••••••" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-600" required>
                </div>
            </div>
            <input name="step" id="step" type="hidden" value={step}>
            <div>
                <Button type="submit" outline color="light" class="w-full text-base inline-flex bg-white text-gray-700 p-2.5 rounded-md border font-medium shadow-sm align-middle hover:bg-gray-50">
                    {#if next}
                        Next Step: {next}
                    {:else}
                        Register
                    {/if}
                </Button>
            </div>
        </form>
    </div>
</div>