<script>
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
    <div>
        <form method="POST" class="flex flex-col items-center px-6 mx-auto py-20" enctype="multipart/form-data" bind:this={formReference}>
            <FormAccount on:click={goToNextStep} next="Profile" active={step === 1}/>
            <FormProfile on:click={handleFormProfileClick} active={step === 2} /> 
            <!--
                <span>CONFIRM</span>
            -->
        </form>
    </div>
</section>