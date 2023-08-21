<script>
	import StepperIcon from "./+StepperIcon.svelte";
    /**
	 * @type {number}
	 */
     export let step;
</script>
<div class="container mx-auto px-12 max-xs:hidden pt-10">
    <ol class="flex justify-center items-center font-medium text-center text-gray-500 dark:text-gray-400 text-base">
        <StepperIcon mainTitle="Account" shortTitle="Info" stepperId={1} {step}>
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </StepperIcon>
        <StepperIcon mainTitle="Profile" shortTitle="Info" stepperId={2} {step}>
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </StepperIcon>
        <StepperIcon mainTitle="Confirmation" last={true} stepperId={3} {step}>
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </StepperIcon>
    </ol>
</div>

<style>
</style>