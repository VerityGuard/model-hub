<script>
	import { applyAction, enhance } from "$app/forms";
	import FormAccount from "../../../components/+FormAccount.svelte";
	import FormProfile from "../../../components/+FormProfile.svelte";
    
    let step = 1;
    /**
	 * @type {HTMLFormElement}
	 */
    let formReference;

    function goToNextStep() {
        step++;
    }

    function handleFormProfileClick() {
        formReference.submit();
    }
</script>

<section>
    <!--<JoinStepper {step} />-->
    <form 
        method="POST" 
        class="flex flex-col items-center px-6 mx-auto py-20" 
        enctype="multipart/form-data" bind:this={formReference}             
        use:enhance={async () => {
            return async ({ result }) => {
            await applyAction(result);
            };
        }}
        >
            <FormAccount on:click={goToNextStep} next="Profile" active={step === 1}/>
            <FormProfile on:click={handleFormProfileClick} active={step === 2} /> 
            <!--
                <span>CONFIRM</span>
            -->
    </form>
</section>