<script>
	import FormAccount from "../../../components/+FormAccount.svelte";
	import FormProfile from "../../../components/+FormProfile.svelte";
    
    let step = 1;

    function goToNextStep() {
        step++;
    }

</script>

<section>
    <!--<JoinStepper {step} />-->
    <div class="flex flex-col items-center px-6 mx-auto py-20">
        {#if step === 1}
            <FormAccount on:submit={goToNextStep} next="Profile" step={step} />
        {:else if step === 2}
            <FormProfile step={step} /> <!-- removed next property -->
        <!--{:else if step === 3}
            <span>CONFIRM</span>
        -->
        {/if}
    </div>
</section>