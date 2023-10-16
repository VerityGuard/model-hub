<script>
    import Logo from "../components/+Logo.svelte";
	import PrimaryFooter from "../components/+PrimaryFooter.svelte";
    import GithubStars from "../components/+GithubStars.svelte";
</script>

<main>
    <section class="container mx-auto px-4 pb-32 pt-28 text-center 2xl:pb-40 2xl:pt-32 dark:bg-gray-800">
        <Logo svgClass="mx-auto mb-4 h-24 w-24" />
        <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl max-w-5xl	mx-auto lg:text-6xl tracking-tight text-center dark:text-white">Rapidly build modern websites without ever leaving your HTML.</h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Build, train and deploy state of the art models powered by the reference open source in machine learning.</p>
        <div class="flex items-center justify-center mt-12">
            <GithubStars />
        </div>
    </section>
</main>

<PrimaryFooter />