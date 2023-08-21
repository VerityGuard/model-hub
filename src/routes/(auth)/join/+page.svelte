<script>
	import FormAccount from "../../../components/+FormAccount.svelte";
	import FormProfile from "../../../components/+FormProfile.svelte";
    import JoinStepper from "../../../components/+JoinStepper.svelte";
    
    let step = 1;

    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    function goToNextStep(event) {
        event.preventDefault();
        step++;
    }

</script>

<section>
    <JoinStepper {step} />
    <div class="flex flex-col items-center px-6 mx-auto py-20">
        {#if step === 1}
            <FormAccount on:submit={goToNextStep} next="Profile" />
        {:else if step === 2}
            <FormProfile on:submit={goToNextStep} next="Confirmation"/>
        {:else if step === 3}
            <span>CONFIRM</span>
        {/if}
    </div>
</section>