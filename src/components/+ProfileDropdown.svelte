<script>
  import { clickOutside } from "../actions/clickOutside";
	import { page } from '$app/stores';

  let user = $page.data.user;

  let profileWindowOpen = false;

  function onProfileIconClick() {
    profileWindowOpen = !profileWindowOpen
  }

  function onProfileWindowOutsideClick() {
    profileWindowOpen = false
  }
</script>


<div class="relative ml-10 px-3">
    <div>
      <button on:click={onProfileIconClick} type="button" class="relative hover:ring-2 ring-offset-1 ring-offset-transparent ring-gray-200 focus:ring-2 dark:ring-gray-700 flex rounded-full text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <span class="absolute -inset-1.5"></span>
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" src="{user.avatar}" alt="">
      </button>
    </div>
    {#if profileWindowOpen}
    <div use:clickOutside on:outsideclick={onProfileWindowOutsideClick} class="absolute right-0 mt-2 z-50 w-56 text-base list-none bg-white rounded-md divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
      <div class="py-3 px-4">
          <span class="block text-sm font-semibold text-gray-900 dark:text-white">{user.username}</span>
          <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
      </div>
      <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
          <li>
              <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My profile</a>
          </li>
          <li>
              <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account settings</a>
          </li>
      </ul>
      <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
            <li>
              <a href="#" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="mr-3 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                New Model
              </a>
          </li>
      </ul>
      <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
          <li>
              <a href="#" class="flex items-center text-primary-700 py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-primary-600">
                Sign out
              </a>
          </li>
      </ul>
  </div>
    {/if}
</div>


<style>

</style>