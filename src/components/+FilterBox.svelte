<script>
	import FilterBoxItem from "./+FilterBoxItem.svelte";
</script>
<div class="mb-3">
   <div class="mb-3 text-sm font-medium text-gray-500">Tasks</div>
   <div class="flex flex-wrap">
      <FilterBoxItem title={"Fake News Detection"}>
         <div class="text-red-400 bg-red-500 bg-opacity-10 items-center flex h-7 w-8 pl-2">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32">
               <path d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v4H5V5zm-10 6h10v7H17zm-2 7H5v-7h10zM5 20h10v7H5zm12 7v-7h10v7z"></path>
            </svg>
         </div>
      </FilterBoxItem>
      <FilterBoxItem title={"Synthetic Text Detection"}>
         <div class="text-yellow-400 bg-yellow-500 bg-opacity-10 items-center flex h-7 w-8 pl-2">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32">
               <path d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v4H5V5zm-10 6h10v7H17zm-2 7H5v-7h10zM5 20h10v7H5zm12 7v-7h10v7z"></path>
            </svg>
         </div>
      </FilterBoxItem>
      <FilterBoxItem title={"Other"}>
         <div class="text-blue-400 bg-blue-500 bg-opacity-10 items-center flex h-7 w-8 pl-2">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32">
               <path d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v4H5V5zm-10 6h10v7H17zm-2 7H5v-7h10zM5 20h10v7H5zm12 7v-7h10v7z"></path>
            </svg>
         </div>
      </FilterBoxItem>
   </div>
</div>

