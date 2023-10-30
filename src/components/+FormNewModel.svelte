<script>
	import { applyAction, enhance } from "$app/forms";
	import { Button } from "flowbite-svelte";
    /*
        let description = ''
        $: description_chars = description.length;
    */
</script>
<form 
    class="w-full"
    method="post" 
    use:enhance={async () => {
        return async ({ result }) => {
        await applyAction(result);
        };
    }}
    >
    <div class="mt-12 flex flex-col space-y-5 sm:flex-row sm:space-x-2 sm:space-y-0">
        <div class="sm:w-64">
            <label for="owner" class="block mb-2 dark:text-gray-400 font-medium">Owner</label>
            <input autocomplete="username" type="text" name="owner" id="owner" placeholder="New model name" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500" required>
        </div>
        <span class="hidden sm:block self-end pb-2 text-2xl text-gray-250 dark:text-gray-500">/</span>
        <div class="flex-grow">
            <label for="name" class="block mb-2 dark:text-gray-400 font-medium">Model name</label>
            <input type="text" name="name" id="name" placeholder="New model name" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500" required>
        </div>
    </div> 
    <div class="mt-6">
        <div>
            <label for="description" class="block mb-2 dark:text-gray-400 font-medium">
                Description
                <span class="pl-1 text-gray-400 dark:text-gray-300 font-normal">(optional)</span>
            </label>
            <textarea maxlength="255" name="description" id="description" placeholder="New model description" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500"></textarea>
            <!--<div class="text-xs py-1 dark:text-gray-500 text-right">{description_chars} / 255</div>-->
        </div>
    </div>

    <div class="border-t border-gray-200 my-6 dark:border-gray-500"></div>

    <div class="space-y-6 dark:text-gray-400">
        <label class="flex cursor-pointer select-none">
           <input autocomplete="off" class="mr-2 mt-2 h-3.5 w-3.5 shrink-0 cursor-pointer ring-offset-gray-50 dark:bg-gray-500 dark:ring-offset-gray-800 text-primary-600 focus:ring-primary-700" name="visibility" type="radio" required checked value="public"> 
           <svg class="w-8 h-8 mt-1 mr-2 text-3xl shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
              <path fill-rule="evenodd" d="M4 3.66667C4 2.69421 4.38631 1.76158 5.07394 1.07394C5.76158 0.386308 6.69421 0 7.66667 0L27 0C27.2652 0 27.5196 0.105357 27.7071 0.292893C27.8946 0.48043 28 0.734784 28 1V28.3333C28 28.5986 27.8946 28.8529 27.7071 29.0404C27.5196 29.228 27.2652 29.3333 27 29.3333H19C18.7348 29.3333 18.4804 29.228 18.2929 29.0404C18.1054 28.8529 18 28.5986 18 28.3333C18 28.0681 18.1054 27.8138 18.2929 27.6262C18.4804 27.4387 18.7348 27.3333 19 27.3333H26V22H8C7.46957 22 6.96086 22.2107 6.58579 22.5858C6.21071 22.9609 6 23.4696 6 24V25C6 25.9547 6.57333 26.7787 7.4 27.14C7.63487 27.2513 7.81719 27.4496 7.90833 27.693C7.99948 27.9364 7.99228 28.2057 7.88828 28.4439C7.78427 28.6821 7.59162 28.8704 7.35114 28.969C7.11067 29.0676 6.84126 29.0686 6.6 28.972C5.82716 28.6347 5.16951 28.0792 4.70769 27.3737C4.24586 26.6682 3.99992 25.8432 4 25V3.66667ZM26 2V20H8C7.272 20 6.588 20.1947 6 20.5347V3.66667C6 2.74667 6.74667 2 7.66667 2H26Z" fill="currentColor"></path>
              <path d="M9.33333 24.3333C9.33333 24.2449 9.36845 24.1601 9.43096 24.0976C9.49348 24.0351 9.57826 24 9.66667 24H16.3333C16.4217 24 16.5065 24.0351 16.569 24.0976C16.6315 24.1601 16.6667 24.2449 16.6667 24.3333V31.0133C16.6664 31.0747 16.6491 31.1347 16.6169 31.1869C16.5847 31.2391 16.5386 31.2814 16.4839 31.3091C16.4292 31.3368 16.3679 31.3489 16.3067 31.344C16.2456 31.3391 16.187 31.3174 16.1373 31.2813L13.196 29.1427C13.139 29.1013 13.0704 29.079 13 29.079C12.9296 29.079 12.861 29.1013 12.804 29.1427L9.86267 31.28C9.81314 31.316 9.75465 31.3377 9.69362 31.3426C9.63259 31.3476 9.57137 31.3356 9.51668 31.3081C9.462 31.2805 9.41596 31.2385 9.38361 31.1865C9.35127 31.1345 9.33387 31.0746 9.33333 31.0133V24.3333Z" fill="currentColor"></path>
           </svg>
           <div class="flex flex-col">
              <div class="font-medium">Public</div>
              <span class="text-sm text-gray-500">Anyone on the internet can see this model repository. You choose who can commit.</span>
           </div>
        </label>
        <label class="flex cursor-pointer select-none">
           <input autocomplete="off" class="select-none mr-2 mt-2 h-3.5 w-3.5 shrink-0 cursor-pointer ring-offset-gray-50 dark:bg-gray-500 dark:ring-offset-gray-800 text-primary-600 focus:ring-primary-700" name="visibility" type="radio" required value="private"> 
           <svg class="w-8 h-8 mt-1 mr-2 text-3xl shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
              <path d="M4 3.66667C4 2.69421 4.38631 1.76158 5.07394 1.07394C5.76157 0.386308 6.69421 0 7.66667 0L27 0C27.2652 0 27.5196 0.105357 27.7071 0.292893C27.8946 0.48043 28 0.734784 28 1V28.3333C28 28.5986 27.8946 28.8529 27.7071 29.0404C27.5196 29.228 27.2652 29.3333 27 29.3333H19C18.7348 29.3333 18.4804 29.228 18.2929 29.0404C18.1054 28.8529 18 28.5986 18 28.3333C18 28.0681 18.1054 27.8138 18.2929 27.6262C18.4804 27.4387 18.7348 27.3333 19 27.3333H26V22H8C7.46957 22 6.96086 22.2107 6.58579 22.5858C6.21071 22.9609 6 23.4696 6 24V25C6 25.9547 6.57333 26.7787 7.4 27.14C7.63487 27.2513 7.81719 27.4496 7.90833 27.693C7.99948 27.9364 7.99228 28.2057 7.88828 28.4439C7.78427 28.6821 7.59162 28.8704 7.35114 28.969C7.11067 29.0676 6.84126 29.0686 6.6 28.972C5.82716 28.6347 5.16951 28.0792 4.70769 27.3737C4.24586 26.6682 3.99992 25.8432 4 25V3.66667ZM26 2V20H8C7.272 20 6.588 20.1947 6 20.5347V3.66667C6 2.74667 6.74667 2 7.66667 2H26Z" fill="currentColor" fill-rule="evenodd"></path>
              <path d="M9.33333 24.3333C9.33333 24.2449 9.36845 24.1601 9.43096 24.0976C9.49348 24.0351 9.57826 24 9.66667 24H16.3333C16.4217 24 16.5065 24.0351 16.569 24.0976C16.6315 24.1601 16.6667 24.2449 16.6667 24.3333V31.0133C16.6664 31.0747 16.6491 31.1347 16.6169 31.1869C16.5847 31.2391 16.5386 31.2814 16.4839 31.3091C16.4292 31.3368 16.3679 31.3489 16.3067 31.344C16.2456 31.3391 16.187 31.3174 16.1373 31.2813L13.196 29.1427C13.139 29.1013 13.0704 29.079 13 29.079C12.9296 29.079 12.861 29.1013 12.804 29.1427L9.86267 31.28C9.81314 31.316 9.75465 31.3377 9.69362 31.3426C9.63259 31.3476 9.57137 31.3356 9.51668 31.3081C9.462 31.2805 9.41596 31.2385 9.38361 31.1865C9.35127 31.1345 9.33387 31.0746 9.33333 31.0133V24.3333Z" fill="currentColor"></path>
              <path d="M15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9H15ZM19 9C19 7.34315 17.6569 6 16 6C14.3431 6 13 7.34315 13 9C12.4477 9 12 9.44772 12 10V15C12 15.5523 12.4477 16 13 16H19C19.5523 16 20 15.5523 20 15V10C20 9.44772 19.5523 9 19 9ZM14 14V11H18V14H14Z" fill="currentColor" fill-rule="evenodd"></path>
           </svg>
           <div class="flex flex-col">
              <div class="font-medium">Private</div>
              <span class="text-sm text-gray-500">You choose who can see and commit to this model repository.</span>
           </div>
        </label>
     </div>

     <div class="border-t border-gray-200 my-6 dark:border-gray-500"></div>

     <div>
        <label for="license" class="block mb-2 dark:text-gray-400 font-medium">
            Choose a license
        </label>
        <input type="text"  name="license" id="license" placeholder="New model license" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500">
        <span class="text-sm text-gray-500">
            A license tells others what they can and can't do with your code.
            <a href="#" target="_blank" class="font-medium text-primary-700 underline dark:text-gray-400 dark:hover:text-white">
                Learn more about licenses.
            </a>
        </span>
    </div>

    <div class="mt-6">
        <label for="license" class="block mb-2 dark:text-gray-400 font-medium">
            Add .gitignore
        </label>
        <input type="text" name="gitignore" id="gitignore" placeholder="New model .gitignore" class="border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:text-gray-250 dark:focus:ring-gray-500 dark:focus:border-gray-500">
        <span class="text-sm text-gray-500">
            This is where you can choose which files not to track.
            <a href="#" target="_blank" class="font-medium text-primary-700 underline dark:text-gray-400 dark:hover:text-white">
                Learn more about ignoring files.
            </a>
        </span>
    </div>

    <div class="mt-6">
        <label class="flex cursor-pointer select-none dark:text-gray-400">
            <input id="readme" name="readme" type="checkbox" class="shrink-0 mr-3 mt-2 w-3.5 h-3.5 cursor-pointer ring-offset-gray-50 dark:bg-gray-500 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600 rounded text-primary-600 focus:ring-primary-700">  
            <div class="flex flex-col">
               <div class="font-medium">Add README</div>
               <span class="text-sm text-gray-500">
                This is where you can write your model card.
                <a href="#" target="_blank" class="font-medium text-primary-700 underline dark:text-gray-400 dark:hover:text-white">
                    Learn more about READMEs.
                </a>
            </span>
            </div>
         </label>
    </div>

    <div class="border-t border-gray-200 my-6 dark:border-gray-500"></div>

    <div class="flex">
        <Button on:click type="submit" outline color="light" class=" focus:ring-2 w-60 select-none text-base inline-flex text-gray-700 p-2.5 bg-white rounded-md border font-medium shadow-sm align-middle hover:bg-gray-50">
            Create Model
        </Button>
    </div>
</form> 