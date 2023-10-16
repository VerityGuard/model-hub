<script>
	import { Button } from "flowbite-svelte";
	import Logo from "./+Logo.svelte";
	import { applyAction, enhance } from "$app/forms";

    let waitingForLogin = false;

	function handleSubmit() {
        waitingForLogin = true;

        setTimeout(() => {
            waitingForLogin = false;
        }, 2000);
	}
</script>

<div class="w-full rounded-xl shadow dark:border md:mt-0 md:max-w-md xl:p-0 bg-white dark:bg-gray-900 dark:border-gray-700">
    <div class="px-5 py-6">
        <Logo svgClass="mx-auto -mt-14 mb-2 w-20" transparent={false} />
        <h1 class="pt-3 pb-2 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log In
        </h1>
        <p class="font-light text-gray-500 dark:text-gray-400 mb-8 text-center">
            Don't have an account yet? <a href="/join" class="font-medium text-primary-700 underline dark:text-gray-400 dark:hover:text-white">Sign up</a>
        </p>
        <form 
            method="post" 
            use:enhance={async () => {
                return async ({ result }) => {
                await applyAction(result);
                };
            }}
          >
            <input type="hidden" name="grant_type" value="password">
            <div class="mb-14 grid grid-cols-1 gap-6">
                <div>
                    <label for="username" class="block mb-2 dark:text-gray-400 font-medium">Username or Email address</label>
                    <input autocorrect="off" autocapitalize="none" autocomplete="username" type="text" name="username" id="username" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="name@company.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 dark:text-gray-400 font-medium">Password</label>
                    <input autocomplete="current-password" type="password" name="password" id="password" placeholder="••••••••" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500" required>
                </div>
            </div>
            <div>
                <Button on:click={handleSubmit} type="submit" outline color="light" class="select-none w-full mb-3 text-base inline-flex bg-white text-gray-700 p-2.5 rounded-md border font-medium shadow-sm align-middle hover:bg-gray-50">
                    {#if waitingForLogin}
                        <svg aria-hidden="true" role="status" class="inline w-5 h-5 mr-3 fill-primary-700 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    {/if}
                    Login
                </Button>
                <p class="text-center mt-2">
                    <a href="/" class="font-medium text-primary-700 underline dark:text-gray-400 text-center dark:hover:text-white">Forgot your password?</a>
                </p>
            </div>
        </form>
    </div>
</div>